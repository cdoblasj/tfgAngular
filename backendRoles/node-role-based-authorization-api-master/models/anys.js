module.exports = (sequelize, type) => {
    return sequelize.define('anys', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        text: type.STRING
    })
}