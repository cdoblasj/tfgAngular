const express = require('express');
const router = express.Router();
const assignaturaService = require('./assignatures.service');
const authorize = require('_helpers/authorize')
const Role = require('_helpers/role');

router.get('/', authorize(Role.Admin), getAll); // admin only
router.get('/:id', authorize(), getById);   
router.post('/add', authorize(), add);   
const { Assignatura,Any,AnyAcademic,User} = require('../sequelize')   // all authenticated users
module.exports = router;



function getAll(req, res, next) {
    Assignatura.findAll()
        .then(assignatures => res.json(assignatures))
        .catch(err => next(err));
}

function getById(req, res, next) {
    /*
    const currentUser = req.user;
    const id = parseInt(req.params.id);

    // only allow admins to access other user records
    if (id !== currentUser.sub && currentUser.role !== Role.Admin) {
        return res.status(401).json({ message: 'Unauthorized' });
    }*/

    assignaturaService.getById(req.params.id)
        .then(assignatura => assignatura ? res.json(assignatura) : res.sendStatus(404))
        .catch(err => next(err));
}

function add(req, res, next) {

    const currentUser = req.user;
    const id = parseInt(req.params.id);
    // only allow admins to access other user records
    if (id !== currentUser.sub && currentUser.role !== Role.Admin) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    console.log(req.body);

    Assignatura.create(req.body)
        .then(data =>{AnyAcademic.create({ assignatureId: data.dataValues.id, anyId: req.body.any })}).then(response => res.json(response))
        .catch(err => next(err));


    /*
    app.post('/api/blogs', (req, res) => {
    const body = req.body
    // either find a tag with name or create a new one
    const tags = body.tags.map(tag => Tag.findOrCreate({ where: { name: tag.name }, defaults: { name: tag.name }})
                                         .spread((tag, created) => tag))
    User.findById(body.userId)
        .then(() => Blog.create(body))
        .then(blog => Promise.all(tags).then(storedTags => blog.addTags(storedTags)).then(() => blog))
        .then(blog => Blog.findOne({ where: {id: blog.id}, include: [User, Tag]}))
        .then(blogWithAssociations => res.json(blogWithAssociations))
        .catch(err => res.status(400).json({ err: `User with id = [${body.userId}] doesn\'t exist.`}))
})
    */    


    /*
    assignaturaService.add(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));*/
}