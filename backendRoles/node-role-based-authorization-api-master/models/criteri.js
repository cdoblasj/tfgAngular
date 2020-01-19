module.exports = (sequelize, type) => {
    return sequelize.define('criteris', {
        idAssignatura: {
            type: type.INTEGER,
            primaryKey: true },idProva: {
                type: type.INTEGER,
                primaryKey: true },
                idPregunta: {
                    type: type.INTEGER,
                    primaryKey: true },
                idCriteri: {
                    type: type.INTEGER,
                    primaryKey: true },
                    descripció: type.STRING,
        puntacio: type.INTEGER
        
    })
}