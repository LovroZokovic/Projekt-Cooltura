module.exports = (sequelize, Sequelize) => {
    const Event = sequelize.define("event", {
      id: {
        type: Sequelize.UUIDV4,
        notEmpty: true,
        notNull: true,
        primaryKey: true,
        unique: true
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      image: {
        type: Sequelize.BLOB('long')
      }
    }, 
      
    { timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
    );
  
    return Event;
  };