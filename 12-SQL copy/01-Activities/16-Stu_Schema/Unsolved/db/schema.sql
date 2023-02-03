-- Write your schema here --
DROP DATABASE IF EXISTS store_db;
CREATE DATABASE store_db;

USE store_db;

CREATE TABLE products (
id INT NOT NULL,
product_name VARCHAR(30) NOT NULL,
category_name VARCHAR(100) NOT NULL,
price INT NOT NULL,
in_stock BOOLEAN NOT NULL
);


CREATE TABLE categories (
id INT NOT NULL,
category_name VARCHAR(30)
);

-- will insert rows into products table
INSERT INTO products (id, product_name, category_name, price, in_stock)
VALUES (1, "Potatoes", "Produce", 2, true),
(2, "Tomatoes", "Produce", 2, true);

-- will display everything in products table
SELECT * FROM products;