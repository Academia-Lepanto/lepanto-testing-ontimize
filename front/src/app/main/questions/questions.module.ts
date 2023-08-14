import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsHomeComponent } from './questions-home/questions-home.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';


@NgModule({
  declarations: [QuestionsHomeComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    QuestionsRoutingModule
  ]
})
export class QuestionsModule { }
