
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/patient';



import { GetPatService } from 'src/app/services/get-pat.service';

@Component({
  selector: 'app-getpatient',
  templateUrl: './getpatient.component.html',
  styleUrls: ['./getpatient.component.css']
})
export class GetpatientComponent implements OnInit {

   
  // public patients:IPatient = {} as IPatient;

   patients! : Patient[];
 
  constructor(private getpatient: GetPatService, private route:ActivatedRoute) { 

  }

  ngOnInit(): void {
   
  }
  
  geP(): void{
    this.getpatient.gettPat().subscribe((data: Patient[]) => {
      console.log(data);
      this.patients = data;
      });
  }
  

  


  // this.route.paramMap.subscribe(
  //   (params)=>{
  //     this.Id=params.get("id");
  //     if(this.Id){
  //        this.getpatient.gettPat(this.Id).subscribe(
  //         (data)=>{
  //           this.patients;
  //         }
  //        );
  //     }
  //   }
  //  )
  
}
