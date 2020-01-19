module.exports = (sequelize, type) => {
    return sequelize.define('acs', {
        idAssignatura: {
            type: type.INTEGER,
            primaryKey: true },
            idProva: {
                type: type.INTEGER,
                primaryKey: true },
            idPregunta: {
                    type: type.INTEGER,
                    primaryKey: true },
            idCriteri: {
                    type: type.INTEGER,
                    primaryKey: true },
            idAlumne: {
                        type: type.INTEGER,
                        primaryKey: true },
            puntuacio: type.INTEGER
        
    })
}