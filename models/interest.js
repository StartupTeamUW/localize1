module.exports = function(sequelize, DataTypes) {
    var Trip = sequelize.define("Interest", {
     interests: DataTypes.TEXT
      });
  
    Trip.associate = function(models) {
      // We're saying that an Interest should belong to an User
      // An Interest can't be created without an User due to the foreign key constraint
      Trip.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Trip;
  };
  

/*
field name alternatives:  
- domain (local guides expertise)
- activity (traveler to-dos)
*/