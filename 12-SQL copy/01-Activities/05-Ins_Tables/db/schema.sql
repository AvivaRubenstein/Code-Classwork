DROP DATABASE IF EXISTS inventory_db;
-- Creates the "inventory_db" database --
CREATE DATABASE inventory_db;

-- Makes it so all of the following code will affect inventory_db --
USE inventory_db;

-- Creates the table "produce" within inventory_db --
CREATE TABLE produce (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  -- we use these ids as unique identifiers, and they increment each time so they are all different
  id INT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  -- VARCHAR is a character string of variable length, here we can use up to 100 chars to name our column 
  -- any type of produce whose name is under 100 chars can be put here in the database
  -- not null === we can't input something into the database without setting an id -- and it has to be a unique id 
  -- /meaning we can't omit this field in our table
  name VARCHAR(100) NOT NULL
);

