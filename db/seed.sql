
-- excecute after tables are created
USE localize_db;

-- add users
INSERT INTO Users (user_name, email, password, phonenumber, profile_pic_url, first_name, last_name, hometown, guide_status, interests, createdAt, updatedAt) -- you can add more fields, see ./models/user.js
VALUES
 ('jiafang', 'jfang@gmail.com', 'asdsds', 'https://pbs.twimg.com/profile_images/738250910305034246/TfX_kbqi_400x400.jpg', 'first', 'last', 'Seattle', DEFAULT, '', Now(), Now()), -- in test expects as traveler
('chikim', 'chikm@gmail.com', 'asdsds', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Kim_Woo-bin_at_%22Uncontrollably_Fond%22_press_conference%2C_4_July_2016_02.jpg/220px-Kim_Woo-bin_at_%22Uncontrollably_Fond%22_press_conference%2C_4_July_2016_02.jpg', 'first', 'last', 'LA', true, 'Landmarks, Food', Now(), Now()), -- test output: ckim should be showing as jfang's 1st matched local guide 
('Kimmy', 'kim.tran549@gmail.com','localize','12064724573','http://www.memorialhermann.org/PhysicianPhoto/078134.jpg', 'Kim', 'Kablitz', 'Auburn,WA USA', true, 'Nature, Music,Food', Now(), Now()); --  test output: ktran should be showing as jfang's 2nd closed matched local guide 

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