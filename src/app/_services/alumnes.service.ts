import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Alumne } from '../_models/alumne';

@Injectable({ providedIn: 'root' })
export class AlumnesService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Alumne[]>(`${environment.apiUrl}/alumnes`);
    }

    getAllByIdAssignatura(id: number) {
        return this.http.get<Alumne[]>(`${environment.apiUrl}/alumnes/byAssignatura/${id}`);
    }

    get(id: number) {
        return this.http.get(`${environment.apiUrl}/alumnes/${id}`);
    }

    addNewAlumne(alumne:Alumne){
        return this.http.post(`${environment.apiUrl}/alumnes/add`,alumne);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/alumnes/${id}`);
    }
}