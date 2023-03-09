import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './CRONOS/menu/componentes/inicio/inicio.component';
import { MenuTitanesComponent } from './CRONOS/titanes/componentes/menu-titanes/menu-titanes.component';
import { CronosRouting } from './ROUTING/app.CronosRouting';
import { InfTecnologicosComponent } from './CRONOS/titanes/componentes/inf-tecnologicos/inf-tecnologicos.component';
import { NavBarComponent } from './CRONOS/titanes/componentes/nav-bar/nav-bar.component';
import { B8Component } from './CRONOS/titanes/inf-incidencias/componentes/b8/b8.component';
import { DiasComponent } from './CRONOS/titanes/Limpieza/componentes/dias/dias.component';
import { SemanalComponent } from './CRONOS/titanes/Limpieza/componentes/semanal/semanal.component';
import { HeaderComponent } from './CRONOS/titanes/Limpieza/componentes/header/header.component';
import { NavBarLimpiezaComponent } from './CRONOS/titanes/Limpieza/componentes/nav-bar-limpieza/nav-bar-limpieza.component';
import { InicioIncidenciasComponent } from './CRONOS/titanes/inf-incidencias/componentes/inicio-incidencias/inicio-incidencias.component';
import { HeaderIncidenciasComponent } from './CRONOS/titanes/inf-incidencias/componentes/header-incidencias/header-incidencias.component';
import { CardIncidenciasComponent } from './CRONOS/titanes/inf-incidencias/componentes/card-incidencias/card-incidencias.component';
import { RegistroVehiComponent } from './CRONOS/titanes/componentes/registro-vehi/registro-vehi.component';
import { AsignacionRadiosComponent } from './JEFE_TURNO/asignacion/componentes/asignacion-radios/asignacion-radios.component';
import { JefeTurnoRouting } from './ROUTING/app.JefeTurnoRouting';
import { HeaderAdminComponent } from './JEFE_TURNO/componentes/header-admin/header-admin.component';
import { InicioAdminComponent } from './JEFE_TURNO/componentes/inicio-admin/inicio-admin.component';
import { HeaderAsignacionComponent } from './JEFE_TURNO/asignacion/componentes/header-asignacion/header-asignacion.component';
import { HeaderInicioAdminComponent } from './JEFE_TURNO/componentes/header-inicio-admin/header-inicio-admin.component';
import { RegistrosAsignacionComponent } from './JEFE_TURNO/asignacion/componentes/registros-asignacion/registros-asignacion.component';
import { CrearUsuarioComponent } from './JEFE_TURNO/usuarios/componentes/crear-usuario/crear-usuario.component';
import { NavBarCrearUsuariosComponent } from './JEFE_TURNO/usuarios/componentes/nav-bar-crear-usuarios/nav-bar-crear-usuarios.component';
import { RegistrosUsuarioComponent } from './JEFE_TURNO/usuarios/componentes/registros-usuario/registros-usuario.component';
import { HomeComponent } from './OPERADORA/Home.Component';
import { OperadoraRouting } from './ROUTING/app.OperadoraRouting';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuTitanesComponent,
    InfTecnologicosComponent,
    NavBarComponent,
    B8Component,
    DiasComponent,
    SemanalComponent,
    HeaderComponent,
    NavBarLimpiezaComponent,
    InicioIncidenciasComponent,
    HeaderIncidenciasComponent,
    CardIncidenciasComponent,
    RegistroVehiComponent,
    AsignacionRadiosComponent,
    HeaderAdminComponent,
    InicioAdminComponent,
    HeaderAsignacionComponent,
    HeaderInicioAdminComponent,
    RegistrosAsignacionComponent,
    CrearUsuarioComponent,
    NavBarCrearUsuariosComponent,
    RegistrosUsuarioComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CronosRouting, /** INYECTAR */
    JefeTurnoRouting,
    OperadoraRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
