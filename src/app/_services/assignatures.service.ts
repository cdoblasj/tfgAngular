import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Assignatura } from '../_models/assignatura';

@Injectable({ providedIn: 'root' })
export class AssignaturesService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Assignatura[]>(`${environment.apiUrl}/assignatures`);
    }


    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/assignatura/${id}`);
    }


    addNewAssignatura(assignatura:Assignatura){
        return this.http.post(`${environment.apiUrl}/assignatures/new`,assignatura);
    }
}