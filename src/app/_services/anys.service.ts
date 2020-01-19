import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Any } from '../_models/any';

@Injectable({ providedIn: 'root' })
export class AnysService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Any[]>(`${environment.apiUrl}/anys`);
    }

    get(id: number) {
        return this.http.get(`${environment.apiUrl}/anys/${id}`);
    }

    getByText(text: string) {
        return this.http.get(`${environment.apiUrl}/anys/byText/${text}`);
    }

}