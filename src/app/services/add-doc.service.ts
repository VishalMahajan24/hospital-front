import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Doctor } from '../doctor';

@Injectable({
  providedIn: 'root'
})
export class AddDocService {

 
  private baseUrl:string = "http://localhost:8888/doctor/add ";
  constructor(private http: HttpClient) { }


  addDocinfo(d?:Doctor): Observable<Object> {
    return this.http.post<Object>(`${this.baseUrl}`,d);
  }

}
