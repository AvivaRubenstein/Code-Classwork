--adding multiple entries as rows 
--if we haven't already run the schema.sql source first, we would need to run
--USE books_db   command to make sure we are using the books database to enter data into
INSERT INTO biographies (id, name)
VALUES
    ( 001, "Diary of Anne Frank"),
    ( 002, "Frida: A Biography of Frida Kahlo"),
    ( 003, "Long Walk to Freedom");

SELECT * FROM biographies;
