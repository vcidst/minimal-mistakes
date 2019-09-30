---
title: "Migrate Oracle Dump File to SQL Server 2012"
categories:
  - tutorial
tags:
  - databases
  - SQL
---

It took the life out of me to figure out how to move an Oracle Dump file to Oracle and then to SQL Server. This post just documents the sequence of steps I took. I am using Windows 10 the steps here may be platform specific.

### What I have
a .dmp file from Oracle Database
information that database was exported by user TCL
a laptop with Windows 10

## What I want
Move everything into SQL Server 2012 and look at the database

### Approach:
2. Install Oracle Database 11g^[oracle-db]
3. Install Oracle SQL Developer^[oracle-dev]

**Attention!** Pay attention to Oracle Database setup, note down the SID, and any passwords you enter. Ideally you should read this whole document before beginning.
{: .notice--info}

### Restoring dump file
Thanks to Andrew on StackExchange DBA^[se-dba]

4. Open Powershell on Windows. Replace your password with password in the command below.  

```sql
C:\>sqlplus system/password

SQL> create user CLIENT_TEST identified by client_test_password;
SQL> grant connect, unlimited tablespace, resource to CLIENT_TEST;
SQL> exit
```

5. Once that is done, since I knew the database was imported by TCL -- I'll tell Oracle so. Note that I don't full the full parameter as it threw me an error that I cannot use it with FROMUSER parameter.   
```
C:\>imp system/password FROMUSER=TCL TOUSER=client_test file=c:\database.dmp
```
6. If this works, you can use Oracle SQL Developer to login with Client_test and check out the database.

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

**HowTo!** To create new user: Click on database in PHPMyAdmin > Go to Privileges tab > create new user.
{: .notice-info}

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
Thanks to [Anar Khalilov on SO](https://stackoverflow.com/a/17571234) for this query

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

## Links

[oracle-db]: https://www.oracle.com/technetwork/database/enterprise-edition/downloads/112010-win64soft-094461.html
[oracle-dev]: https://www.oracle.com/technetwork/developer-tools/sql-developer/downloads/index.html
[se-dba]: https://dba.stackexchange.com/questions/23390/import-a-oracle-dmp-file-into-a-fresh-install-of-oracle