/*
Intermediate Book Store Indexes, here we will create more complex index. We have tables books, customers and orders.
*/

/*
1. Check data on each table
*/
select * from customers limit 10;
select * from orders limit 10;
select * from books limit 10;

/*
2. Examine the indexes that already exists on each table - at this stage only primary key indexes exist.
*/
SELECT *
FROM pg_indexes
WHERE tablename = 'customers';
SELECT *
FROM pg_indexes
WHERE tablename = 'orders';
SELECT *
FROM pg_indexes
WHERE tablename = 'books';

/*
3. The marketing team want to filter sales with sales > 18, they need customer_id and quantity ordered. Perform Explain Analyze
*/
EXPLAIN ANALYZE 
SELECT *
FROM orders
WHERE quantity > 18;--Execution time: 11.305 ms - without index

/*
4. Create index to improve the query, keep in mind that the records with quantity > 18 are very low. So partial indexes makes it run much faster.
*/
CREATE INDEX orders_quantity_partial_idx
ON orders(quantity)
WHERE quantity > 18;

/*
5. Analyze the query execution
*/
EXPLAIN ANALYZE 
SELECT *
FROM orders
WHERE quantity > 18;--Execution time: 3.415 ms - with partial index

/*
6. Customer table is missing primary key, now write a query that filters based on customer_id. First without PK and the with PK.
*/
/*Analyze without PK - slower*/
EXPLAIN ANALYZE 
SELECT *
FROM customers
WHERE customer_id = 63266;--Execution time: 11.295 ms - without PK

/*Create PK*/
ALTER TABLE customers
ADD PRIMARY KEY(customer_id);

/*Analyze with PK - much faster*/
EXPLAIN ANALYZE 
SELECT *
FROM customers
WHERE customer_id = 63266;--Execution time: 0.035 ms - with PK

/*
7. The records from customers table are not sorted by customer_id, 
so cluster the table.
*/

SELECT *
FROM pg_indexes
WHERE tablename = 'customers';

CLUSTER customers USING customers_pkey;

/*Now the result will be ordered by customer_id*/
SELECT * FROM customers limit 10; 

/*
8. Regualr searches are done by combining customer_id and book_id on orders table. Create this index.
*/
CREATE INDEX orders_customerid_bookid_idx
ON orders(customer_id, book_id);

/*
9. We need alo quantity in the index created at step 8,
so drop and recreate it.
*/
DROP INDEX IF EXISTS orders_customerid_bookid_idx;
CREATE INDEX orders_customerid_bookid_idx
ON orders(customer_id, book_id, quantity );

/*
10. Improve the book search by author or title, these searches are taking too long. Index is needed? Multicolumn index
*/
/*By creating an index with both author and title your searches don’t have to cross reference the other. */
CREATE INDEX books_author_title_idx
ON books (author, title);

/*
11. Order history is taking longer than the customer expectation. Much time is spent on calculating total amount.
Lets analyze it.
*/
/*Analyze with- much slower*/
EXPLAIN ANALYZE 
SELECT *
FROM orders
WHERE (quantity * price_base) > 100;--Execution time: 34.628 ms - without index

/*Create index to speed up the calculation - using expressions*/
CREATE INDEX orders_total_amount_idx ON orders ((quantity * price_base));

/*
13. Analyze - much faster because of index
*/
EXPLAIN ANALYZE 
SELECT *
FROM orders
WHERE (quantity * price_base) > 100;--Execution time: 15.649 ms - with index

/*
14. Check all indexes
*/
SELECT *
FROM pg_indexes
WHERE tablename IN ('customers', 'books', 'orders')
ORDER BY tablename, indexname;

/*Drop uneeded indexes*/
DROP INDEX IF EXISTS books_author_idx;

/*Speed up serach by last_name, first_name, email_address*/
CREATE INDEX customers_last_name_first_name_email_address ON customers (last_name, first_name, email_address);

/*Check changes*/
SELECT *
FROM pg_indexes
WHERE tablename IN ('customers', 'books', 'orders')
ORDER BY tablename, indexname;
