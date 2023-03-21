import { RouterModule, Routes } from "@angular/router";
import { ConsultarServicioComponent } from "../VERIFICADORES/ConsutlarServicio/Consultar.Servicio.Component";
import { VerificarUnidadesComponent } from "../VERIFICADORES/VerificarUnidad/Verificar.Unidad.Component";
import {NgModule } from "@angular/core";
import { ReportarUnidad } from "../VERIFICADORES/ReportarUnidad/Reportar.Unidad.Component";
import { VerificarDia } from "../VERIFICADORES/VerificacionDia/Verificar.Dia.Component";
const appVerificadoresRouting: Routes=[
    {path:'Verificadores/ConsultaServicio',component:ConsultarServicioComponent},
    {path:'Verificadores/VerificarUnidad', component:VerificarUnidadesComponent},
    {path:'Verificadores/ReportarUnidad',component:ReportarUnidad},
    {path:'Verificadores/VerificacionDia',component:VerificarDia},


];
@NgModule({
    imports:[RouterModule.forRoot(appVerificadoresRouting)],
    exports:[RouterModule]

})
export class VerificadoresRouting{}
