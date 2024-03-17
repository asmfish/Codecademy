/* 
 *--------------------------------------------
 Table to store resturant information.
 *--------------------------------------------
 */
CREATE TABLE restaurant (
  id integer PRIMARY KEY,
  name varchar(50) NOT NULL,
  description varchar(100),
  rating decimal,
  telephone char(10),
  working_hours varchar(100)
);

/* 
 *--------------------------------------------
 Table to store address.
  One to one r/ship, one resturnat can have only one address.
 *--------------------------------------------
 */
CREATE TABLE address (
  id integer PRIMARY KEY,
  street_number varchar(10),
  street_name varchar(50),
  city varchar(20),
  state varchar(10),
  google_map_link varchar(100),
  restaurant_id integer REFERENCES restaurant(id) UNIQUE
);

/* 
 *--------------------------------------------
 Table to store each category, where each has d/t dishes
 *--------------------------------------------
 */
CREATE TABLE category (
  id char(2) PRIMARY KEY,
  name varchar(30) NOT NULL,
  description varchar(150)
);

CREATE TABLE dish (
  id integer PRIMARY KEY,
  name varchar(50),
  description varchar(150),
  hot_and_spicy boolean
);

/* 
 *--------------------------------------------
 Table to hold resturnat reviews.Moreover,
 one to many r/ship, one resturant can have many reviews.
 *--------------------------------------------
 */
CREATE TABLE review (
  id integer PRIMARY KEY,
  rating decimal,
  description varchar(150),
  review_date date,
  restaurant_id integer REFERENCES restaurant(id)
);

/* 
 *--------------------------------------------
 Many to many r/ship between category and dishes.
 So we need cross reference table.
 Same dish may belong to more than one categories.
 *--------------------------------------------
 */
CREATE TABLE categories_dishes (
  category_id char(2) REFERENCES category(id),
  dish_id integer REFERENCES dish(id),
  price money,
  PRIMARY KEY(category_id, dish_id)
);

/* 
 *--------------------------------------------
 Query to check the constraints created on various tables.
 *--------------------------------------------
 */
SELECT
  constraint_name, table_name, column_name
FROM
  information_schema.key_column_usage
WHERE
  table_name = 'categories_dishes';

/* 
 *--------------------------------------------
 Insert values for restaurant
 *--------------------------------------------
 */
INSERT INTO restaurant VALUES (
  1,
  'Bytes of China',
  'Delectable Chinese Cuisine',
  3.9,
  '6175551212',
  'Mon - Fri 9:00 am to 9:00 pm, Weekends 10:00 am to 11:00 pm'
);

/* 
 *--------------------------------------------
 Insert values for address
 *--------------------------------------------
 */
INSERT INTO address VALUES (
  1,
  '2020',
  'Busy Street',
  'Chinatown',
  'MA',
  'http://bit.ly/BytesOfChina',
  1
);

/* 
 *--------------------------------------------
 Insert values for review
 *--------------------------------------------
 */
INSERT INTO review VALUES (
  1,
  5.0,
  'Would love to host another birthday party at Bytes of China!',
  '05-22-2020',
  1
);

INSERT INTO review VALUES (
  2,
  4.5,
  'Other than a small mix-up, I would give it a 5.0!',
  '04-01-2020',
  1
);

INSERT INTO review VALUES (
  3,
  3.9,
  'A reasonable place to eat for lunch, if you are in a rush!',
  '03-15-2020',
  1
);

/* 
 *--------------------------------------------
 Insert values for category
 *--------------------------------------------
 */
INSERT INTO category VALUES (
  'C',
  'Chicken',
  null
);

INSERT INTO category VALUES (
  'LS',
  'Luncheon Specials',
  'Served with Hot and Sour Soup or Egg Drop Soup and Fried or Steamed Rice  between 11:00 am and 3:00 pm from Monday to Friday.'
);

INSERT INTO category VALUES (
  'HS',
  'House Specials',
  null
);

/* 
 *--------------------------------------------
 Insert values for dish
 *--------------------------------------------
 */
INSERT INTO dish VALUES (
  1,
  'Chicken with Broccoli',
  'Diced chicken stir-fried with succulent broccoli florets',
  false
);

