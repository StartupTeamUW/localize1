module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    //Signup Required
    user_name: {
      type: DataTypes.STRING,
      // allowNull: false,
      // unique: true, // user name can't be dupclicated!
      // validate: {
      //   len: {
      //     args: 3,
      //     msg: "User name must be at least 3 characters in length"
      //   }
      // }
    },
    email: {
      type: DataTypes.STRING,
      // allowNull: false,
      // unique: true,
      // validate: {
      //   len: {
      //     args: [6, 128],
      //     msg: "Email address must be between 6 and 128 characters in length"
      //   },
      //   isEmail: {
      //     msg: "Email address must be valid"
      //   }
      // }
    },
    password: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   len: {
      //     args: 3
      //   }
      // }
    },
    phonenumber: {
      type: DataTypes.STRING,
            // allowNull: false,
      // validate: {
      //   len: {
      //     args: 9
      //   }
      // }
    },
    // User Profile
    profile_pic_url: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    hometown: DataTypes.STRING,
    DOB: DataTypes.STRING,
    bio: {
      type: DataTypes.TEXT
      // validate: {
      //   len: [1, 300]
      // }
    },
    whyOn:{
      type: DataTypes.STRING
    },
    languages:{
      type: DataTypes.TEXT
    },
    one_Athing:{
      type: DataTypes.TEXT
    },
    hobby:{
      type: DataTypes.STRING
    },
    countries:{
      type: DataTypes.STRING
    },
    what_I_share:{
      type: DataTypes.STRING
    },
    // interests:{
    //   type: DataTypes.STRING
    // },
    guide_status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  User.associate = function (models) {
    // Associating User with Trips
    // When an User is deleted, also delete any associated Trips
    User.hasMany(models.Trip, {
      onDelete: "cascade" //TBD - don't want to delete trip records when users deleted their accts
    });
  };

  return User;
};


