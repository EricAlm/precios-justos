import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPreciosComponent } from './components/listado-precios/listado-precios.component';

const routes: Routes = [{
  path:'',
  children:[
    {path:'listado/:provincia',component:ListadoPreciosComponent},
    {path:'**',component:ListadoPreciosComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreciosRoutingModule { }
