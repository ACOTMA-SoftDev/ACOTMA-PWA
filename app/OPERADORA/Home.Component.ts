import { Component, OnInit } from "@angular/core";
import * as XLSX from 'xlsx'
@Component({
  templateUrl:'Home.Component.html',
  styleUrls:['Home.Component.scss']
})
export class HomeComponent implements OnInit{
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
}
