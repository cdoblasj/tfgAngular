module.exports = (sequelize, type) => {
    return sequelize.define('preguntes', {
        idAssignatura: {
            type: type.INTEGER,
            primaryKey: true },idProva: {
                type: type.INTEGER,
                primaryKey: true },
                idPregunta: {
                    type: type.INTEGER,
                    primaryKey: true },
        xMin: type.INTEGER,
        yMin: type.INTEGER,
        xMax: type.INTEGER,
        yMax: type.INTEGER,
        puntacioMax: type.INTEGER
        
    })
}