/*
This project will involve implementing a PostgreSQL database that’s suitable for storing data for a data sharing application. Imagine that your company has created a data platform that allows users to share datasets and the metadata (e.g. number of downloads, number of views, path to raw file).

A few select data publishers have been given access to your database and you’ve been tasked with setting up the permissions that allow these publishers to get relevant information about how users are interacting with the data they’ve uploaded.
*/

/*
1. Write a query to show the name of the super user role
*/
select rolname
from pg_catalog.pg_roles
where rolsuper = true;/*superuser/admin*/

/*
2. check other roles
*/
select *
from pg_catalog.pg_roles;

/*
3. Check the name of the role currently using
*/
SELECT current_role;

/*
4. Adding a publisher
Create login with superuser permissions
*/
create role abc_open_data with login superuser;

/*to check just run - returns ccuser and abc_open_data*/
select rolname
from pg_catalog.pg_roles
where rolsuper = true;/*superuser/admin*/

/*
5.Create a non-superuser group role named publishers and include abc_open_data as a member.
*/
create role publishers with nosuperuser ROLE abc_open_data;

/*
6. Grant USAGE on analytics schema to publishers
*/
grant usage on schema analytics to publishers;

/*
7. Now that publishers has USAGE, write the query that grants publishers the ability to SELECT on all existing tables in analytics.
*/
/*Single table*/
--grant select on analytics.downloads to --publishers;

/*All tables in schema analytics*/
GRANT SELECT ON ALL TABLES IN SCHEMA analytics TO publishers;

/*
8. Check to see how PostgreSQL has recorded the changes to the schema permissions you just updated.
*/
SELECT * FROM information_schema.table_privileges
WHERE grantee = 'publishers';

/*
9. Confirm that abc_open_data has select permission on analytics.downloads through inheritance from publishers
*/
set role abc_open_data;
SELECT * FROM analytics.downloads limit 10;
/*set back role to ccuser to do other administrative tasks*/
set role ccuser;

/*
10. Select from table directory.datasets
*/
SELECT * FROM directory.datasets LIMIT 5;

/*
11. Grant usgae on directory to publishers
*/
grant usage on schema directory to publishers;

/*
12. Grant select on all columns of directory.datasets except data_checksum - column level security
*/
GRANT SELECT (id, create_date, hosting_path, publisher, src_size) 
ON directory.datasets to publishers;

/*
13. 
Let’s try what might happen if a publisher tries to query the dataset directory for all dataset names and paths.
*/
set role abc_open_data;

/*This should fail cz column level security inherited from publisher - so in oreder for the query to work we need to remove data_checksum from the query.*/
SELECT id, publisher, hosting_path, data_checksum 
FROM directory.datasets limit 3;

/*Set back the role to ccuser*/
set role ccuser;

/*
14. Create row level security on analytics.downloads. Create and enable policy that says that the current_user must be the publisher of the dataset to SELECT.
*/
select * from analytics.downloads limit 4;

CREATE POLICY dwds_rls_policy ON analytics.downloads FOR select 
TO publishers USING (owner=current_user);

/*Enable policy*/
ALTER TABLE analytics.downloads ENABLE ROW LEVEL SECURITY;

/*
15. SELECT the first few rows of this table. Then SET your role to abc_open_data and re-run the same query, are the results the same?
*/
select *
from analytics.downloads limit 3; /*ccuser can view all rows without restriction.*/

/*Switch user to abc_open_data then run the query*/
set role abc_open_data;
select *
from analytics.downloads limit 3; /*can view only the rown with publisher abc_open_data.*/