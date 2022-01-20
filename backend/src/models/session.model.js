module.exports = function(sequelize, Sequelize) {
    return sequelize.define('session', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      }
    }, {
      tableName: 'sessions',
      freezeTableName: true,
    });
  };