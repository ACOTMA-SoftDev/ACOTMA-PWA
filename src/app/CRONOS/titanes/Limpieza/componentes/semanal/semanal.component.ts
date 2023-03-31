import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { InformeLimpiezaCrudService } from 'src/app/Servicios/informe-limpieza-crud.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import  * as jsPDF  from 'jspdf'
import autoTable from 'jspdf-autoTable'


@Component({
  selector: 'app-semanal',
  templateUrl: './semanal.component.html',
  styleUrls: ['./semanal.component.css']
})
export class SemanalComponent implements OnInit{
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
  };

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
