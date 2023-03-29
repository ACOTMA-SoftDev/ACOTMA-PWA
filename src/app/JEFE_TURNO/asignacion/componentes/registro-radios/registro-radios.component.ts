import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-registro-radios',
  templateUrl: './registro-radios.component.html',
  styleUrls: ['./registro-radios.component.css']
})
export class RegistroRadiosComponent {

  Asignacion:any=[];

  constructor ( private http:HttpClient){
  };

  getAsignacionRadios(){
   this.http.get('api/ver_Registro_de_Asignacion_de_Radios').subscribe(data=>{
      console.log(data)
      this.Asignacion=data
    })
  }

  ngOnInit(): void {
    this.getAsignacionRadios();
  }

  eliminarRegistro(Id_asignacionRadio: number) {
    const url = `api/eliminar_Asignacion_de_Radios/${Id_asignacionRadio}`;
    this.http.delete(url).subscribe(
      () => {
        console.log('Registro eliminado correctamente');
        // realiza cualquier otra acción necesaria después de eliminar el registro
      },
      error => {
        console.error('Error al eliminar registro', error);
        // maneja el error de manera adecuada
      }
    );
  }


}
