/*
Building an Inventory Database with PostgreSQL
In this project you’ll build out a database schema that could be used to organize an inventory of mechanical parts. This schema will keep track of all the parts, their manufacturer, category, location in storeroom, available inventory, and other relevant information.
*/

/*
1. Check table data and structure*/
select * from parts limit 10;

/*
2. Alter code column in table parts so that it is unique and not empty*/
alter table parts
alter column code set not null;

alter table parts
add unique(code);

/*
3. Fill missing values*/
update parts
set description = 'None Available'
where description is null;

/*
4. Now apply constraint that insures it is not empty*/
alter table parts
alter column description set not null;

/*
5. Test the constraint - violates not-null constraint*/
insert into parts(id, code, manufacturer_id)
values(54, 'V1-009', 9);

/*This will be okay as description is not null*/
insert into parts(id, description, code, manufacturer_id)
values(54, 'Transistor', 'V1-009', 9);

/*
6. Add constraints to table reorder_options. check that ensures that price_usd and quantity are both NOT NULL
*/
alter table reorder_options
alter column price_usd set not null;

alter table reorder_options
alter column quantity set not null;

/*
7. check that ensures that price_usd and quantity are both positive.
*/
alter table reorder_options
add check(price_usd > 0 and quantity > 0);

/*
8. Restrict price per unit between 0.02 USD and 25.00 USD
*/
alter table reorder_options
add check(price_usd/quantity > 0.02 and price_usd/quantity < 25.00);

/*
9. Form a relationship between parts and reorder_options that ensures all parts in reorder_options refer to parts tracked in parts.
*/
alter table parts
add primary key(id);/*add pk to parent table*/

alter table reorder_options
add foreign key(part_id) 
references parts(id);/*add foreign key to child tbale*/

/*
10. For the locations table insure that each value of qty is > 0
*/
alter table locations
add check(qty > 0);

/*
11. Let’s ensure that locations records only one row for each combination of location and part. 
*/
alter table locations
add unique(part_id, location);

/*
12. Write a constraint that forms the relationship between these two tables and ensures only valid parts are entered into locations.
*/
alter table locations
add foreign key(part_id)
references parts(id);

/*
13. Write a constraint that forms a relationship between parts and manufacturers that ensures that all parts have a valid manufacturer.
*/
alter table parts
add foreign key(manufacturer_id)
references manufacturers(id);

/*
14. Create a new manufacturer in manufacturers with an id=11.
*/
insert into manufacturers(id, name) values(11, 'Pip-NNC Industrial');

/*
15. Update the old manufacturers’ parts in 'parts' to reference the new company you’ve just added to 'manufacturers'
*/
update parts
set manufacturer_id = 11
where manufacturer_id in (1, 2);
--1  Pip Industrial
--2	 NNC Manufacturing
--11 Pip-NNC Industrial

select * from parts;
