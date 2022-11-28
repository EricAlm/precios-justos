import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren:()=>import('./pages/home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'provincias',
    loadChildren:()=>import('./pages/provincias/provincias.module').then(m=>m.ProvinciasModule)
  },
  {
    path:'precios',
    loadChildren:()=>import('./pages/precios/precios.module').then(m=>m.PreciosModule)
  },
  {
    path:'**',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
