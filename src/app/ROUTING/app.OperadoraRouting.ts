import { RouterModule,Routes } from "@angular/router";
import { HomeComponent } from "../OPERADORA/Home/Home.Component";
import { NgModule } from "@angular/core";
import { ServiciosIniciadosComponent } from "../OPERADORA/Servicios Iniciados/Servicios.Iniciados.Component";

const appOperadoraRouting:Routes=[
  {path:'Operadora/Home', component:HomeComponent},
  {path: 'Operadora/ServiciosIniciados',component:ServiciosIniciadosComponent}


];
@NgModule({
  imports:[RouterModule.forRoot(appOperadoraRouting)],
  exports: [RouterModule],
})
export class OperadoraRouting{}
