/*1. Check the data and structure of the two tables*/
select * from customers order by customer_id;
select * from customers_log;

/*2. Create log trigger*/
create trigger customer_updated
before update on customers
for each row
execute procedure log_customers_change();

/*3. Update first_name in the customer table, then the trigger will log into the log table*/
UPDATE customers
SET first_name= 'Steve'
WHERE customer_id = 1;

/*check trigger changes*/
select * from customers order by customer_id;
select * from customers_log;

/*4. Update years_old but the trigger won't log any thing'*/
UPDATE customers
SET years_old = 83
WHERE first_name = 'Edward';

/*check trigger changes*/
select * from customers order by customer_id;
select * from customers_log;

/*5. Create another trigger after insert*/
CREATE TRIGGER customer_insert
    AFTER INSERT ON customers
    FOR EACH STATEMENT
    EXECUTE PROCEDURE log_customers_change();

/*6. Add three names to the customers table in one statement*/
INSERT INTO customers (first_name,last_name, email_address, home_phone, city, state_name, years_old)
VALUES
    ('Asmerom', 'Habteab', 'asmo@gmail.com', '202-556-0265', 'Jersey City', 'New Jersey', 71),
    ('John', 'Doe', 'john.doe@gmail.com', '202-555-0271', 'San Diego', 'California', 65),
    ('Mark', 'Thomas', 'tomas.mark@gmail.com', '202-555-0277', 'Okland', 'California', 45);

select * from customers order by customer_id;
select * from customers_log;

/*7. The trigger should detect when age is updated to be below 13 and then override the change and set the age to be 13. 
*/
CREATE TRIGGER customer_min_age
    BEFORE UPDATE ON customers
    FOR EACH ROW
    WHEN (NEW.years_old < 13)
    EXECUTE PROCEDURE override_with_min_age();

/*8. Test the trigger customer_min_age*/
/*Test 1: trigger will overide the age to 13*/
UPDATE customers
SET years_old = 12
WHERE first_name = 'Mark';

/*Test 1: trigger will not overide because it is > 13*/
UPDATE customers
SET years_old = 35
WHERE first_name = 'Asmerom';

select * from customers order by customer_id;
select * from customers_log;

/*9. What if we update years_old and first_name at once*/
UPDATE customers
SET years_old = 9,
    first_name = 'Mathew'
WHERE last_name = 'Hall';

/*The result shwoed that both the triggers got executed, update name log and overide age < 13 to 13.*/
select * from customers order by customer_id;
select * from customers_log;

/*10. Though your trigger setting the years_old to never be under 13 is working, a better way to do the same thing would be with a constraint on the column itself. So lets drop the trigger customer_min_age
*/
DROP TRIGGER IF EXISTS customer_min_age ON customers;

/*11. Check the removal worked*/
SELECT * FROM information_schema.triggers;