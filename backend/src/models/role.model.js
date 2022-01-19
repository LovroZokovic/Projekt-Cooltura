module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("roles", {
      id: {
        type: Sequelize.UUIDV4,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      }
    }, 
      
      { timestamps: false,
        createdAt: false,
        updatedAt: false,
      }
    );
  
    return Role;
  };