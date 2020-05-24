import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { MenuComponent } from './menu.component';




@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class MenuModule { }
