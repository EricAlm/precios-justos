import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProvinciasModule } from '../provincias/provincias.module';
import { InfoComponent } from './components/info/info.component';


@NgModule({
  declarations: [
    HomeComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProvinciasModule
  ],
  exports : [
    HomeComponent
  ]
})
export class HomeModule { }
