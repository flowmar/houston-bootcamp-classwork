# **SQL**

---

## ***Codecademy***

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

## **Commands**

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

---
## ***sqlcourse.com***

---

### **What is SQL?**

**SQL** stands for **S**tructured **Q**uery **L**anguage and is used to communicate with databases.

Most database systems use SQL, but also have their own proprietary extensions. The standard SQL commands, *SELECT*, *INSERT*, *UPDATE*, *DELETE*, *CREATE* and *DROP* can be used across the board.

### **Table Basics**

- *Tables* are identified by their names and are comprised of columns and rows

- *Columns* contain name, data type, and any other attributes for the column

- *Rows* contain the records (data) for the columns

### **Selecting Data**

The **SELECT** statement is used to query the database and retrieve the selected data that matches your chosen criteria

***SYNTAX***

```sql
SELECT "column1"
  [,"column2", etc]
  FROM "tablename"
  [WHERE "condition"];
```

[] = optional

***EXAMPLE***

```sql
SELECT * FROM movies
```

- Selects 'all' columns from the table 'movies'

---

`WHERE` is an optional clause that specifies criteria that must be met for a result to match

```sql
SELECT first, last
FROM empinfo
WHERE last LIKE '%s'
```

`LIKE` is an operator that matches patterns

`%` can be used to mean 'any number of any character'

`_` can be used to mean '1 of any character'

---
---

### **Creating Tables**

`CREATE TABLE` is used to create a new table.

```sql
CREATE TABLE "tablename"
("column1" "data type"
        [constraint],
"column2" "data type"
        [constraint],
"column3" "data type"
        [constraint]);
```

[] = optional

---

## **Data Types**

- CHAR(size) - fixed-length character string

- VARCHAR(size) - variable-length character string, maximum size in parentheses

- NUMBER(size) - number value with a max number of digits specified

- DATE - date value

- NUMBER (size, d) - number value with a maximum total size, followed by the number of digits to the right of the decimal

---

### **Inserting Into a Table**

---


```sql
INSERT INTO "tablename"
(first_column, ... last_column)
VALUES (first_value, ... last_value);
```

---

### **Example**

```sql
INSERT INTO employees
(first_name, last_name, age, local_address, city, state)
VALUES ('Person', 'Personson', 54, '3330 Westheimer', 'Houston', 'TX');
```

---

### **Updating Records**

---

***SYNTAX***

```sql
UPDATE "tablename"
SET "columnname" = "newvalue"
[, "nextcolumn" = "newvalue2"...]
WHERE "columnname"
    OPERATOR "value"
[and|or "column"
OPERATOR "value"];
```

***EXAMPLE***

```sql
UPDATE phone_book
    SET area_code = 623
    WHERE prefix = 979;

UPDATE phone_book
    SET last_name = 'Smith', prefix=555, suffix=9292
    WHERE last_name = 'Jones';

UPDATE phone_book
    SET age = age+1
    WHERE first_name = 'Mary' AND last_name = 'Williams';
```

---

***DELETING RECORDS***

---

```sql
DELETE FROM "tablename"
WHERE "columnname"
OPERATOR "value"
[and|or "column"
OPERATOR "value"];
```

[] = optional

**WARNING**: If you leave off the 'WHERE' clause, **all records will be deleted**

***EXAMPLE***

```sql
DELETE FROM employees
    WHERE lastname = 'May';

DELETE FROM employees
    WHERE firstname = 'Mike' or firstname = 'Eric';
```

---

### **DROP A TABLE**

---

***SYNTAX***

```sql
DROP TABLE "tablename";
```

***EXAMPLE***

```sql
DROP TABLE employees;
```

