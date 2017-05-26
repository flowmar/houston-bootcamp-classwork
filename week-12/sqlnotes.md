# SQL

## Codecademy

--- 

- *Relational Database* - databases that organize information into tables

- *Table* - colleciton of data organized into rows and columns

- *statement* - a string of characters that the database recognizes as a valid command

- *aggregate function* - compute a single result from a set of input values

- *primary key* - serves as a unique identifier for each row or record in a given table. If a column is specified as the PRIMARY KEY, SQL ensures that none of the values in the column are NULL and that each value in this column is unique

- *foreign key* - a column that contains the primary key to another table in the database. It is used to identify a particular row in the referenced table

- *joins* - are use to combine data from multiple tables

- *left table* - the first table you are joining

- *right table* - the second table you are joining

## Commands

---

**CREATE TABLE** - creates a new table

**INSERT INTO** - adds a new row to a table

**SELECT** - queries data from a table (use this every time you want to query information from a database)

**UPDATE** - edits a row in a table

**ALTER TABLE** - changes an existing table

**DELETE FROM** - deletes rows from a table

**WHERE** - lets you filter the results of your query based upon your chosen conditions

**LIKE** - lets you specify a particular patter to search for

**BETWEEN** - lets you specify two values to search between, can be numerical or alphabetical

**AND** - lets you require multiple conditions

**OR** - lets you require at least one condition

**ORDER BY** - lets you specify how you would like your query result to be sorted

**LIMIT** - limits the number of rows that the query will return

**%** - can be used to mean any number of any charcter

**_** - can be used to mean one of any character

**COUNT()** - takes the name of a column as an arguments and counts the number of rows where the column is not NULL, passing * counts every row

**GROUP BY** - (only used with aggregate functions along with the SELECT statement to arrage identical data into groups)

**SUM()** - takes a column name as an arguement and returns the sum of all the columns

**MAX()** - takes a column name as an argument and returns the largest value in that column

**MIN()** - takes a column name as an argument and returns the smallest value in that column

**AVG()** - takes a column name as an argument and returns the average of all the values in that column

**ROUND()** - takes 2 arguments, a column name and a number of decimal places to round the values in that 

**INNER JOIN** - combines rows from different tables if the join condition is true

**LEFT OUTER JOIN** - will return every row in the left table; if the join condition is not met, NULL values are used to fill the colums from the right table

**AS** - allows you to rename a column or table in the results set using an alias

## sqlcourse.com

---

### What is SQL?

**SQL** stands for **S**tructured **Q**uery **L**anguage and is used to communicate with databases.

