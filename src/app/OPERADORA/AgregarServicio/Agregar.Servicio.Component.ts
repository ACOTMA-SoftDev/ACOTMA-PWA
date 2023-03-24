import { Component, OnInit } from "@angular/core";
import * as XLSX from 'xlsx'
import { Router } from "@angular/router";
@Component({
  templateUrl:'Agregar.Servicio.Component.html',
  styleUrls:['Agregar.Servicio.Component.scss']
})
export class AgregarSerevicioComponent implements OnInit{
  constructor (private router: Router){

  }
  ExcelData:any;
  fileUpload(event:any){
  const selectedFile=event.target.files[0];
  const fileReader=new FileReader();
  fileReader.readAsBinaryString(selectedFile);
  fileReader.onload=(event:any) =>{
    var workbook=XLSX.read(fileReader.result,{type:'binary'})
    var sheetNames= workbook.SheetNames;
    this.ExcelData=XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]])
    console.log(this.ExcelData);
  }
}
  ngOnInit(): void {
  }
  icongif='assets/iconBlackAcotma.gif'
  goServiciosIniciados(){
    this.router.navigate(['Operadora/ServiciosIniciados'])
  }
  goHorarioServicio(){
    this.router.navigate(['Operadora/HorarioServicio'])
  }
  goCerrar(){
    this.router.navigate(['login'])
  }
}
