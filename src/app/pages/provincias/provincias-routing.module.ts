import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvinciasSelectComponent } from './components/provincias-select/provincias-select.component';
import { EntradaComponent } from './components/entrada/entrada.component';


const routes: Routes = [{
  path:'',
  children:[
    {path:'listado',component:ProvinciasSelectComponent},
    {path:':provincia',component:EntradaComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvinciasRoutingModule { }
