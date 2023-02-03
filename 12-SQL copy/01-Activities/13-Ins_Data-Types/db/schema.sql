DROP DATABASE IF EXISTS course_db;
CREATE DATABASE course_db;

USE course_db;
-- not null enforces that we can't leave it blank
CREATE TABLE courses (
  -- INT is a whole number
  id INT NOT NULL,
  -- VARCHAR is a string of variable character length, here it can't be larger than 30 ----take up less space in storage than text
  course_title VARCHAR(30) NOT NULL,
  -- TEXT can be very long, use for longer length strings
  course_description TEXT NOT NULL,
  -- BOOLEAN will be true or false >>> 1 = true, 0 = false
  active BOOLEAN NOT NULL,
  -- DATETIME if a date isn't specified, default to current timestamp in UNIX timestamp
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);
