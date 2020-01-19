const express = require('express');
const router = express.Router();
const authorize = require('_helpers/authorize')
const Role = require('_helpers/role');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({
    uploadDir: './uploads'
});

router.get('/', authorize(Role.Admin), getAll); // admin only
router.get('/:id', authorize(), getById);   
router.get('/byText/:text', authorize(), getAllByText);


const { Alumne, Professor,Assignatura,Any,AnyAcademic,User,Pd} = require('../sequelize')

module.exports = router;



function getAll(req, res, next) {
    Any.findAll()
        .then(anys => res.json(anys))
        .catch(err => next(err));
}

function getAllByText(req, res, next) {
    /*
    activitatService.getAllByIdAssignatura(req.params.text)
        .then(assignatures => res.json(assignatures))
        .catch(err => next(err));*/
}

function getById(req, res, next) {
    
}





