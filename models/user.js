<<<<<<< HEAD
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      //Signup Required
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // user name can't be dupclicated! 
        validate: {
          len: {
            args: 3,
            msg: "User name must be at least 3 characters in length"
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: {
            args: [6, 128],
            msg: "Email address must be between 6 and 128 characters in length"
          },
          isEmail: {
            msg: "Email address must be valid"
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: 3
          }
        }
      },
  
      // User Profile
			first_name: DataTypes.STRING,
			last_name: DataTypes.STRING,
			gender: DataTypes.STRING,
			residence: DataTypes.STRING,
			profile_pic_url: DataTypes.STRING,
      bio: {
        type: DataTypes.TEXT,
        validate: {
          len: [1, 300]
        }
      },
      is_guide: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
  
      // User Interests - TBD
      // ?? put interest matching questionarie into a survey table?
  
		});


		User.associate = function(models) {
      // Associating User with Trips
      // When an User is deleted, also delete any associated Trips
      User.hasMany(models.Trip, {

        onDelete: "cascade" //TBD - don't want to delete trip records when users deleted their accts
      });
    };

		return User;
		
	};
	

  
=======
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

    // User Profile
    profile_pic_url: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    hometown: DataTypes.STRING,
    DOB: DataTypes.STRING,
    bio: {
      type: DataTypes.TEXT,
      // validate: {
      //   len: [1, 300]
      // }
    },
    guide_status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }

    // User Interests - TBD
    // ?? put interest matching questionarie into a survey table?
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

/*
field	data type	validation	UI Name	UI validation
id	auto increment			
user_id	foreign			
host	boolean, Y/N	accepting		
traveler	boolean, Y/N	creating		
Trip start	date			
trip end	date			
Host rating	integer			
trip Rating	integer			
Summary/comments	Text			
Color Code	hex value			
Tags	string array			
date_created	date	DB Date		
date_updated	date	DB Date		
location				option list

  */
>>>>>>> 0cdd18f737e77cfe2496dc78eea6bff6ce16fba5
