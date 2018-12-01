-- excecute after tables are created
USE localize_db;

-- see all users
SELECT* FROM Users;

-- see all trips
SELECT* FROM Trips;

-- see users & trips
SELECT u.*, t.* FROM Users u LEFT JOIN Trips t ON u.id = t.id;

-- see users & interest
SELECT u.*, i.* FROM Users u LEFT JOIN Interest i ON u.id = i.id;

 -- find specific user by id
SELECT* FROM Users WHERE id = 1;

-- find who signed up as guide
SELECT* FROM Users WHERE guide_status IS NOT NULL;


SELECT COUNT(*) FROM Users; -- # of users signed-up in db

SELECT COUNT(*) FROM Trips; -- # of trips created in db


