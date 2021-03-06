module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comment", {
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
      comment: {
        type: Sequelize.STRING,
      }
    }, 
      
    { timestamps: false,
      createdAt: false,
      updatedAt: false,
      tableName: 'comments',
      freezeTableName: true
    }
    );
  
    return Comment;
  };