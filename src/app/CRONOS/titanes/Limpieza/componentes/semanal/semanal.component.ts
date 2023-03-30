import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semanal',
  templateUrl: './semanal.component.html',
  styleUrls: ['./semanal.component.css']
})
export class SemanalComponent implements OnInit{

  term: any;
  tempEst: any;
  semanales:any=[];

  constructor ( private http:HttpClient){
  };

  getSemanal(){
   this.http.get('https://prueba252.somee.com/api/resumen_limpieza').subscribe(data=>{
      console.log(data)
      this.semanales=data
    })
  }

  ngOnInit(): void {
    setInterval(() => {
    this.getSemanal();
  }, 500)
  }



}
