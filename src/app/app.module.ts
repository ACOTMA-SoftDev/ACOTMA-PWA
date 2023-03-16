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
import { LimpiezaComponent } from './TITANES/limpieza/limpieza.component';
import { TitanesMenuComponent } from './TITANES/componentes/titanes-menu/titanes-menu.component';
import { TitanesRouting } from './ROUTING/app.TitanesRouting';
import { IncidenciasTecComponent } from './TITANES/componentes/incidencias-tec/incidencias-tec.component';
import { NavBarTITANESComponent } from './TITANES/nav-bar-titanes/nav-bar-titanes.component';
import { InformeDatosComponent } from './TITANES/informe-datos/informe-datos.component';
import { InformePercancesComponent } from './TITANES/informe-percances/informe-percances.component';
import { OperadoraRouting } from './ROUTING/app.OperadoraRouting';
import { LoginRouting } from './ROUTING/app.Login.Routing';




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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CronosRouting, /** INYECTAR */
    TitanesRouting,
    OperadoraRouting,
    LoginRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
