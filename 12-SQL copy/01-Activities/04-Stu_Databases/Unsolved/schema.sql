-- Write code here or enter directly in MySQL shell --
DROP DATABASE IF EXISTS sample_db;

-- creating books_db database
DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

-- selects this database as the one we are using
USE books_db;

-- will show a list of all databases
SHOW DATABASES;  

-- shows us which database is selected for use
SELECT DATABASE();