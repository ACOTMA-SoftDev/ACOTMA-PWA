import { RouterModule, Routes } from "@angular/router";
import { loginComponent } from "../LOGIN/login.Component";
import {NgModule } from "@angular/core";
import { InicioTitanesComponent } from "../TITANES/inicio-titanes/inicio-titanes.component";
import { InicioOperadoraComponent } from "../OPERADORA/Inicio/Inicio.Operadora.Component";
import { ConsultarServicioComponent } from "../VERIFICADORES/ConsutlarServicio/Consultar.Servicio.Component";
import { InicioComponent } from "../CRONOS/menu/componentes/inicio/inicio.component";

const appLoginRouting: Routes=[
    {path:'', redirectTo:'login',pathMatch:'full'},
    {path:'login',component:loginComponent},
    {path:'inicio',component:InicioTitanesComponent},
    {path:'login',component:InicioComponent},
    {path:'Operadora',component:InicioOperadoraComponent},
    {path:'Verificadores/ConsultaServicio',component:ConsultarServicioComponent}


];
@NgModule({
    imports:[RouterModule.forRoot(appLoginRouting)],
    exports:[RouterModule]

})
export class LoginRouting{}
