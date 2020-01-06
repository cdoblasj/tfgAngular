


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
    uploadedFiles: Array < File > ;
    uploadedFileName = "";
    uploadedFilePath = "";

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private assignaturesService: AssignaturesService,
        private activitatsService: ActivitatsService,
        private alertService: AlertService,
        private http: HttpClient
    ) {
       
    }

    ngOnInit() {

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
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


    
}
