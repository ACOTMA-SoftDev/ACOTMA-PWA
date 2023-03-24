import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stacks2',
  templateUrl: './stacks2.component.html',
  styleUrls: ['./stacks2.component.css']
})
export class Stacks2Component implements OnInit{
  Mensajes:any=[];

  constructor ( private http:HttpClient){
  };

  getPublicacion(){
   this.http.get('api/Publicaciones').subscribe(data=>{
      console.log(data)
      this.Mensajes=data
    })
  }

  ngOnInit(): void {
    this.getPublicacion();
  }
}