import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreciosRoutingModule } from './precios-routing.module';
import { ProvinciasModule } from '../provincias/provincias.module';
import { ListadoPreciosComponent } from './components/listado-precios/listado-precios.component';


@NgModule({
  declarations: [
    ListadoPreciosComponent
  ],
  imports: [
    CommonModule,
    PreciosRoutingModule,
  ],
  exports:[
    ListadoPreciosComponent
  ]
})
export class PreciosModule { }
