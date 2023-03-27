import { Component, OnInit,ViewChild } from "@angular/core";
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { HttpClient } from "@angular/common/http";
import * as Chart from "chart.js";

@Component({
  templateUrl:'Verificacion.Component.html',
  styleUrls: ['Verificacion.Component.scss']

})
export class VerificacionComponent implements OnInit{
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  }
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
  ];

  public barChartData: ChartData<'bar'> = {
    labels: ['Gran Viale','Boxer','Sprinter','Vagoneta'],
    datasets: [{ data: [ 35,27,14,48 ], label: 'Liberado' },
    { data: [ 35,30,14,49 ], label: 'Asignado' }
  ]
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://localhost:44397/api/CentroControl/Verificaciones/Hoy').subscribe(data => {
      const jsonData=data.reduce((acc:any,curr:any)=>Object.assign(acc,curr),{})
      const jsonLabels=Object.keys(jsonData)
      const jsonDataC=Object.values(jsonData)
      console.log(jsonDataC)
      this.barChartData.labels = jsonLabels;
      console.log(this.barChartData.labels)
    });
  }
}
