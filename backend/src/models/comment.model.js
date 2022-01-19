module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comments", {
      id: {
        type: Sequelize.UUIDV4,
        notEmpty: true,
        notNull: true,
        primaryKey: true,
        unique: true
      },
      event_id: {
        type: Sequelize.INTEGER,
        notEmpty: true,
        notNull: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        notEmpty: true,
        notNull: true,
      },
      comment: {
        type: Sequelize.STRING,
      }
    }, 
      
    { timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
    );
  
    return Event;
  };