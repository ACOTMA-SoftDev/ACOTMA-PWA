import { HttpClient } from '@angular/common/http';

// Importa el decorador Component y la interfaz OnInit desde el módulo @angular/core
import { Component, OnInit } from '@angular/core';

// Importa la clase Router desde el módulo @angular/router
import { Router } from '@angular/router';
// El decorador Component permite definir un componente en Angular, proporcionando metadatos sobre su estructura y comportamiento
@Component({
  // La propiedad templateUrl define la ubicación de la plantilla HTML para el componente
  templateUrl:'Servicios.Iniciados.Component.html',
  // La propiedad styleUrls define la ubicación de una o varias hojas de estilo CSS para el componente
  styleUrls:['Servicios.Iniciados.Component.scss']
})

export class ServiciosIniciadosComponent implements OnInit{
  // Declaramos una variable icongif y le asignamos la ruta de una imagen
  icongif='assets/iconBlackAcotma.gif'
  // Declaramos una variable dataAsignacion sin asignarle ningún valor
  dataAsignacion:any
  // Declaramos una variable filtro de tipo string usando el operador ! para indicar que no es null ni undefined
  filtro!:string
  // Constructor del componente
  constructor(private router:Router,private http:HttpClient){
  }
  // Definimos una función llamada filterItems que acepta dos parámetros: dato (de tipo any) y filtro (de tipo string)
filterItems(dato:any,filtro:string){
  // La función utiliza la función toLowerCase() para convertir tanto el nombre de dato como el filtro a minúsculas, y luego utiliza la función indexOf() para buscar si el filtro se encuentra en el nombre de dato. Si se encuentra, indexOf() devuelve el índice donde se encuentra el filtro; de lo contrario, devuelve -1.
  return dato.nombre.toLowerCase().indexOf(filtro.toLowerCase()) !== -1;
}

// Definimos una función llamada GetServiciosIniciados
GetServiciosIniciados(){
  // Utilizamos el método get del servicio HttpClient para hacer una solicitud GET a una URL específica
  this.http.get("https://prueba252.somee.com/api/ServiciosIniciados").
  // Usamos el método subscribe para manejar la respuesta de la solicitud
  subscribe(data=>{
    // Asignamos los datos de la respuesta a la variable dataAsignacion de la clase
    this.dataAsignacion=data
  })
}

  btnDeleteAsignacion(){
    this.http.get("https://prueba252.somee.com/api/Delete/Asignacion").subscribe(response=>{
      console.log(response)
    })
  }

  /**
 * Método que se ejecuta una vez que se ha inicializado el componente.
 */
ngOnInit(): void {
  /**
   * Se utiliza la función setInterval() para llamar a la función GetServiciosIniciados() cada 500 milisegundos.
   * Esto se hace para actualizar la lista de servicios iniciados cada cierto tiempo.
   * setInterval() devuelve un ID de intervalo que se puede utilizar para detener el intervalo posteriormente.
   */
  setInterval(() => {
    this.GetServiciosIniciados();
  }, 500);
}

  /**
 * Método que se utiliza para navegar hacia la página de apertura de un nuevo servicio.
 */
goApertura(){
  this.router.navigate(['Operadora/Agregar/Servicio']);
}

/**
 * Método que se utiliza para navegar hacia la página de servicios iniciados.
 */
goServiciosIniciados(){
  this.router.navigate(['Operadora/ServiciosIniciados']);
}

/**
 * Método que se utiliza para navegar hacia la página de horario de un servicio.
 */
goHorarioServicio(){
  this.router.navigate(['Operadora/HorarioServicio']);
}

/**
 * Método que se utiliza para navegar hacia la página de inicio de sesión.
 */
goCerrar(){
  this.router.navigate(['login']);
}

/**
 * Método que se utiliza para navegar hacia la página de edición de un servicio específico.
 * @param idAsignacion El ID de asignación del servicio que se desea editar.
 */
goEditarServicio(idAsignacion:any){
  this.router.navigate(['Operadora/EditarServicio',idAsignacion]);
}

}
