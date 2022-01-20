module.exports = (sequelize, Sequelize) => {
    const Event = sequelize.define("event", {
      id: {
        type: Sequelize.INTEGER,
        notEmpty: true,
        notNull: true,
        primaryKey: true,
        unique: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      }
    }, 
      
    { timestamps: false,
      createdAt: false,
      updatedAt: false,
      tableName: 'events',
      freezeTableName: true
    }
    );
  
    return Event;
  };