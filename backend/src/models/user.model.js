module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.INTEGER
      },
      surname: {
        type: Sequelize.INTEGER
      }
    });
  
    return User;
  };