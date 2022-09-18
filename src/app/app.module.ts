import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { GetDoctorComponent } from './components/get-doctor/get-doctor.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { GetpatientComponent } from './components/getpatient/getpatient.component';
import{ReactiveFormsModule,FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddDoctorComponent,
    GetDoctorComponent,
    AddPatientComponent,
    GetpatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
