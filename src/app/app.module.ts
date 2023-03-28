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
import { CrearUsuarioComponent } from './JEFE_TURNO/usuarios/componentes/crear-usuario/crear-usuario.component';
import { NavBarCrearUsuariosComponent } from './JEFE_TURNO/usuarios/componentes/nav-bar-crear-usuarios/nav-bar-crear-usuarios.component';
import { RegistrosUsuarioComponent } from './JEFE_TURNO/usuarios/componentes/registros-usuario/registros-usuario.component';
import { LimpiezaComponent } from './TITANES/limpieza/limpieza.component';
import { TitanesMenuComponent } from './TITANES/componentes/titanes-menu/titanes-menu.component';
import { TitanesRouting } from './ROUTING/app.TitanesRouting';
import { IncidenciasTecComponent } from './TITANES/componentes/incidencias-tec/incidencias-tec.component';
import { NavBarTITANESComponent } from './TITANES/nav-bar-titanes/nav-bar-titanes.component';
import { InformeDatosComponent } from './TITANES/informe-datos/informe-datos.component';
import { InformePercancesComponent } from './TITANES/informe-percances/informe-percances.component';
import { OperadoraRouting } from './ROUTING/app.OperadoraRouting';
import { LoginRouting } from './ROUTING/app.Login.Routing';
import { HorarioComponent } from './OPERADORA/HorarioServicio/Horario.Servicio.Component';
import { EditarServicioComponent } from './OPERADORA/EditarServicio/Editar.Servicio.Component';
import { VerificadoresRouting } from './ROUTING/app.VerificadoresRouting';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditarHoraComponent } from './OPERADORA/EditarHorarioServicio/Editar.Hora.Component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StacksComponent } from './CRONOS/menu/componentes/stacks/stacks.component';
import { RegistroRadiosComponent } from './JEFE_TURNO/asignacion/componentes/registro-radios/registro-radios.component';
import { Stacks2Component } from './TITANES/componentes/stacks2/stacks2.component';
import { AgregarSerevicioComponent } from './OPERADORA/AgregarServicio/Agregar.Servicio.Component';
import { ServiciosIniciadosComponent } from './OPERADORA/Servicios Iniciados/Servicios.Iniciados.Component';
import { ConsultarServicioComponent } from './VERIFICADORES/ConsutlarServicio/Consultar.Servicio.Component';
import { VerificarUnidadesComponent } from './VERIFICADORES/VerificarUnidad/Verificar.Unidad.Component';
import { VerificacionComponent } from './CRONOS/Verificacion/Verificacion.Component';
import { NgChartsModule } from 'ng2-charts';
import { MapsModule } from './maps/maps.module';
import { UbicacionComponent } from './CRONOS/ubicacion/ubicacion.component';
import { DatosAccidentesComponent } from './datos-accidentes/datos-accidentes.component';
import { PrestamoComponent } from './PrestamoVehicular/component/prestamo/prestamo.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuTitanesComponent,
    InfTecnologicosComponent,
    NavBarComponent,
    B8Component,
    LimpiezaComponent,
    TitanesMenuComponent,
    IncidenciasTecComponent,
    NavBarTITANESComponent,
    InformeDatosComponent,
    InformePercancesComponent,
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
    CrearUsuarioComponent,
    NavBarCrearUsuariosComponent,
    RegistrosUsuarioComponent,
    HorarioComponent,
    EditarServicioComponent,
    EditarHoraComponent,
    StacksComponent,
    RegistroRadiosComponent,
    Stacks2Component,
    AgregarSerevicioComponent,
    ServiciosIniciadosComponent,
    ConsultarServicioComponent,
    HorarioComponent,
    VerificarUnidadesComponent,
    VerificacionComponent,
    UbicacionComponent,
    DatosAccidentesComponent,
    PrestamoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CronosRouting, /** INYECTAR */
    TitanesRouting,
    JefeTurnoRouting,
    OperadoraRouting,
    LoginRouting,
    VerificadoresRouting,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    NgChartsModule,
    MapsModule
  ],
  exports: [
    Stacks2Component //LO EXPORTAMOS AQUI
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
