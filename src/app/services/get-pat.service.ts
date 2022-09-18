import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import { Patient } from '../patient';

@Injectable({
  providedIn: 'root'
})
export class GetPatService {
 

   private baseUrl:string= "http://localhost:8989/patient/get"

  constructor(private http:HttpClient) { }

   gettPat(): Observable<Patient[]> {
     return this.http.get<Patient[]>(this.baseUrl);
   }

  
  //  ${this.baseUrl}/${patienId}
 

}