INSERT INTO dish VALUES (
  2,
  'Sweet and Sour Chicken',
  'Marinated chicken with tangy sweet and sour sauce together with pineapples and green peppers',
  false
);

INSERT INTO dish VALUES (
  3,
  'Chicken Wings',
  'Finger-licking mouth-watering entree to spice up any lunch or dinner',
  true
);

INSERT INTO dish VALUES (
  4,
  'Beef with Garlic Sauce',
  'Sliced beef steak marinated in garlic sauce for that tangy flavor',
  true
);

INSERT INTO dish VALUES (
  5,
  'Fresh Mushroom with Snow Peapods and Baby Corns',
  'Colorful entree perfect for vegetarians and mushroom lovers',
  false
);

INSERT INTO dish VALUES (
  6,
  'Sesame Chicken',
  'Crispy chunks of chicken flavored with savory sesame sauce',
  false
);

INSERT INTO dish VALUES (
  7,
  'Special Minced Chicken',
  'Marinated chicken breast sauteed with colorful vegetables topped with pine nuts and shredded lettuce.',
  false
);

INSERT INTO dish VALUES (
  8,
  'Hunan Special Half & Half',
  'Shredded beef in Peking sauce and shredded chicken in garlic sauce',
  true
);

/*
 *--------------------------------------------
 Insert valus for cross-reference table, categories_dishes
 *--------------------------------------------
 */
INSERT INTO categories_dishes VALUES (
  'C',
  1,
  6.95
);

INSERT INTO categories_dishes VALUES (
  'C',
  3,
  6.95
);

INSERT INTO categories_dishes VALUES (
  'LS',
  1,
  8.95
);

INSERT INTO categories_dishes VALUES (
  'LS',
  4,
  8.95
);

INSERT INTO categories_dishes VALUES (
  'LS',
  5,
  8.95
);

INSERT INTO categories_dishes VALUES (
  'HS',
  6,
  15.95
);

INSERT INTO categories_dishes VALUES (
  'HS',
  7,
  16.95
);

INSERT INTO categories_dishes VALUES (
  'HS',
  8,
  17.95
);

/*
 *--------------------------------------------
 Queries
 *--------------------------------------------
 */
/*1. Display restaurant name and address*/
select 
  r.name as restaurant_name,
  a.street_number || ' ' || street_name as address
from restaurant r
inner join address a on r.id = a.restaurant_id;

/*2. Get the best rating a resturant get*/
select
  r.name as resturant_name,
  max(rv.rating) as best_rating
from review rv
inner join restaurant r on rv.restaurant_id = r.id
group by r.id, r.name;

/*3. Display dish name, price and its category sorted by dish name - 8 rows*/
select
  d.name as dish_name,
  cd.price,
  c.name as category
from category c
inner join categories_dishes cd on c.id = cd.category_id
inner join dish d on d.id = cd.dish_id
order by d.name ASC;

/*Modify the query above and sort the data by category - 8 rows*/
select
  c.name as category,
  d.name as dish_name,
  cd.price
from category c
inner join categories_dishes cd on c.id = cd.category_id
inner join dish d on d.id = cd.dish_id
order by c.name ASC;

/*Display all spicy dishes, their prices and category - 3 rows*/
select
  d.name as spicy_dish_name,
  c.name as category,
  cd.price
from dish d
inner join categories_dishes cd on d.id = cd.dish_id
inner join category c on c.id = cd.category_id
where d.hot_and_spicy = true
order by c.name asc;

/*4. List all dishes that span across multiple categories*/
select
  dish_id,
  count(dish_id) as dish_count
from categories_dishes 
group by dish_id
order by dish_id asc;

/*5. Ajust the above query so that it returns dishes that appear more than once*/
select
  dish_id,
  count(dish_id) as dish_count
from categories_dishes 
group by dish_id
having count(dish_id) > 1
order by dish_id asc;

/*6. Make the above query more informative by adding dish name to the query result.*/
select
  d.name as dish_name,
  count(cd.dish_id) as dish_count
from dish d
inner join categories_dishes cd on d.id = cd.dish_id
group by cd.dish_id, d.name
having count(cd.dish_id) > 1
order by  cd.dish_id asc;

/*7. Make the query that returns the best review include the review description.*/
select
  rating as best_rating,
  description
from review 
where rating = (select max(rating) from review);
