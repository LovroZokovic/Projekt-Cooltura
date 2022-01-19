module.exports = (sequelize, Sequelize) => {
    const Interest = sequelize.define("interest", {
      id: {
        type: Sequelize.INTEGER,
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
      }
    }, 
      
    { timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
    );
  
    return Interest;
  };