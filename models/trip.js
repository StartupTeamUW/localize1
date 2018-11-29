module.exports = function(sequelize, DataTypes) {
    var Trip = sequelize.define("Trip", {
      // fields for creating a trip plan
      destination: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },

      trip_remark: {
        type: DataTypes.TEXT, // public request message
        len: [1]
      },

      start_date: {
        type: DataTypes.DATE,
        allowNull: false
      }, 
    
      end_date: {
        type: DataTypes.DATE  // end date can be null
      },

      interests: {
        type: DataTypes.TEXT
      },

      requested_by: {
        type: DataTypes.STRING    // the user who created the trip record (requester)
      },

      //After trip created - TBD (this field  will ge generated when host accepts the request)
      matched_guide: {
        type: DataTypes.STRING  // the one who accept the touring offer (responsor)
      }, 

      //After trip excuted -TBD - suggest to create a new table for rating
      guide_rating: {
        type: DataTypes.INTEGER
      },
      guide_feedback: {
        type: DataTypes.TEXT
      },
      trip_rating: {
        type: DataTypes.INTEGER
      },
      trip_comment: {
        type: DataTypes.TEXT
      },
      interest: {
        type: DataTypes.TEXT
      }
      });
  
      Trip.associate = function(models) {
      // We're saying that a Trip should belong to an User
      // A Trip can't be created without an User due to the foreign key constraint
      Trip.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Trip;
  };
  

