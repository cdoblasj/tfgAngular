const Sequelize = require('sequelize')
const UserModel = require('./models/users')
//const BlogModel = require('./models/blog')
const AlumneModel = require('./models/alumnes')
const ProfessorModel = require('./models/professors')
const AssignaturaModel = require('./models/assignatures')
const AnyModel = require('./models/anys')
const PdModel = require('./models/pd')
//const TagModel = require('./models/tag')

const sequelize = new Sequelize('develop4', 'postgres', 'pekpek88', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})


// BlogTag will be our way of tracking relationship between Blog and Tag models
// each Blog can have multiple tags and each Tag can have multiple blogs
//const BlogTag = sequelize.define('blog_tag', {})
//const Blog = BlogModel(sequelize, Sequelize)
//const Tag = TagModel(sequelize, Sequelize)
const Alumne = AlumneModel(sequelize, Sequelize)
const Professor = ProfessorModel(sequelize, Sequelize)
const Assignatura = AssignaturaModel(sequelize, Sequelize)
const Any = AnyModel(sequelize, Sequelize)
const User = UserModel(sequelize, Sequelize)
const Pd = PdModel(sequelize, Sequelize)
const AnyAcademic = sequelize.define('anysAcademics', {
});



Assignatura.belongsToMany(Any, { through: AnyAcademic,unique:'a' });
Any.belongsToMany(Assignatura, { through: AnyAcademic,unique:'a' });
User.belongsTo(Professor);




sequelize.sync(/*{ force: true }*/)
.then(() => {
  console.log(`Sequelize iniciado`)
})

module.exports = {
  Alumne,
  Professor,
  Assignatura,
  Any,
  AnyAcademic,
  User,
  Pd
}