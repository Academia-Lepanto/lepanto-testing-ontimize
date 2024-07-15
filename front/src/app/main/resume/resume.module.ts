import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeHomeComponent } from './resume-home/resume-home.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';


@NgModule({
  declarations: [ResumeHomeComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    ResumeRoutingModule
  ]
})
export class ResumeModule { }

