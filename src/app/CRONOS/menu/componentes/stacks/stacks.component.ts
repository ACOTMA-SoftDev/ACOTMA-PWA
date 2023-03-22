import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stacks',
  templateUrl: './stacks.component.html',
  styleUrls: ['./stacks.component.css']
})
export class StacksComponent implements OnInit{

  publicaciones:any=[];

  constructor ( private http:HttpClient){
  };

  getPublicacion(){
   this.http.get('api/Publicaciones').subscribe(data=>{
      console.log(data)
      this.publicaciones=data
    })
  }

  ngOnInit(): void {
    this.getPublicacion();
  }

}
