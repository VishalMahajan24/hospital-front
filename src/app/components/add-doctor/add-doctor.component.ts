import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/doctor';
import { AddDocService } from 'src/app/services/add-doc.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

 d: Doctor= new Doctor();

  constructor(private addDocser:AddDocService) { }

  ngOnInit(): void {
  }
  addTdoctor(){
    console.log(this.d);
    this.addDocser.addDocinfo(this.d).subscribe();
  }

}
