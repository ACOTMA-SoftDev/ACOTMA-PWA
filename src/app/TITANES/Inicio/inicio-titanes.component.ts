import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio-titanes',
  templateUrl: './inicio-titanes.component.html',
  styleUrls: ['./inicio-titanes.component.css']
})
export class InicioTitanesComponent implements OnInit {

  Mensajes:any=[];

  constructor ( private http:HttpClient){
  };

  getMensaje(){
   this.http.get('api/Publicaciones').subscribe(data=>{
      console.log(data)
      this.Mensajes=data
    })
  }

  ngOnInit(): void {
    this.getMensaje();
  }

}
