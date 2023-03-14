import { RouterModule, Routes } from "@angular/router";
import { loginComponent } from "../LOGIN/login.Component";
import {NgModule } from "@angular/core";

const appLoginRouting: Routes=[
    {path:'login',component:loginComponent}

];
@NgModule({
    imports:[RouterModule.forRoot(appLoginRouting)],
    exports:[RouterModule]

})
export class LoginRouting{}