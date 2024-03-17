/*Create Databse*/
CREATE DATABASE movieDB;

/*Check which database is active*/
SELECT session_user, current_database();

/*Create table*/
CREATE TABLE films(
  name TEXT,
  release_year INTEGER
);

/*Insert data to table*/
INSERT INTO films (name, release_year)
VALUES 
('Avatar', 2009),
('Titanic', 1998),
('God Must be Crazy', 1980);

/*Query data*/
SELECT * FROM films WHERE release_year <= 1990;

/*Add new colums*/
ALTER TABLE films ADD COLUMN runtime INTEGER;
ALTER TABLE films ADD COLUMN category TEXT;
ALTER TABLE films ADD COLUMN rating REAL;
ALTER TABLE films ADD COLUMN box_office_earning BIGINT;

/*Update content*/
UPDATE films
SET runtime = 162,
    category = 'adventure',
    rating = 7.9,
    box_office_earning = 290000000000   
WHERE name = 'Avatar';

UPDATE films
SET runtime = 194,
    category = 'romance',
    rating = 7.9,
    box_office_earning = 226400000000   
WHERE name = 'Titanic';

UPDATE films
SET runtime = 109,
    category = 'adventure',
    rating = 7.3,
    box_office_earning = 90000000 
WHERE name = 'God Must be Crazy';

/*Add constraint to make name unique*/
ALTER TABLE films
ADD CONSTRAINT unique_name UNIQUE (name);


