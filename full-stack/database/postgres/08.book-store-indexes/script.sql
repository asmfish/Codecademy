/*
We are running an online bookstore and need to keep track of what books we offer. We’ll be working with a database of three tables books, customers, orders.
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
3. You note that users sometimes query for information on who placed an order and the specific book they ordered, most of the time they ask for only one of these at a time. So is index on both the columns good?
*/
/*
No, beacuse they search by both customer_id and book_id sometimes, so it is better to create individual indexes.
*/

/*
4. Analyze select from books table
*/
EXPLAIN ANALYZE 
SELECT original_language, title, sales_in_millions
FROM books
WHERE original_language = 'French';/*Uses Seq Scan, no index*/

/*
5. Get the size of indexes on books table
*/
SELECT pg_size_pretty (pg_total_relation_size('books'));

/*
6. Consider a situation that the translation team needs a list of language they are written, book title, and the number of copies sold to see if it is worth the time and money translating these books. 
Create index to speed up the searching by language, title, and number of copies ? so we need multicolumn index
7. Asses the impact of the index on INSERT, UPDATE and DELETE.
*/
CREATE INDEX books_language_title_copies
ON books (title, original_language, sales_in_millions);

/*
8. We are inserting new books into your books table as new books get released. However, many of these books don’t sell enough copies to be worth translating, so your index has proven to be more costly than beneficial. Delete the multicolumn index we created above to make it so inserts into the books will run quickly.
*/
DROP INDEX IF EXISTS books_language_title_copies;

/*
9. Do bulk insert into orders table and notice the time difference
*/
SELECT NOW();
--DROP ALL INDEXES on Orders
\COPY orders FROM 'orders_add.txt' DELIMITER ',' CSV HEADER;

SELECT NOW();
--RECREATE ALL INDEXES after bulk insert
/*
10. Now go back to your copy function and before you get the first timestamp, drop all of the indexes you have created so far on the orders table in this project. Then, after the second timestamp, recreate them. Look at the time to do the bulk load now. Why is it faster?
*/

/*
11. Your boss tells you to build index on customers table with 
first_name and email, because people keep asking for contact info of clients. But before creting the index answer these questions
a. Is this good idea?
b. How to check  if this would help the system?
c. What do you need to ensure it is a good use of an index?
d. What suggestions might you take?
e. What are the -ve aspects of this index?
*/
/*
a. No enough info to decide whether it is good or bad.
b. Check the queries that your boss uses to compare the runtimes.
c. Ensure that the index does not affect other operations such as delaying creation of user accounts.
d. You might add last_name to the multicolumn index for better results.
e. Indexes affect INSERT, UPDATE and DELETE.
*/
CREATE INDEX customers_first_name_email_address
ON customers(first_name, email_address);