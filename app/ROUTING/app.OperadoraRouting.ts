import { RouterModule,Routes } from "@angular/router";
import { HomeComponent } from "../OPERADORA/Home.Component";
import { NgModule } from "@angular/core";

const appOperadoraRouting:Routes=[
  {path:'Home', component:HomeComponent}

];
@NgModule({
  imports:[RouterModule.forRoot(appOperadoraRouting)],
  exports: [RouterModule],
})
export class OperadoraRouting{}
