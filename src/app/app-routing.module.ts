import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { GetDoctorComponent } from './components/get-doctor/get-doctor.component';
import { GetpatientComponent } from './components/getpatient/getpatient.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'addDoctor', component: AddDoctorComponent },
  { path: 'addPatient', component: AddPatientComponent },
  { path: 'getDoctor', component: GetDoctorComponent },
  { path: 'getPatient', component: GetpatientComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
