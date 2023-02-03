CREATE DATABASE inventory_db;

-- Create two new databases --
DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

-- Use inventory_db : allows us to select the database we want to use/interact with--
-- will allow us to read and write to that specific database --
USE inventory_db;

-- See database which database is in use --
SELECT DATABASE();
