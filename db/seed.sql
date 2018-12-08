
-- excecute after tables are created
USE localize_db;

-- add users
INSERT INTO Users (user_name, email, password, profile_pic_url, first_name, last_name, hometown, guide_status, interests, createdAt, updatedAt) -- you can add more fields, see ./models/user.js
VALUES
('jiafang', 'jfang@gmail.com', 'asdsds', 'https://pbs.twimg.com/profile_images/738250910305034246/TfX_kbqi_400x400.jpg', 'Jia', 'Well', 'Seattle, Washington, United States of America', true, 'landmark,concert,food', Now(), Now()), -- in test expects as traveler
('chikim', 'chikm@gmail.com', 'asdsds', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Kim_Woo-bin_at_%22Uncontrollably_Fond%22_press_conference%2C_4_July_2016_02.jpg/220px-Kim_Woo-bin_at_%22Uncontrollably_Fond%22_press_conference%2C_4_July_2016_02.jpg', 'Chi', 'Boy', 'Seattle, Washington, United States of America', true, 'landmark,food', Now(), Now()), -- test output: ckim should be showing as jfang's 1st matched local guide 
('kimtran', 'ktran@gmail.com', 'asdsds', 'http://www.memorialhermann.org/PhysicianPhoto/078134.jpg', 'Kimmy', 'Green', 'Seattle, Washington, United States of America', true, 'landmark,hiking', Now(), Now()), --  test output: ktran should be showing as jfang's 2nd closed matched local guide 
('KevinCool', 'KevinKevin@gmail.com', 'asdsds', 'https://www.what-dog.net/Images/faces2/scroll001.jpg', 'Kevin', 'Hero', 'Los Angeles, California, United States of America', true, 'landmark,concert,food', Now(), Now()), -- in test expects as traveler
('ArronorAaron', 'ARRRRRon@gmail.com', 'asdsds', 'http://www.petmd.com/sites/default/files/small-dog-breeds.jpg', 'Arron', 'DaMan', 'Los Angeles, California, United States of America', true, 'landmark,food', Now(), Now()), -- test output: ckim should be showing as jfang's 1st matched local guide 
('AlexMiss', 'WhereareyouAlex@gmail.com', 'asdsds', 'http://www.petmd.com/sites/default/files/small-dog-breeds.jpg', 'Alex', 'Fade', 'Los Angeles, California, United States of America', false, 'landmark', Now(), Now()), --  test output: ktran should be showing as jfang's 2nd closed matched local guide 
('AndyPerson', 'AndytheTA@gmail.com', 'asdsds', 'http://cdn.akc.org/content/article-body-image/housetrain_adult_dog_hero.jpg', 'Andy', 'Chill', 'New York, United States of America', true, 'clubbing,hiking', Now(), Now()), -- in test expects as traveler
('TraeTrae', 'Traetrea@gmail.com', 'asdsds', 'https://www.what-dog.net/Images/faces2/scroll0015.jpg', 'Trae', 'Buddy', 'New York, United States of America', false, 'landmark,food', Now(), Now()), -- test output: ckim should be showing as jfang's 1st matched local guide 
('KyleHey', 'kylehey@gmail.com', 'asdsds', 'http://www.memorialhermann.org/PhysicianPhoto/078134.jpg', 'Kyle', 'Person', 'New York, United States of America', false, 'landmark,concert', Now(), Now()); --  test output: ktran should be showing as jfang's 2nd closed matched local guide 

-- *TBD* add Interests (execute after existing user created)
INSERT INTO Interests (interests, createdAt, updatedAt, UserId)
VALUES
('monuments,concert', Now(), Now(), 1),
('landmark,food', Now(), Now(), 2),
('landmark,concert', Now(), Now(), 3);

-- add trips (execute after existing user created)
INSERT INTO Trips (destination, trip_interests, start_date, end_date, createdAt, updatedAt, UserId) -- you can add/modify fields, see ./models/trip.js
VALUES
('LA', 'landmark,food', '2018-12-25', '2018-12-27', Now(), Now(), 1), -- test: jfang looking for a local who matches interests and destination
('Chicago', 'monuments,clubbing', '2018-12-25', '2018-12-27', Now(), Now(), 1),
('Seattle', 'landmark,concert', '2018-11-11', '2018-11-16', Now(), Now(), 2),
('Chicago', 'outdoor,hiking', '2018-12-25', '2018-12-27', Now(), Now(), 2),
('Seattle', 'monuments,concert', '2018-12-25', '2018-12-27', Now(), Now(), 3);


-- add more dummy data for trips:
-- add trips (execute after existing user created)
INSERT INTO Trips (destination, trip_interests, start_date, end_date, createdAt, updatedAt, UserId) 
VALUES
('Chicago', 'landmark,food', '2018-10-25', '2018-10-27', Now(), Now(), 1),
('New York', 'concerts,clubbing', '2018-02-25', '2018-02-27', Now(), Now(), 1),
('Nashville', 'concert,landmark,food', '2018-01-20', '2018-01-27', Now(), Now(), 2),
('Seattle', 'monuments,clubbing', '2018-06-05', '2018-08-12', Now(), Now(), 1),
('San Francisco', 'landmark,food', '2018-04-05', '2018-08-12', Now(), Now(), 2),
('Detroit', 'food,museum', '2018-08-05', '2018-08-12', Now(), Now(), 3);
