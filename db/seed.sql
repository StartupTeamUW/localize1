
-- excecute after tables are created
USE localize_db;

-- add users
INSERT INTO Users (user_name, email, password, hometown, guide_status, interests, createdAt, updatedAt) -- you can add more fields, see ./models/user.js
VALUES
 ('jfang', 'jfang@gmail.com', 'asdsds', 'Seattle', DEFAULT, '', Now(), Now()), -- in test expects as traveler
('ckim', 'chikm@gmail.com', 'asdsds', 'LA', true, 'Landmarks, Food', Now(), Now()), -- test output: ckim should be showing as jfang's 1st matched local guide 
('ktran', 'ktran@gmail.com', 'asdsds', 'LA', true, 'Landmarks, Music', Now(), Now()); --  test output: ktran should be showing as jfang's 2nd closed matched local guide 

-- *TBD* add Interests (execute after existing user created)
INSERT INTO Interests (interests, createdAt, updatedAt, UserId)
VALUES
('Museums, Music', Now(), Now(), 1),
('Landmarks, Food', Now(), Now(), 2),
('Landmarks, Music', Now(), Now(), 3);

-- add trips (execute after existing user created)
INSERT INTO Trips (destination, trip_interests, start_date, end_date, createdAt, updatedAt, UserId) -- you can add/modify fields, see ./models/trip.js
VALUES
('LA', 'Landmarks, Food', '2018-12-25', '2018-12-27', Now(), Now(), 1), -- test: jfang looking for a local who matches interests and destination
('Chicago', 'Museums, Music', '2018-12-25', '2018-12-27', Now(), Now(), 1),
('Seattle', 'Landmarks, Music', '2018-11-11', '2018-11-16', Now(), Now(), 2),
('Chicago', '', '2018-12-25', '2018-12-27', Now(), Now(), 2),
('Seattle', 'Museums, Music', '2018-12-25', '2018-12-27', Now(), Now(), 3);


-- add more dummy data for trips:
-- add trips (execute after existing user created)
INSERT INTO Trips (destination, trip_interests, start_date, end_date, createdAt, updatedAt, UserId) 
VALUES
('LA', 'Landmarks, Food', '2018-10-25', '2018-10-27', Now(), Now(), 2),
('NY', 'Landmarks, Food', '2018-02-25', '2018-02-27', Now(), Now(), 2),
('Austin', 'Landmarks, Food', '2018-01-20', '2018-01-27', Now(), Now(), 2),
('Huston', 'Landmarks, Food', '2018-08-05', '2018-08-12', Now(), Now(), 2);