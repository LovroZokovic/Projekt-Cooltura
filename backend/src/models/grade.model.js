module.exports = (sequelize, Sequelize) => {
    const Grade = sequelize.define("grade", {
      id: {
        type: Sequelize.INTEGER,
        notEmpty: true,
        notNull: true,
        primaryKey: true,
        unique: true,
        autoIncrement: true
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
      grade: {
        type: Sequelize.INTEGER,
        notEmpty: true,
        notNull: true,
      }
    }, 
      
    { timestamps: false,
      createdAt: false,
      updatedAt: false,
      tableName: 'grades',
      freezeTableName: true
    }
    );
  
    return Grade;
  };