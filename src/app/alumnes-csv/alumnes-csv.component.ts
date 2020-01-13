import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService, AlertService } from '../_services';
import { AssignaturesService } from '../_services/assignatures.service';
import { AlumnesService } from '../_services/alumnes.service';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-alumnes-csv',
  templateUrl: './alumnes-csv.component.html',
  styleUrls: ['./alumnes-csv.component.css']
})
export class AlumnesCsvComponent implements OnInit {
  
  returnUrl: string;
  assignatura;
  uploadedFileName:string;
  submitted = false;
  alumnes =  [];

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

  title = 'csvTOjson works!';
  text  : any ;
  JSONData : any;


  csvJSON(csvText) {
    this.alumnes = [];
   var lines = csvText.split("\n");

   var result = [];

   var headers = lines[0].split(",");
   console.log(headers);
   for (var i = 1; i < lines.length; i++) {

       var obj = {};
       var currentline = lines[i].split(",");

       for (var j = 0; j < headers.length; j++) {
          headers[j] = headers[j].replace("\r", '');
          obj[headers[j]] = currentline[j].replace("\r", '');
       }

       result.push(obj);

   }

   this.alumnes = result;

   //return result; //JavaScript object
   console.log(JSON.stringify(result)); //JSON
   this.JSONData = JSON.stringify(result);
}


guardarAlumnes() {
  this.submitted = true;
  //
  if(!this.uploadedFileName)
    return;

  
  //tratamiento error no poner fichero y mostrar mensaje alert

}


 convertFile(input) {
  this.uploadedFileName = input.files[0].name
 const reader = new FileReader();
 reader.readAsText(input.files[0]);
 reader.onload = () => {
   let text = reader.result;
   this.text = text;
   console.log(text);
   this.csvJSON(text);
 };

}

}
