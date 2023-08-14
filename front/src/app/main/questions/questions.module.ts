import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsHomeComponent } from './questions-home/questions-home.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { QuestionsDetailComponent } from './questions-detail/questions-detail.component';
import { QuestionsNewComponent } from './questions-new/questions-new.component';


@NgModule({
  declarations: [QuestionsHomeComponent, QuestionsDetailComponent, QuestionsNewComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    QuestionsRoutingModule
  ]
})
export class QuestionsModule { }
