import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro-vehi',
  templateUrl: './registro-vehi.component.html',
  styleUrls: ['./registro-vehi.component.css']
})
export class RegistroVehiComponent implements OnInit{
  term:any;
  RegistroVehicular:any=[];//recolectamos todos los datos para luego mostrarlos

	constructor(private http:HttpClient) {}
   //creamos un contrucutor
   title = 'Informe de accidentes';

   getAllEstacionesToday(){
    this.http.get('https://prueba252.somee.com/api/ver_Registro_Vehicular').subscribe(data=>{
      console.log(data)
      this.RegistroVehicular=data
    })
    }

  ngOnInit(): void {
    setInterval(() => {
    this.getAllEstacionesToday();
  }, 1300)
  }

}
