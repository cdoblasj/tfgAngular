
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService, AuthenticationService } from '../_services';
import { AssignaturesService } from '../_services/assignatures.service';
import { Assignatura } from '../_models/assignatura';
import { Alumne } from '../_models/alumne';
import { AlumnesService } from '../_services/alumnes.service';

@Component({
  selector: 'app-nou-alumne',
  templateUrl: './nou-alumne.component.html',
  styleUrls: ['./nou-alumne.component.css']
})
export class NouAlumneComponent implements OnInit {
    alumneForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private assignaturesService: AssignaturesService,
        private alumnesService: AlumnesService,
        private alertService: AlertService
    ) {
       
    }

    ngOnInit() {
        this.alumneForm = this.formBuilder.group({
            codi: ['', Validators.required],
            nom: ['', Validators.required],
            cognom: ['', Validators.required],
            any:['', Validators.required]
        });

        /*id: number;
    id_assignatura: number;
    any_assignatura: string;
    nom: string;
    cognoms: string;
    notaFinal: number; */

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.alumneForm.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.alumneForm.invalid) {
            return;
        }

        this.loading = true;
        var idAssignatura = +this.route.snapshot.paramMap.get('id');
        let alumneAux = new Alumne(idAssignatura, this.f.any.value,this.f.nom.value, this.f.cognom.value, this.f.codi.value);
        this.alumnesService.addNewAlumne(alumneAux)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    cancelar()
    {
      this.router.navigate([this.returnUrl]);

    }
}
