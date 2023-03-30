import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { InformeLimpiezaCrudService } from 'src/app/Servicios/informe-limpieza-crud.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import  * as jsPDF  from 'jspdf'
import autoTable from 'jspdf-autoTable'


@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.css']

})
export class DiasComponent implements OnInit{
  fechahoy:Date=new Date()

  @ViewChild ('content') content!:ElementRef
  gettable(){
    const rows=[]
    const table=this.content.nativeElement
    const trs=table.querySelectorAll('tr')
    for (let index = 0; index < trs.length; index++) {
      const  row = []
      const tds=trs[index].querySelectorAll("td,th")
      for (let j = 0; j < tds.length; j++) {
        row.push(tds[j].textContent.trim())        
      } 
      rows.push(row)    
    }
    return rows
  }
  descargarPDF(){
    const doc=new jsPDF.default()
    const tabledata=this.gettable()
    autoTable( doc,{
      head:[tabledata[0]],
      body:tabledata.slice(1),
      styles:{
        
      }
    })
    doc.save("Limpieza"+ this.fechahoy)


  }

  term:any;

  ejemplos:any=[];
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
    this.http.get('https://prueba252.somee.com/api/limpieza_del_dia_de_hoy').subscribe(data=>{
      console.log(data)
      this.ejemplos=data
    })
  }

  ngOnInit(): void {
    this.getAllEstaciones();
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