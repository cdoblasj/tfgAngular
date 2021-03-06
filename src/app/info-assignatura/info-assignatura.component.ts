import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AssignaturesService } from '../_services/assignatures.service';
import { Assignatura } from '../_models/assignatura';
import { first } from 'rxjs/operators';
import { ActivitatsService } from '../_services/activitats.service';
import { AdministrarEstudiantsComponent } from '../administrar-estudiants/administrar-estudiants.component';

@Component({
  selector: 'app-info-assignatura',
  templateUrl: './info-assignatura.component.html',
  styleUrls: ['./info-assignatura.component.css']
})
export class InfoAssignaturaComponent implements OnInit {
  public assignatura;
  public activitats = [];
  
  returnUrl: string;

  constructor( public router: Router, public route: ActivatedRoute, public assignaturaService: AssignaturesService, public activitatService: ActivitatsService) 
  { 
    /*router.events.subscribe((val) => {
      this.getAssignatura();
      this.getActivitatsAssignatura();
    });*/

  }

  ngOnInit() {
    this.getAssignatura();
    this.getActivitatsAssignatura();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  private getAssignatura() {
    var id = +this.route.snapshot.paramMap.get('id');
    this.assignaturaService.get(id)
        .pipe(first())
        .subscribe(assignatura => this.assignatura = assignatura);
  }

  private getActivitatsAssignatura() {
    var idAssignatura = +this.route.snapshot.paramMap.get('id');
    this.activitatService.getAllByIdAssignatura(idAssignatura)
        .pipe(first())
        .subscribe(activitats => {
          this.activitats = activitats
        });
  }

  novaActivitat()
  {
    const id = this.route.snapshot.paramMap.get('id');  
    this.router.navigate(['/novaActivitat/' + id]);
  }
  
  administrarEstudiants()
  {
    const id = this.route.snapshot.paramMap.get('id');  
    this.router.navigate(['/administrarEstudiants/' + id]);
  }

  borrarActivitat(id:number){
    this.activitatService.delete(id)
        .pipe(first())
        .subscribe(activitats => {
          //this.activitats = this.activitats.filter(u => u.id !== id);
          this.getActivitatsAssignatura();
        });

  }

}
