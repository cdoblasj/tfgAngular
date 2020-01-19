module.exports = (sequelize, type) => {
    return sequelize.define('proves', {
        idAssignatura: {
            type: type.INTEGER,
            primaryKey: true },idProva: {
                type: type.INTEGER,
                primaryKey: true },
        descripció: type.STRING,
        nom: type.STRING
    })
}