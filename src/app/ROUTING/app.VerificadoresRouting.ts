import { RouterModule, Routes } from "@angular/router";
import { ConsultarServicioComponent } from "../VERIFICADORES/ConsutlarServicio/Consultar.Servicio.Component";
import { VerificarUnidadesComponent } from "../VERIFICADORES/VerificarUnidad/Verificar.Unidad.Component";
import {NgModule } from "@angular/core";

const appVerificadoresRouting: Routes=[
    {path:'Verificadores/ConsultaServicio',component:ConsultarServicioComponent},
    {path:'Verificadores/VerificarUnidad', component:VerificarUnidadesComponent}


];
@NgModule({
    imports:[RouterModule.forRoot(appVerificadoresRouting)],
    exports:[RouterModule]

})
export class VerificadoresRouting{}
