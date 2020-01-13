module.exports = (sequelize, type) => {
    return sequelize.define('users', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        username: type.STRING,
        passwrod: type.STRING,
        firstName: type.STRING,
        lastName: type.STRING,
        role: type.STRING
        
    })
}