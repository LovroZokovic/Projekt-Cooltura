module.exports = (sequelize, Sequelize) => {
    const Event = sequelize.define("event", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      interested: {
        type: Sequelize.INTEGER
      }
    });
  
    return Event;
  };