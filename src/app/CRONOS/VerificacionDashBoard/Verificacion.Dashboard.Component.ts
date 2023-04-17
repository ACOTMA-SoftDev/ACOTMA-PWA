// Importamos el decorador Component de Angular
import { formatDate } from "@angular/common";
// Importamos la clase HttpClient de Angular para hacer peticiones HTTP
import { HttpClient, } from "@angular/common/http";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as jsPDF from 'jspdf'
import autoTable from "jspdf-autoTable";

// Decorador Component que define el componente
@Component({
  // Definimos la ubicación del archivo HTML que contiene la plantilla del componente
  templateUrl: 'Verificacion.Dashboard.Component.html',
  // Definimos la ubicación del archivo CSS que contiene los estilos del componente
  styleUrls: ['Verificacion.Dashboard.Component.scss']
})
// Definimos la clase del componente y la implementamos con la interfaz OnInit
export class VerificacionDashboardComponent implements OnInit {
  // Definimos una propiedad icongif y le asignamos una URL de imagen
  icongif = 'assets/iconBlackAcotma.gif';
  // Definimos una propiedad dataAsignacion de tipo any
  dataAsignacion: any;
  // Definimos una propiedad filtro de tipo string, que será opcional
  filtro!: string;
  // Definimos las propiedades unidadesAsignadas, unidadesLiberadas, tipoUnidad, totalAsignado y totalLiberado
  // Todas son de tipo any, pero seguramente en el código original tendrán un tipo más específico
  unidadesAsignadas: any;
  unidadesLiberadas: any;
  tipoUnidad: any;
  totalAsignado: any;
  totalLiberado: any;
  // Definimos las propiedades lista1, lista2 y resultado como arreglos vacíos
  lista1: any[] = [];
  lista2: any[] = [];
  resultado: any[] = [];
  // Definimos la propiedad dataCiclosPerdidos de tipo any
  dataCiclosPerdidos: any;

  // Constructor del componente, donde inyectamos la clase HttpClient
  constructor(private http: HttpClient) {
  }
  // Definimos una función llamada filterItems que recibe dos parámetros:
  // dato, que es de tipo any y representa el objeto que queremos filtrar
  // filtro, que es de tipo string y representa el criterio de búsqueda
  filterItems(dato: any, filtro: string) {
    // Usamos la función toLowerCase() para convertir el nombre del objeto y el filtro a minúsculas
    // Usamos indexOf() para buscar el índice del filtro en el nombre del objeto
    // Si el índice es diferente de -1, significa que se encontró una coincidencia
    // Usamos !== para asegurarnos de que el valor devuelto sea un booleano (true si hay coincidencia, false si no)
    return dato.nombre.toLowerCase().indexOf(filtro.toLowerCase()) !== -1;
  }

  // Definimos una función llamada GetServiciosIniciados
  GetServiciosIniciados() {
    // Hacemos una petición GET HTTP a la URL indicada utilizando la clase HttpClient
    // y suscribimos la respuesta a la variable dataAsignacion cuando esté disponible
    this.http.get("https://prueba252.somee.com/api/CentroControl/Verificacion/Liberado").
      subscribe(data => {
        this.dataAsignacion = data;
      });
  }

