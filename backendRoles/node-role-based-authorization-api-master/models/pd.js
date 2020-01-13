module.exports = (sequelize, type) => {
    return sequelize.define('pds', {
        idAssignatura: {
            type: type.INTEGER,
            primaryKey: true },idAny: {
                type: type.INTEGER,
                primaryKey: true },idProfessor: {
                    type: type.INTEGER,
                    primaryKey: true }
    })
}



