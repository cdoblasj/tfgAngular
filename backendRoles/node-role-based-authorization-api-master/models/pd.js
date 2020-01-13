module.exports = (sequelize, type) => {
    return sequelize.define('pds', {
        idAssignatura: {
            type: type.INTEGER,
            references: { 
              model: 'anysAcademics',
              key: 'assignatureId'
            }},idAny: {
                type: type.INTEGER,
                references: { 
                  model: 'anysAcademics',
                  key: 'anyId'
                }},idProfessor: {
                    type: type.INTEGER,
                    references: { 
                      model: 'professors',
                      key: 'id'
                    }}
    }),{
      uniqueKeys: {
          Items_unique: {
              fields: ['idAssignatura', 'idAny','idProfessor']
          }
      }}
}



