import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.css']
})
export class DiasComponent {

  estaciones: any=[];
  estToday:any;

	constructor(private http:HttpClient) {
	}
   title = 'Informe de limpieza';
 
 
   getAllEstacionesToday(){

    this.http.get('api/limpieza_del_dia_de_hoy').subscribe(data=>{
      console.log(data)
      this.estaciones=data
    })
  }

  ngOnInit(): void {
    this.getAllEstacionesToday();
  }

}
