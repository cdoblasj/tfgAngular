export class Alumne {

    id: number;
    id_assignatura: number;
    any_assignatura: string;
    nom: string;
    cognoms: string;
    notaFinal: number;
    codi:string;

    constructor(id_assignatura:number,any_assignatura:string, nom:string, cognoms:string, codi: string)
    {
        this.id_assignatura = id_assignatura;
        this.nom = nom;
        this.cognoms = cognoms;
        this.any_assignatura = any_assignatura;
        this.codi = codi;
    }
}