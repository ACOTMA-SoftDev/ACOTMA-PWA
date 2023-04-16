import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-stacks',
  templateUrl: './stacks.component.html',
  styleUrls: ['./stacks.component.css']
})
export class StacksComponent implements OnInit{

  publicaciones:any=[];
  constructor ( private http:HttpClient){
  };

  getPublicacion(){//lo que hace esta funcion es mandar a llamar a la api de ver pubicaciones atraves de una url
   this.http.get('https://prueba252.somee.com/api/Publicaciones').subscribe(response=>{
    this.publicaciones=response
    console.log(this.publicaciones)
   })
   }   
  ngOnInit(): void {//y lo que hace esto es mostrarlo
    setInterval(() => {//el setInterval lo que hace es recargar el sitio web cada segundo
      this.getPublicacion();
    }, 1000)
  }
}
