import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesHomeComponent } from './categories-home/categories-home.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CategoriesNewComponent } from './categories-new/categories-new.component';


@NgModule({
  declarations: [CategoriesHomeComponent, CategoriesNewComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
