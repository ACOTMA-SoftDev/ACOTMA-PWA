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
import { OperadoraRouting } from './ROUTING/app.OperadoraRouting';
import {HomeComponent} from './OPERADORA/Home.Component'

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuTitanesComponent,
    InfTecnologicosComponent,
    NavBarComponent,
    B8Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CronosRouting /** INYECTAR */,
    OperadoraRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
