import { formatDate } from "@angular/common";
import { HttpClient, } from "@angular/common/http";
import { Component, OnInit, ViewChild,ElementRef } from "@angular/core";
import * as jsPDF from 'jspdf'
import autoTable from "jspdf-autoTable";

@Component
  ({
    templateUrl: 'Verificacion.Dashboard.Component.html',
    styleUrls: ['Verificacion.Dashboard.Component.scss']
  })
export class VerificacionDashboardComponent implements OnInit {
  icongif='assets/iconBlackAcotma.gif'
  dataAsignacion:any
  filtro!:string
  unidadesAsignadas: any
  unidadesLiberadas: any
  tipoUnidad: any
  totalAsignado: any
  totalLiberado: any
  lista1: any=[];
  lista2: any=[];
  resultado: any=[];
  dataCiclosPerdidos:any
  constructor(private http: HttpClient) {
  }
  filterItems(dato:any,filtro:string){
    return dato.nombre.toLowerCase().indexOf(filtro.toLowerCase()) !== -1;
  }
  GetServiciosIniciados(){
    this.http.get("https://prueba252.somee.com/api/CentroControl/Verificacion/Liberado").
    subscribe(data=>{
      this.dataAsignacion=data
    })
  }
  getDataUnidades() {
    this.http.get<any[]>("https://prueba252.somee.com/api/CentroControl/Verificaciones/Hoy").subscribe(data => {
      this.lista1 = data;
      // Hacer la petición HTTP GET para recibir los datos de la lista2
      this.http.get<any[]>('https://prueba252.somee.com/api/CentroControl/Verificacion/GetImagenesUnidades').subscribe(data => {
        this.lista2 = data;
        // Unir las dos listas por el identificador
        this.resultado = this.lista1.map((item1:any) => {
          const item2 = this.lista2.find((item2:any) => item2.tipoUnidad === item1.tipoUnidad);
          return { ...item1, ...item2 };
        });
        console.log(this.resultado)
      });
    });
  }
  GetCiclosPerdidos(){
    this.http.get("https://prueba252.somee.com/api/CentroControl/GetCiclos").subscribe(ciclos=>{
      this.dataCiclosPerdidos=ciclos
    })

  }
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
        cellPadding: 1,
        fontSize: 8,
        valign: 'middle',
        halign: 'center',
        fillColor: [120, 66, 18],
        textColor: [0, 0, 0]          //color de texto de la informacion
      },
      headStyles: {
        fillColor: [156, 34, 60],       //color de fondo del encabezado de la tabla
        textColor: [255, 255, 255],       //color del texto del encabezado
        fontSize:10,
        halign: 'center'
      },
      margin:{ top:10},
      didDrawPage: (data) =>{
        doc.text('', data.settings.margin.left +50, 10);
      }

    })
    const fechas = new Date()
    const dia = fechas.getDay()
    const mes=fechas.getMonth()
    const año=fechas.getFullYear()
    const fecha = `${dia}:${mes}:${año}`
    doc.save("Unidades en servicio "+fecha)


  }

  ngOnInit(): void {
    setInterval(() => {
      this.getDataUnidades()
    }, 1000)
    setInterval(() => {
      this.GetServiciosIniciados()
    }, 1000)

    setInterval(() => {
      this.GetCiclosPerdidos()
    }, 1000)
  }

}

