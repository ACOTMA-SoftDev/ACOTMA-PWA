import { RouterModule, Routes} from '@angular/router';/**IMPORTAR LOS ROUTERS MODULES creaste una crapeta donde los routing solo seran para los cronos */
import { Component, NgModule } from '@angular/core';
import { MenuTitanesComponent } from "../CRONOS/titanes/componentes/menu-titanes/menu-titanes.component";
import { InicioComponent } from '../CRONOS/menu/componentes/inicio/inicio.component';
import { InfTecnologicosComponent } from '../CRONOS/titanes/componentes/inf-tecnologicos/inf-tecnologicos.component';
import { B8Component } from '../CRONOS/titanes/inf-incidencias/componentes/b8/b8.component';
import { DiasComponent } from '../CRONOS/titanes/Limpieza/componentes/dias/dias.component';
import { SemanalComponent } from '../CRONOS/titanes/Limpieza/componentes/semanal/semanal.component';
import { InicioIncidenciasComponent } from '../CRONOS/titanes/inf-incidencias/componentes/inicio-incidencias/inicio-incidencias.component';
import { RegistroVehiComponent } from '../CRONOS/titanes/componentes/registro-vehi/registro-vehi.component';
import { VerificacionComponent } from '../CRONOS/Verificacion/Verificacion.Component';
import { MapSreensComponent } from '../maps/screens/map-sreens/map-sreens.component';
import { PrestamoComponent } from '../PrestamoVehicular/component/prestamo/prestamo.component';
import { VerificacionDashboardComponent } from '../CRONOS/VerificacionDashBoard/Verificacion.Dashboard.Component';
import { CargarImagenUnidadComponent } from '../CRONOS/CargarImagenUnidad/Cargar.Imagen.Unidad.Component';
import { ConsultarServicioComponent } from '../VERIFICADORES/ConsutlarServicio/Consultar.Servicio.Component';
import { InicioTitanesComponent } from '../TITANES/inicio-titanes/inicio-titanes.component';
import { InicioAdminComponent } from '../JEFE_TURNO/componentes/inicio-admin/inicio-admin.component';


const appCronosRoutes: Routes = [
    {path:'', redirectTo:'inicio',pathMatch:'full'},/* por default si no esxite ninguna ruta se ira a la pagia principal* */
    { path: 'inicio', component: InicioComponent },
    { path: 'titanes', component: MenuTitanesComponent },
    { path: 'informe_de_incidencias_tecnologicas', component: InfTecnologicosComponent},
    {path:  'menu/cronos', component: MenuTitanesComponent},
    {path: 'informe_incidencias_b8', component: B8Component},
    {path: 'informe_de_limpieza_del_dia_de_hoy', component: DiasComponent},
    {path: 'informe_de_limpieza_de_la_semana', component: SemanalComponent},
    {path: 'incidencias_inicio', component: InicioIncidenciasComponent},
    {path:'incidencias-b8', component: B8Component},
    {path: 'registro_vehicular', component: RegistroVehiComponent},
    {path:'Verificacion/Servicio', component:VerificacionComponent},
    {path: 'Ubicacion_Titan', component: MapSreensComponent}, /*CREAMOS LA RUTA DEL COMPONENTE */
    {path: 'PrestamoVehicular', component: PrestamoComponent},
    {path:'Verificacion/Inicio',component:VerificacionDashboardComponent},
    {path:'Verificacion/CargarImagen',component:CargarImagenUnidadComponent},
    {path:'Verificadores/ConsultaServicio',component:ConsultarServicioComponent},
    {path: 'inicio_titanes',component: InicioTitanesComponent},
    {path: 'inicio-admin', component: InicioAdminComponent},

  ];

@NgModule({
    imports: [RouterModule.forRoot(appCronosRoutes)],
    exports: [RouterModule]
  })

export class CronosRouting {};
