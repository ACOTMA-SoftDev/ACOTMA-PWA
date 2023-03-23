import { RouterModule, Routes} from '@angular/router';/**IMPORTAR LOS ROUTERS MODULES creaste una crapeta donde los routing solo seran para los cronos */
import { Component, NgModule } from '@angular/core';
import { AsignacionRadiosComponent } from '../JEFE_TURNO/asignacion/componentes/asignacion-radios/asignacion-radios.component';
import { InicioAdminComponent } from '../JEFE_TURNO/componentes/inicio-admin/inicio-admin.component';
import { CrearUsuarioComponent } from '../JEFE_TURNO/usuarios/componentes/crear-usuario/crear-usuario.component';
import { RegistrosUsuarioComponent } from '../JEFE_TURNO/usuarios/componentes/registros-usuario/registros-usuario.component';
import { RegistroRadiosComponent } from '../JEFE_TURNO/asignacion/componentes/registro-radios/registro-radios.component';

const appJefeTurnoRoutes: Routes = [
    {path: 'Jefe-en-turno/asignar-radios', component: AsignacionRadiosComponent},
    {path: 'inicio-admin', component: InicioAdminComponent},
    {path: 'admin-crear-usuario', component:CrearUsuarioComponent},
    {path: 'admin-ver-registros-de-usuario', component:RegistrosUsuarioComponent},
    {path: 'admin-ver-asignacion-de-radios',component:RegistroRadiosComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appJefeTurnoRoutes)],
    exports: [RouterModule]
  })

export class JefeTurnoRouting {};