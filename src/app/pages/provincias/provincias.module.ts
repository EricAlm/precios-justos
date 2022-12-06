import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvinciasRoutingModule } from './provincias-routing.module';
import { FormsModule } from '@angular/forms';
import { EntradaComponent } from './components/entrada/entrada.component';
import { PreciosModule } from '../precios/precios.module';
import { ProvinciasSelectComponent } from './components/provincias-select/provincias-select.component';


@NgModule({
  declarations: [
    ProvinciasSelectComponent,
    EntradaComponent
  ],
  imports: [
    CommonModule,
    ProvinciasRoutingModule,
    FormsModule,
    PreciosModule
  ],
  exports: [ProvinciasSelectComponent]
})
export class ProvinciasModule { }
