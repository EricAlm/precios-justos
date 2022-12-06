import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { PreciosRoutingModule } from './precios-routing.module';
import { ListadoPreciosComponent } from './components/listado-precios/listado-precios.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ListadoPreciosComponent
  ],
  imports: [
    CommonModule,
    PreciosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports:[
    ListadoPreciosComponent
  ]
})
export class PreciosModule { }
