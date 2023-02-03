DROP DATABASE IF EXISTS registrar_db;
CREATE DATABASE registrar_db;

USE registrar_db;

CREATE TABLE instructors (
  id INT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  -- the id is set to be the primary key of the table
  -- this column is defined as the unique identifier of this table
  -- by defining this as a primary key, we are enforcing that the ids must be unique bc it's the primary identifier of how we identify instructors
  PRIMARY KEY (id)
);

CREATE TABLE courses (
  id INT,
  course_title VARCHAR(30) NOT NULL,
  instructor_id INT,
  order_details TEXT,
  -- we wanted to create a relationship where instructors are related to courses, so we set up a foreign key
  -- foreign key - means it's a relationship to something else, instructors are a key component of courses
  -- we use unique ids to connect different tables
  -- foreign key = we are referring to another key in another table
  FOREIGN KEY (instructor_id)
   -- instructor_id will reference the instructors table, id column
  REFERENCES instructors(id)
  -- if that instructor gets deleted from the database, we would set the instructor_id to NULL
  ON DELETE SET NULL
);
