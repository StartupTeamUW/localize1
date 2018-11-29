-- Drops the database if it exists currently --
DROP DATABASE IF EXISTS localize;
-- Creates the database --
CREATE DATABASE localize;

==================================================================
-- Excecute after tables are created
USE localize;

-- Seeing data in database
SELECT* FROM Users;

SELECT* FROM Trips;

SELECT u.*, t.* FROM Users u LEFT JOIN Trips t ON u.id = t.id;

SELECT* FROM Users WHERE id = 1; -- find specific user by id

SELECT* FROM Users WHERE guide IS NOT NULL; -- find who signed up as guide

SELECT COUNT(*) FROM Users; -- # of users signed-up in db

SELECT COUNT(*) FROM Trips; -- # of trips created in db
