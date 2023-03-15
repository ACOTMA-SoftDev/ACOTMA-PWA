import { Component, OnInit } from '@angular/core';
import { InformeLimpiezaCrudService } from 'src/app/Servicios/informe-limpieza-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.css'],
  providers: [InformeLimpiezaCrudService]
})
export class DiasComponent implements OnInit{
   //creamos un contrucutor
   InformeLimpiezas:any=[];//recolectamos todos los datos para luego mostrarlos
   title = 'Informe de limpieza';
   constructor(private InformeLimpiezaCrudService:InformeLimpiezaCrudService, private router:Router){}
 
     ngOnInit(){
       this.InformeLimpiezaCrudService.getInformeLimpieza().subscribe(res =>{
         this.InformeLimpiezas=res;//de esta forma mostramos los datos
         console.log('Resp',res);
       })
   
     }

}
