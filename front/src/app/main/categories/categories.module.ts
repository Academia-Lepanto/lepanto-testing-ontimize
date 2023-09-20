import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesHomeComponent } from './categories-home/categories-home.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';


@NgModule({
  declarations: [CategoriesHomeComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
