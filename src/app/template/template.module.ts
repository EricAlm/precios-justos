import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProvinciasModule } from '../pages/provincias/provincias.module';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    ProvinciasModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent
  ]
})
export class TemplateModule { }
