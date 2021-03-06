
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';

//nuevos componentes
import { LoginComponent } from './login';
import { HomeComponent } from './home';

import { fakeBackendProvider } from './_helpers';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppRoutes } from './app.routing';
import { AlertComponent } from './_components';
import { NovaAssignaturaComponent } from './nova-assignatura/nova-assignatura.component';
import { InfoAssignaturaComponent } from './info-assignatura/info-assignatura.component';
import { ActivitatsComponent } from './activitats/activitats.component';
import { NovaActivitatComponent } from './nova-activitat/nova-activitat.component';
import { AdministrarEstudiantsComponent } from './administrar-estudiants/administrar-estudiants.component';
import { AlumnesCsvComponent } from './alumnes-csv/alumnes-csv.component';
import { NouAlumneComponent } from './nou-alumne/nou-alumne.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    LoginComponent,
    HomeComponent,
    AlertComponent,
    NovaAssignaturaComponent,
    InfoAssignaturaComponent,
    ActivitatsComponent,
    NovaActivitatComponent,
    AdministrarEstudiantsComponent,
    AlumnesCsvComponent,
    NouAlumneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    {
      
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
      

      
    },{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    //fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
