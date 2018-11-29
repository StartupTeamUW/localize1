
-- migration
    // tableName.sync({force: true}).then(function() {
    //     return User.create({
    //     user_name: 'jfang',
    //     email: 'jfang@gmail.com',
    //     password: 'abc123',
    //     first_name: 'Jia',
    //     last_name: "Fang"
    //     });
    // });


-- users
INSERT INTO Users (user_name, email, password, residence, createdAt, updatedAt)
VALUES
 ('jfang', 'jfang@gmail.com', 'asdsds','Seattle', Now(), Now()),
 ('ktran', 'ktran@gmail.com', 'asdsds', 'Seattle',Now(), Now()),
('ckim', 'chikm@gmail.com', 'asdsds', 'LA',Now(), Now());


-- trips
INSERT INTO Trips (destination, interest, start_date, end_date, createdAt, updatedAt, UserId)
VALUES
('Seattle', 'sport, outdoor', '2018-12-25', '2018-12-27', Now(), Now(), 1),
('LA', 'concert, outdoor', '2018-12-25', '2018-12-27', Now(), Now(), 1),
('Chicago', 'food, event', '2018-12-25', '2018-12-27', Now(), Now(), 1),
('Seattle', 'sport, outdoor', '2018-12-25', '2018-12-27', Now(), Now(), 2);