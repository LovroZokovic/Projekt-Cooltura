module.exports = function(sequelize, Sequelize) {
    return sequelize.define('session', {
      id: {
        type: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      user_id: {
        type: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      }
    }, {
      tableName: 'session'
    });
  };