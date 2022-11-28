import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvinciasRoutingModule } from './provincias-routing.module';
import { FormsModule } from '@angular/forms';
import { ListadoComponent } from './components/listado/listado.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { PreciosModule } from '../precios/precios.module';


@NgModule({
  declarations: [
    ListadoComponent,
    EntradaComponent
  ],
  imports: [
    CommonModule,
    ProvinciasRoutingModule,
    FormsModule,
    PreciosModule
  ],
  exports:[
    ListadoComponent
  ]
})
export class ProvinciasModule { }
