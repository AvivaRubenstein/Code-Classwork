DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

USE books_db;

CREATE TABLE biographies (
  --creating id and name columns
  id INT NOT NULL,

  
  name VARCHAR(100) NOT NULL
);

