---
title: "Migrating MySQL Database to SQL Server 2012"
categories:
  - tutorial
tags:
  - databases
  - SQL
---

I have a PHP script lying around that uses MySQL database. I want to integrate this system to work with a SQL Server 2012 based database.

### What I have
a .sql file containing the design of tables and data
a web server running WAMP
a database server running an instance of SQL Server
a local network PC

## What I want
Load this .sql file to SQL Server 2012
(non-invasive way) - try not install anything on either servers in the process

### What doesn't work,
1. Open .sql in SQL Server 2012 - the query fails to execute because of incompatible \' inside strings, unknown datatypes and incorrect syntax.

### Approach:
2. Install WAMP > open PHPMyAdmin > make new database > import .sql file
3. Try to migrate this new database to SQL Server
(to open PHPMyAdmin after installing WAMP > open localhost in a browser > click on PHPMyAdmin > login with 'root' and leave password empty)

### What still doesn't work,
4. PHPMyAdmin > SQL Server compatible Export of .SQL file
5. Command line `mysqldump` with and without SQL Server compatibility flag

## Migrating Database from MySQL to SQL Server,
6. We need to use Microsoft's SQL Server Migration Assistant.
Before that, make sure a few things

#### Things to make sure for SQL Server
7. Inbound connections on port(1433) are open on the server running instance of SQL Server - my database server in this case
8. You have created a user in SQL Server other than 'sa' that has required privileges.
9. Make a new database on SQL Server - say 'foobar' by this user. We will be migrating all the tables from MySQL to this database.

#### Things to make sure for MySQL
10. Inbound connections on port(3306) are open on the server running instance of MySQL - my web server in this case
11. You have created a new user from PHPMyAdmin for the database to migrate.
(To create new user: Click on database in PHPMyAdmin > Go to Privileges tab > create new user)

### Migration Assistant,   
I am doing this on the local network PC that is able to connect to both the servers
12. Install SQL Server Migration Assistant. It is a free tool by Microsoft. Pick one that is MySQLToSQL
13. Install MySQL ODBC Drivers that the setup asks you to download
14. Connect to MySQL Instance
15. Connect to SQL Server Instance - mention 'foobar' database while connecting.
16. Right click on MySQL database > Convert.
17. Right click on SQL Server database 'foobar' > Synchronize
18. Right click on MySQL database > Migrate Data

I thought the this would be it and migration is done but currently all the tables are in a different schema. To be usable to the PHP Script, they should all be in the default [dbo] schema. This different schema would normally be the name of your MySQL database - but please check it yourself to confirm.

### Moving all tables to the default [dbo] schema,
19. Open SQL Management Studio and connect to SQL Server. Open a new query window and choose 'foobar' database  
20. Execute the following query, it prints out strings which are commands to move every single table to [dbo]. Please replace OldSchemaName to the current schema name.
Thanks to Anar Khalilov on SO for this query ( https://stackoverflow.com/a/17571234 )    
```sql

SELECT 'ALTER SCHEMA dbo TRANSFER [' + SysSchemas.Name + '].[' + DbObjects.Name + '];'
FROM sys.Objects DbObjects
INNER JOIN sys.Schemas SysSchemas ON DbObjects.schema_id = SysSchemas.schema_id
WHERE SysSchemas.Name = 'OldSchemaName'
AND (DbObjects.Type IN ('U', 'P', 'V'))

```
21. Copy all the rows from the result > paste them in a new query window > Execute

That's it. You have finally migrated all your tables and data to a new database on SQL Server. I really hope there is an easier way than what I have described but I looked up a lot and did not come across any. Why does it have to be this convoluted anyway?

In my case, I further ran into problems making this CodeIgniter script work with SQL Server but this is enough for this post. Hope this helped!