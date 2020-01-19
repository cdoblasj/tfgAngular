module.exports = (sequelize, type) => {
    return sequelize.define('aps', {
        idAssignatura: {
            type: type.INTEGER,
            primaryKey: true },idProva: {
                type: type.INTEGER,
                primaryKey: true },idAlumne: {
                    type: type.INTEGER,
                    primaryKey: true },
        nota: type.STRING
    })
}