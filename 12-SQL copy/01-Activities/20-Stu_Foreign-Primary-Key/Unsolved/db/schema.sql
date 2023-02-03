-- Write your Schema Here -- 
DROP DATABASE IF EXISTS restaurant_db;
CREATE DATABASE restaurant_db;

USE restaurant_db;

CREATE TABLE customers (
id INT NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE customer_orders (
id INT NOT NULL,
customer_id INT,
order_details TEXT NOT NULL,
FOREIGN KEY(customer_id)
REFERENCES customers(id)
ON DELETE SET NULL
);

-- SHOW TABLES;
-- DESCRIBE customers;
-- DESCRIBE customer_orders;

INSERT INTO customers (id, first_name, last_name)
VALUES (1, "Mary", "Jones"),
(2, "John", "Jones"),
(3, "Arthur", "Miller");

INSERT INTO customer_orders (id, order_details, customer_id)
VALUES (1, "Eggs on toast", 1),
(2, "Salad", 2),
(3, "Eggs on a bagel", 3);

SELECT * FROM customers JOIN customer_orders ON customers.id = customer_orders.customer_id;