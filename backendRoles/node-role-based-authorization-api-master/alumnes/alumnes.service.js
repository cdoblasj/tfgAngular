


const config = require('config.json');
const jwt = require('jsonwebtoken');
const Role = require('_helpers/role');

var alumnes = [
    { id: 1, id_assignatura: 1, any_assignatura: '2019', nom: 'carlos', cognoms: 'doblas jodar', notaFinal: '10', niu: '1338429'},
    { id: 2, id_assignatura: 1, any_assignatura: '2019', nom: 'carlos2', cognoms: 'doblas jodar2', notaFinal: '9', niu: '1336969'}
];
/*
    id: number;
    id_assignatura: number;
    any_assignatura: string;
    nom: string;
    cognoms: string;
    notaFinal: number;*/

module.exports = {
    getAll,
    getById,
    getAllByIdAssignatura,
    add,
    eliminar
};

async function getAll() {
    return alumnes.map(u => {
        return u;
    });
}

async function getAllByIdAssignatura(idAssignatura) {
    const alumn = alumnes.filter(u => u.id_assignatura === parseInt(idAssignatura) );
    if (!alumn) return;
    return alumn;

}

async function getById(id) {
    const activitat = alumnes.find(u => u.id === parseInt(id));
    if (!activitat) return;
    return activitat;
}

async function add(body) {
    body.id = alumnes.length ? Math.max(...alumnes.map(x => x.id)) + 1 : 1;
    var alumne = body;
    //assignatura.id = assignatures.length ? Math.max(...assignatures.map(x => x.id)) + 1 : 1;
    if (!alumne) return;
    alumnes.push(alumne);
    return alumne;
}

async function eliminar(id) {
    alumnes  = alumnes.filter(u =>u.id !== parseInt(id));
    return alumnes;
}