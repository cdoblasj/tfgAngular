


import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService } from '../_services';
import { AssignaturesService } from '../_services/assignatures.service';
import { Assignatura } from '../_models/assignatura';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Activitat } from '../_models/activitat';
import { ActivitatsService } from '../_services/activitats.service';
import { AlumnesService } from '../_services/alumnes.service';


@Component({
  selector: 'app-administrar-estudiants',
  templateUrl: './administrar-estudiants.component.html',
  styleUrls: ['./administrar-estudiants.component.css']
})
export class AdministrarEstudiantsComponent implements OnInit {
    assignaturaForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    public alumnes = [];
    assignatura;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private assignaturesService: AssignaturesService,
        private alumnesService: AlumnesService,
        private alertService: AlertService,
        private http: HttpClient
    ) {
       
    }

    ngOnInit() {
      
      this.getAlumnesAssignatura();
      this.getAssignatura();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    private getAssignatura() {
      var id = +this.route.snapshot.paramMap.get('id');
      this.assignaturesService.get(id)
          .pipe(first())
          .subscribe(assignatura => this.assignatura = assignatura);
    }

    cancelar()
    {
      this.router.navigate([this.returnUrl]);

    }

    administrarEstudiantsCsv()
    {
       
          const id = this.route.snapshot.paramMap.get('id');  
          this.router.navigate(['/administrarEstudiantsCsv/' + id]);

    }

    nouAlumne()
    {
       
          const id = this.route.snapshot.paramMap.get('id');  
          this.router.navigate(['/nouAlumne/' + id]);

    }

  
    
  
    private getAlumnesAssignatura() {
      var idAssignatura = +this.route.snapshot.paramMap.get('id');
      this.alumnesService.getAllByIdAssignatura(idAssignatura)
          .pipe(first())
          .subscribe(alumnes => {
            this.alumnes = alumnes
          });
    }
  
    borrarAlumne(id:number){
      this.alumnesService.delete(id)
          .pipe(first())
          .subscribe(alumnes => {
            //this.activitats = this.activitats.filter(u => u.id !== id);
            this.getAlumnesAssignatura();
          });
  
    }
  


    
}
