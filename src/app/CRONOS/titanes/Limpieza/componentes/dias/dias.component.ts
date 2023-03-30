import { Component, OnInit} from '@angular/core';
import { InformeLimpiezaCrudService } from 'src/app/Servicios/informe-limpieza-crud.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.css']

})
export class DiasComponent implements OnInit{

  term:any;

  ejemplos:any=[];//varibale que pondras en el html
  InformeLimpiezasdia:any=[];//recolectamos todos los datos para luego mostrarlos

	constructor(private http:HttpClient) {}
   //creamos un contrucutor
   title = 'Informe de limpieza';

   //getAllEstacionesToday(){

    //this.http.get('api/limpieza_del_dia_de_hoy').subscribe(data=>{
      //console.log(data)
      //this.InformeLimpiezasdia=data
    //})
  //}

  //ngOnInit(): void {
    //this.getAllEstacionesToday();
  //}
  
  getAllEstaciones(){
    this.http.get('https://pruebaacotma2.somee.com/api/limpieza_del_dia_de_hoy').subscribe(data=>{
      console.log(data)
      this.ejemplos=data
    })
  }

  ngOnInit(): void {
    setInterval(() => {
    this.getAllEstaciones();
  }, 500)
  }
          dateRangeCreated($event:any) { 
            let startDate = $event[0].toJSON().split('T')[0];  
            let endDate = $event[1].toJSON().split('T')[0];  
            this.ejemplos = this.ejemplos.filter((m:any) => {
              return new Date(m.CreatedDate) >= new Date(startDate) && new Date(m.CreatedDate) <= new Date(endDate);
            }  
            );
          }
}