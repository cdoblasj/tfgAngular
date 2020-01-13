module.exports = (sequelize, type) => {
    return sequelize.define('assignatures', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        codi: {
          type: type.STRING,
          allowNull: false,
          unique: true
        },
        text: type.STRING
    })
}