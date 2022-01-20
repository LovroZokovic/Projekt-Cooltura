module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("role", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      }
    }, 
      
      { timestamps: false,
        createdAt: false,
        updatedAt: false,
        tableName: 'roles',
        freezeTableName: true
      }
    );
  
    return Role;
  };