/*Non normalized database contain single table called store
*/

/*
1. Check store Data, and think which columns needs to be moved to separate tables? customer info and item info should move to separate tables.
*/
select * from store limit 10;

/*
2. Calculate the number of distinct orders and customers
*/
SELECT COUNT(DISTINCT(order_id)) 
FROM store;--100
SELECT COUNT(DISTINCT(customer_id)) 
FROM store;--80, implies one cusomer made multiple orders

/*
3. Lets inspect repeated data for customer with id = 1
*/
SELECT
  *
from store WHERE customer_id = 1;--2 records found

/*
4. Check repeated data related to items
*/
SELECT
  item_1_id, item_1_name, item_1_price, COUNT(order_id) as total_orders
from store WHERE item_1_id = 4
group by item_1_id, item_1_name, item_1_price;--3 total orders included this item

/*
5. From the schema CREATE TABLE customers AS to create the customers from the store table.
*/
CREATE TABLE customers AS
SELECT DISTINCT 
  customer_id, 
  customer_phone, 
  customer_email
FROM store;

/*
6. Add primary key to customers table
*/
ALTER TABLE customers
ADD PRIMARY KEY(customer_id);

/*
7.  From the schema CREATE TABLE items AS to create the items from the store table.
*/
CREATE TABLE items AS
SELECT item_id, item_name, item_price
FROM(
  SELECT DISTINCT 
    item_1_id AS item_id, 
    item_1_name AS item_name, 
    item_1_price AS item_price
  FROM store WHERE item_1_id IS NOT NULL
  UNION
  SELECT DISTINCT 
    item_2_id AS item_id, 
    item_2_name AS item_name, 
    item_2_price AS item_price 
  FROM store WHERE item_2_id IS NOT NULL
  UNION
  SELECT DISTINCT 
    item_3_id AS item_id, 
    item_3_name AS item_name, 
    item_3_price AS item_price 
  FROM store WHERE item_3_id IS NOT NULL
) T ORDER BY item_id;

/*
8. Add primary key to items table
*/
ALTER TABLE items
ADD PRIMARY KEY(item_id);

/*
9. From the normalized schema create table orders_items by quering from the store, getting the relevant columns.
This table is reference table to create many to many r/ship between orders and items table.
*/
CREATE TABLE orders_items  AS
  SELECT 
    order_id,
    item_1_id AS item_id
  FROM store WHERE item_1_id IS NOT NULL
  UNION
  SELECT 
    order_id,
    item_2_id AS item_id
  FROM store WHERE item_2_id IS NOT NULL
  UNION
  SELECT 
    order_id,
    item_3_id AS item_id
  FROM store WHERE item_3_id IS NOT NULL;

/*
10. CREATE TABLE orders AS to create the orders table described in the normalized schema (diagram below) by querying the original store table for the relevant columns. 
*/
CREATE TABLE orders AS
SELECT
  order_id,
  order_date,
  customer_id
FROM store;

/*
11. Designate order_id as primary key 
*/
ALTER TABLE orders
ADD PRIMARY KEY(order_id);

/*
12. 
Add foreign key for customer_id in orders table 
Add foreign key for order_id and item_id in table orders_items 
*/
ALTER TABLE orders
ADD FOREIGN KEY (customer_id) 
REFERENCES customers(customer_id);

/*
13. Designate the order_id column of the orders_items table as a foreign key referencing the order_id column of the orders table.
*/
ALTER TABLE orders_items
ADD FOREIGN KEY (order_id) 
REFERENCES orders(order_id);

/*
14. Designate the item_id column of the orders_items table as a foreign key referencing the item_id column of the items table.
*/
ALTER TABLE orders_items
ADD FOREIGN KEY (item_id) 
REFERENCES items(item_id);

/*
15. Query the original store table to return the emails of all customers who made an order after July 25, 2019 (hint: use WHERE order_date > '2019-07-25').
*/
SELECT
  *
FROM store
WHERE order_date > '2019-07-25';

/*
16. Impliment the same query on the normalized schema
to return emails of customers who made an order after july 25, 2019.
*/
SELECT
  c.customer_email
FROM customers c
INNER JOIN orders o ON o.customer_id= c.customer_id
WHERE o.order_date > '2019-07-25';

/*
17. Query the original store to get the number of orders containing each unique item (for example, two orders contain item 1, two orders contain item 2, four orders contain item 3, etc.)
NB. item_1_id , item_2_id and item_3_id can have the same value.
*/
WITH all_items AS (
SELECT item_1_id as item_id 
FROM store
UNION ALL
SELECT item_2_id as item_id
FROM store
WHERE item_2_id IS NOT NULL
UNION ALL
SELECT item_3_id as item_id
FROM store
WHERE item_3_id IS NOT NULL
)
SELECT item_id, COUNT(*)
FROM all_items
GROUP BY item_id;

/*
18. Query your normalized database tables to return the number of orders containing each unique item. Is this easier or more difficult to do with the normalized database tables?
*/
SELECT item_id, COUNT(*)
from orders_items
GROUP BY item_id;

/*
19. Experiment with normalized and non normalized tables, what types of queries are easier with the normalized queries?
*/
/*
A. How many customers made more than one order? What are their emails?
*/
--Using non normalized schema
SELECT 
  customer_email,
  COUNT(order_id) as total_orders
FROM store 
GROUP BY customer_id, customer_email
HAVING COUNT(order_id) > 1
ORDER BY 1 /*customer_email*/;

--Using normalized schema
SELECT 
  c.customer_email,
  COUNT(o.order_id) as total_orders
FROM orders o
INNER JOIN customers c ON c.customer_id = o.customer_id 
GROUP BY c.customer_id, c.customer_email
HAVING COUNT(o.order_id) > 1
ORDER BY 1 /*c.customer_email*/;

/*
B. Among orders that were made after July 15, 2019, how many included a 'lamp'?
*/
--Using non normalized schema -- result 5
SELECT 
  COUNT(*) AS total_orders_with_lamp
FROM store
WHERE order_date > '2019-07-15'
AND (
  item_1_name = 'lamp'
  OR
  item_2_name = 'lamp'
  OR
  item_3_name = 'lamp'
);
--Using normalized schema -- result 5
SELECT
   COUNT(*) AS total_orders_with_lamp
FROM orders o
INNER JOIN orders_items oi ON o.order_id = oi.order_id
INNER JOIN items i ON oi.item_id = i.item_id
WHERE o.order_date > '2019-07-15'
AND i.item_name = 'lamp';

/*
C. How many orders included a 'chair'?
*/
--Using non normalized schema -- result 3
SELECT 
  COUNT(*) AS total_orders_with_chair
FROM store
WHERE 
  item_1_name = 'chair'
  OR
  item_2_name = 'chair'
  OR
  item_3_name = 'chair';
--Using normalized schema -- result 3
SELECT
   COUNT(*) AS total_orders_with_chair
FROM orders o
INNER JOIN orders_items oi ON o.order_id = oi.order_id
INNER JOIN items i ON oi.item_id = i.item_id
WHERE i.item_name = 'chair';
