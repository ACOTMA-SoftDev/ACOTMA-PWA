import { RouterModule, Routes} from '@angular/router';/**IMPORTAR LOS ROUTERS MODULES creaste una crapeta donde los routing solo seran para los cronos */
import { Component, NgModule } from '@angular/core';
import { PrestamoComponent } from '../PrestamoVehicular/component/prestamo/prestamo.component';


const appPrestamoVehicularRoutes: Routes = [
    {path: 'PrestamoVehicular', component: PrestamoComponent}
]

  @NgModule({
    imports: [RouterModule.forRoot(appPrestamoVehicularRoutes)],
    exports: [RouterModule]
  })

  
export class PrestamoVehicular {};