import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: 'Cargar.Imagen.Unidad.Component.html',
  styleUrls: ['Cargar.Imagen.Unidad.Component.scss']
})
export class CargarImagenUnidadComponent implements OnInit {
  selectedFile!: File;
  byteImg:any
  cargarUnidades:any
  selectedValue:any
  nombreUnidad:any
  opcionSeleccionado:any;
  verSeleccion:any;
  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
    console.log(this.opcionSeleccionado)
    console.log(this.verSeleccion)
}
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile)
  }
  onSendImage() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile)
      reader.onload=()=>{
        this.byteImg=reader.result as string
        const datos = {
          ImagenUnidad: this.byteImg,
          NombreUnidad:this.verSeleccion
        }
        console.log(datos)
        let url = "https://prueba252.somee.com/api/CentroControl/Verificacion/ImagenUnidades"
        this.http.post(url, datos).toPromise().then(Response => {
          console.log(datos)
        })
      }
    }
  }
  loadUnidades(){
    this.http.get("https://prueba252.somee.com/api/CentroControl/Asignaciones/Hoy").subscribe(data=>{
      this.cargarUnidades=data

    })
  }
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {

    this.loadUnidades();
  }

}
