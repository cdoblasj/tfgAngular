module.exports = (sequelize, type) => {
    return sequelize.define('matricules', {
        idAssignatura: {
            type: type.INTEGER,
            primaryKey: true },idAny: {
                type: type.INTEGER,
                primaryKey: true },idAlumne: {
                    type: type.INTEGER,
                    primaryKey: true },
                    notaFinal: type.INTEGER
    })
}