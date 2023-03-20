import { RouterModule,Routes } from "@angular/router";
import { HomeComponent } from "../OPERADORA/Home/Home.Component";
import { NgModule } from "@angular/core";
import { ServiciosIniciadosComponent } from "../OPERADORA/Servicios Iniciados/Servicios.Iniciados.Component";
import { HorarioComponent } from "../OPERADORA/HorarioServicio/Horario.Servicio.Component";
import{FormsModule} from '@angular/forms'
import { EditarServicioComponent } from "../OPERADORA/EditarServicio/Editar.Servicio.Component";
const appOperadoraRouting:Routes=[
  {path:'Operadora/Home', component:HomeComponent},
  {path: 'Operadora/ServiciosIniciados',component:ServiciosIniciadosComponent},
  {path: 'Operadora/HorarioServicio',component:HorarioComponent},
  {path: 'Operadora/EditarServicio',component:EditarServicioComponent}

];
@NgModule({
  imports:[RouterModule.forRoot(appOperadoraRouting),
    FormsModule,
  ],
  exports: [RouterModule],
  bootstrap:[OperadoraRouting]
})
export class OperadoraRouting{}
