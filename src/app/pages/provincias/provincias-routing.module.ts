import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { EntradaComponent } from './components/entrada/entrada.component';


const routes: Routes = [{
  path:'',
  children:[
    {path:'listado',component:ListadoComponent},
    {path:':provincia',component:EntradaComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvinciasRoutingModule { }
