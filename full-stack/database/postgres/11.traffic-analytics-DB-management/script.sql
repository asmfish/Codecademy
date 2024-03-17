/*
In this project you’ll use what you’ve learned about database maintenance to manage a table that receives constant updates from a network of sensors.

Imagine that your company provides information about vehicle traffic around it’s retail locations. After anyone passes by one of your company’s cameras, an observation is created with the time, location, time spent in the observation area (in seconds), and their distance traveled in the observation area (in meters).

Indexes:
"observations_pkey" PRIMARY KEY, btree (id)
"observations_location_id_datetime_idx" btree (location_id, datetime)
*/

SELECT * FROM sensors.observations LIMIT 5;

/*
1. Understund the size of the table
*/
SELECT pg_size_pretty(
pg_total_relation_size('sensors.observations')
) as total_size; --2352kb

/*
2. Check the indexes in this table and their sizes
*/
SELECT pg_size_pretty(
pg_total_relation_size('sensors.observations_pkey')
) as idx_1_size,--712kb
pg_size_pretty(
pg_total_relation_size('sensors.observations_location_id_datetime_idx')
) as idx_2_size;--448kb

/*
3. Write a query that returns the size of the table’s data, indexes, and the total relation size as three separate columns.
*/
--tbl_size	idx_size	total_size
--1192 kB	1160 kB	2352 kB
SELECT 
  pg_size_pretty(pg_table_size('sensors.observations')) as tbl_size, 
  pg_size_pretty(pg_indexes_size('sensors.observations')) as idx_size,
  pg_size_pretty(pg_total_relation_size('sensors.observations')) as total_size;

/*
4. Imagine that sensors.observations is updated by some software that’s running on each camera. The code that runs on the camera has been updated and will now include the distance field in feet instead of meters.

Write a query that UPDATEs the value of distance to feet. You can do this by multiplying the current value of the column by 3.281.
*/
UPDATE sensors.observations
SET distance = distance * 3.281;

/*
5. Check the size of the tables and indexes now, are they significantly larger following the UPDATE? Yes, Size increased because of the update.
*/
--tbl_size	idx_size	total_size
--2344 kB	2232 kB	4576 kB
SELECT 
  pg_size_pretty(pg_table_size('sensors.observations')) as tbl_size, 
  pg_size_pretty(pg_indexes_size('sensors.observations')) as idx_size,
  pg_size_pretty(pg_total_relation_size('sensors.observations')) as total_size;

/*
6. Apply regular vaccum and check the size
*/
VACUUM sensors.observations;

--After vaccum size increased a little
--tbl_size	idx_size	total_size
--2352 kB	2232 kB	4584 kB
SELECT 
  pg_size_pretty(pg_table_size('sensors.observations')) as tbl_size, 
  pg_size_pretty(pg_indexes_size('sensors.observations')) as idx_size,
  pg_size_pretty(pg_total_relation_size('sensors.observations')) as total_size;

/*
7. Add some data use code below
*/
\COPY sensors.observations (id, datetime, location_id, duration, distance, category) FROM './additional_obs_types.csv' WITH DELIMITER ',' CSV HEADER;

/*
8. Check the table size after insert
*/
--Size didn't change after insert'
--tbl_size	idx_size	total_size
--2352 kB	2232 kB	4584 kB
SELECT 
  pg_size_pretty(pg_table_size('sensors.observations')) as tbl_size, 
  pg_size_pretty(pg_indexes_size('sensors.observations')) as idx_size,
  pg_size_pretty(pg_total_relation_size('sensors.observations')) as total_size;

/*
9. The table size has not increased it's space on the disk
because of the insert. Run VACUUM FULL to return any excess space. 
*/
/*Run Vacuum Full*/
VACUUM FULL sensors.observations;

--Size reduced
--tbl_size	idx_size	total_size
--1272 kB	1008 kB	2280 kB
SELECT 
  pg_size_pretty(pg_table_size('sensors.observations')) as tbl_size, 
  pg_size_pretty(pg_indexes_size('sensors.observations')) as idx_size,
  pg_size_pretty(pg_total_relation_size('sensors.observations')) as total_size;

/*
10. Perform large delete, write a query to delete all cameras at location_id > 24
*/
DELETE FROM sensors.observations WHERE location_id > 24;

/*
11. Check disk size after delete
*/
--After delete disk size has not changed
--tbl_size	idx_size	total_size
--1272 kB	1008 kB	2280 kB
SELECT 
  pg_size_pretty(pg_table_size('sensors.observations')) as tbl_size, 
  pg_size_pretty(pg_indexes_size('sensors.observations')) as idx_size,
  pg_size_pretty(pg_total_relation_size('sensors.observations')) as total_size;

/*
12. Truncate the table
*/
TRUNCATE sensors.observations;

/*
14. Check the size of the table
*/
--Size reduced after truncate - size reclaimed
--tbl_size	idx_size	total_size
--8192 bytes	16 kB	24 kB
SELECT 
  pg_size_pretty(pg_table_size('sensors.observations')) as tbl_size, 
  pg_size_pretty(pg_indexes_size('sensors.observations')) as idx_size,
  pg_size_pretty(pg_total_relation_size('sensors.observations')) as total_size;
