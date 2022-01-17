module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
      id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, 
      
    { timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
    );
  
    return User;
  };