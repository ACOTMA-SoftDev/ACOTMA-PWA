import { RouterModule, Routes} from '@angular/router';/**IMPORTAR LOS ROUTERS MODULES creaste una crapeta donde los routing solo seran para los cronos */
import { NgModule } from '@angular/core';
import { LimpiezaComponent } from '../TITANES/limpieza/limpieza.component';
import { TitanesMenuComponent } from '../TITANES/componentes/titanes-menu/titanes-menu.component';
import { InformeDatosComponent } from '../TITANES/informe-datos/informe-datos.component';
import { InformePercancesComponent } from '../TITANES/informe-percances/informe-percances.component';
import { IncidenciasTecComponent } from '../TITANES/componentes/incidencias-tec/incidencias-tec.component';

const appTitanesRoutes: Routes = [
    {path: 'limpieza', component: LimpiezaComponent},
    {path: 'titanes-menu', component:TitanesMenuComponent},
    {path: 'informe-datos', component:InformeDatosComponent},
    {path: 'informe-percances', component: InformePercancesComponent},
    {path: 'incidencias-tec', component: IncidenciasTecComponent}
    

]

@NgModule({
    imports: [RouterModule.forRoot(appTitanesRoutes)],
    exports: [RouterModule]
  })

export class TitanesRouting {};