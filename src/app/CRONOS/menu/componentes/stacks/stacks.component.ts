import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-stacks',
  templateUrl: './stacks.component.html',
  styleUrls: ['./stacks.component.css']
})
export class StacksComponent implements OnInit{
  base64String!:string;
  imageUrl!:any;
  publicaciones:any=[];
  constructor ( private http:HttpClient){
  };

  getPublicacion(){
   this.http.get('api/Publicaciones').subscribe(response=>{
    this.publicaciones=response
    console.log(this.publicaciones)
   })
   }   
  ngOnInit(): void {
    setInterval(() => {
      this.getPublicacion();
    }, 500)
  }
}
