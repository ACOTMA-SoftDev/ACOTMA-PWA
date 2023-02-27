import { RouterModule, Routes} from '@angular/router';/**IMPORTAR LOS ROUTERS MODULES creaste una crapeta donde los routing solo seran para los cronos */
import { NgModule } from '@angular/core';
import { MenuTitanesComponent } from "../CRONOS/titanes/componentes/menu-titanes/menu-titanes.component";
import { InicioComponent } from '../CRONOS/menu/componentes/inicio/inicio.component';
import { InfTecnologicosComponent } from '../CRONOS/titanes/componentes/inf-tecnologicos/inf-tecnologicos.component';
import { B8Component } from '../CRONOS/titanes/inf-incidencias/componentes/b8/b8.component';

const appCronosRoutes: Routes = [
    {path:'', redirectTo:'inicio',pathMatch:'full'},
    { path: 'inicio', component: InicioComponent },
    { path: 'titanes', component: MenuTitanesComponent },
    { path: 'informe_de_incidencias_tecnologicas', component: InfTecnologicosComponent},
    {path:  'menu/cronos', component: MenuTitanesComponent},
    {path: 'informe_incidencias_b8', component: B8Component}
  ];

@NgModule({
    imports: [RouterModule.forRoot(appCronosRoutes)],
    exports: [RouterModule]
  })

export class CronosRouting {};