  // Definimos una función llamada getDataUnidades
  getDataUnidades() {
    // Hacemos una petición GET HTTP a la URL indicada utilizando la clase HttpClient
    // y suscribimos la respuesta a la variable lista1 cuando esté disponible
    this.http.get<any[]>("https://prueba252.somee.com/api/CentroControl/Verificaciones/Hoy").subscribe(data => {
      this.lista1 = data;
      // Hacer la petición HTTP GET para recibir los datos de la lista2
      this.http.get<any[]>('https://prueba252.somee.com/api/CentroControl/Verificacion/GetImagenesUnidades').subscribe(data => {
        this.lista2 = data;
        // Unir las dos listas por el identificador (tipoUnidad)
        this.resultado = this.lista1.map((item1: any) => {
          // Buscamos en lista2 un objeto que tenga el mismo tipoUnidad que el objeto actual de lista1
          const item2 = this.lista2.find((item2: any) => item2.tipoUnidad === item1.tipoUnidad);
          // Usamos el operador spread para combinar los dos objetos en uno solo
          return { ...item1, ...item2 };
        });
        // Imprimimos el resultado en la consola para verificar que todo esté correcto
        console.log(this.resultado);
      });
    });
  }
  // Definimos una función llamada GetCiclosPerdidos
  GetCiclosPerdidos() {
    // Hacemos una petición GET HTTP a la URL indicada utilizando la clase HttpClient
    // y suscribimos la respuesta a la variable dataCiclosPerdidos cuando esté disponible
    this.http.get("https://prueba252.somee.com/api/CentroControl/GetCiclos").subscribe(ciclos => {
      this.dataCiclosPerdidos = ciclos
    })

  }
  // Definimos la propiedad content como un ViewChild que referencia al elemento con la etiqueta "content" en el template
  @ViewChild('content') content!: ElementRef

  // Definimos la función gettable
  gettable() {
    // Creamos un array vacío llamado rows
    const rows = []
    // Obtenemos la referencia al elemento con la etiqueta "content"
    const table = this.content.nativeElement
    // Obtenemos todos los elementos <tr> del elemento con la etiqueta "content"
    const trs = table.querySelectorAll('tr')
    // Iteramos sobre cada uno de los elementos <tr>
    for (let index = 0; index < trs.length; index++) {
      // Creamos un array vacío llamado row
      const row = []
      // Obtenemos todos los elementos <td> y <th> del elemento <tr>
      const tds = trs[index].querySelectorAll("td,th")
      // Iteramos sobre cada uno de los elementos <td> y <th>
      for (let j = 0; j < tds.length; j++) {
        // Agregamos el contenido de cada elemento <td> y <th> al array row
        row.push(tds[j].textContent.trim())
      }
      // Agregamos el array row al array rows
      rows.push(row)
    }
    // Retornamos el array rows
    return rows
  }
  //Función para descargar un archivo PDF con la información de una tabla.
  descargarPDF() {
    // Se crea un nuevo objeto jsPDF.
    const doc = new jsPDF.default();
    // Se obtienen los datos de la tabla.
    const tabledata = this.gettable();
    // Se utiliza la función autoTable de jsPDF para crear la tabla en el documento PDF.
    autoTable(doc, {
      head: [tabledata[0]],
      body: tabledata.slice(1),
      styles: {
        cellPadding: 1,
        fontSize: 8,
        valign: 'middle',
        halign: 'center',
        fillColor: [120, 66, 18],
        textColor: [0, 0, 0]
      },
      // Se establece el ancho de las columnas.
      headStyles: {
        fillColor: [156, 34, 60],       //color de fondo del encabezado de la tabla
        textColor: [255, 255, 255],       //color del texto del encabezado
        fontSize: 10,
        halign: 'center'
      },
      margin: { top: 10 },
      didDrawPage: (data) => {
        doc.text('', data.settings.margin.left + 50, 10);
      }

    })
    const fechas = new Date()
    const dia = fechas.getDay()
    const mes = fechas.getMonth()
    const año = fechas.getFullYear()
    const fecha = `${dia}:${mes}:${año}`
    // Se descarga el archivo PDF.
    doc.save("Unidades en servicio " + fecha)


  }

  /**
 * Método del ciclo de vida de Angular que se ejecuta después de que la vista y los datos asociados
 * se inicializan por completo.
 */
  ngOnInit(): void {
    // Ejecuta el método "getDataUnidades" cada 1000 milisegundos (1 segundo)
    setInterval(() => {
      this.getDataUnidades()
    }, 1000)

    // Ejecuta el método "GetServiciosIniciados" cada 1000 milisegundos (1 segundo)
    setInterval(() => {
      this.GetServiciosIniciados()
    }, 1000)

    // Ejecuta el método "GetCiclosPerdidos" cada 1000 milisegundos (1 segundo)
    setInterval(() => {
      this.GetCiclosPerdidos()
    }, 1000)
  }

}

