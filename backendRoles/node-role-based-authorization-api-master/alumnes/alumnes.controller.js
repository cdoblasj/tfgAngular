const express = require('express');
const router = express.Router();
const activitatService = require('./alumnes.service');
const authorize = require('_helpers/authorize')
const Role = require('_helpers/role');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({
    uploadDir: './uploads'
});

router.get('/', authorize(Role.Admin), getAll); // admin only
router.get('/:id', authorize(), getById);   
router.post('/add', authorize(), add); 
router.get('/byAssignatura/:idAssignatura', authorize(), getAllByIdAssignatura);
router.delete('/:id', authorize(), eliminar);     // all authenticated users
const { Alumne, Professor,Assignatura,Any,AnyAcademic,User,Pd} = require('../sequelize')

module.exports = router;



function getAll(req, res, next) {
    activitatService.getAll()
        .then(assignatures => res.json(assignatures))
        .catch(err => next(err));
}

function getAllByIdAssignatura(req, res, next) {
    activitatService.getAllByIdAssignatura(req.params.idAssignatura)
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

    activitatService.getById(req.params.id)
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
    /*
    req.body =  { nia: 1338429,nom: 'carloswr', cognoms: 'doblas jodar' };
    console.log(Alumne)
    Alumne.create(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));*//*
        req.body =  { nia: 155656,nom: 'professor', cognoms: 'doblas jodar' };
        Professor.create(req.body)
            .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
            .catch(err => next(err));  *//*
            req.body =  { codi: 2222, text: 'anglès' };
            Assignatura.create(req.body)
            .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
            .catch(err => next(err)); *//*
            req.body =  { assignatureId:1, anyId:2};
        AnyAcademic.create(req.body)
            .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
            .catch(err => next(err)); */

    /*
   req.body =  { idAssignatura: 4, idAny: 1, idProfessor: 1,rol: 'admin'};
   console.log(Alumne)
   Pd.create(req.body)
       .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
       .catch(err => next(err));*/
    /*activitatService.add(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));*/

        //buen find all
        /*
        Pd.findAll({ where: {idAny:1}}).then(user => user ? console.log(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
        */
       
        
}


function eliminar(req, res, next) {
    /*
    const currentUser = req.user;
    const id = parseInt(req.params.id);

    // only allow admins to access other user records
    if (id !== currentUser.sub && currentUser.role !== Role.Admin) {
        return res.status(401).json({ message: 'Unauthorized' });
    }*/

    activitatService.eliminar(req.params.id)
        .then(assignatura => assignatura ? res.json(assignatura) : res.sendStatus(404))
        .catch(err => next(err));
}



