module.exports = (sequelize, type) => {
    return sequelize.define('alumnes', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nia: {
            type: type.INTEGER,
            allowNull: false,
            unique: true
          },
        nom: type.STRING,
        cognoms: type.STRING
    })
}