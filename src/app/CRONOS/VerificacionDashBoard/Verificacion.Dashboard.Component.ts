import { HttpClient, JsonpInterceptor } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component
  ({
    templateUrl: 'Verificacion.Dashboard.Component.html',
    styleUrls: ['Verificacion.Dashboard.Component.scss']
  })
export class VerificacionDashboardComponent implements OnInit {
  unidadesAsignadas: any
  unidadesLiberadas: any
  tipoUnidad: any
  totalAsignado: any
  totalLiberado: any
  lista1: any=[];
  lista2: any=[];
  resultado: any=[];
  constructor(private http: HttpClient) {
  }
  getDataUnidades() {
    this.http.get<any[]>("http://pruebaacotma2.somee.com/api/CentroControl/Verificaciones/Hoy").subscribe(data => {
      this.lista1 = data;
      // Hacer la petición HTTP GET para recibir los datos de la lista2
      this.http.get<any[]>('http://pruebaacotma2.somee.com/api/CentroControl/Verificacion/GetImagenesUnidades').subscribe(data => {
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

  getUnidadesAsignadas() {

  }
  getUnidadesLiberadas() {

  }
  ngOnInit(): void {
    setInterval(() => {
      this.getDataUnidades()
    }, 1000)
  }
}
