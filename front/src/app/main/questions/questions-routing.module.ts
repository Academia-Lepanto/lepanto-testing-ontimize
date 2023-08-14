import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsHomeComponent } from './questions-home/questions-home.component';
import { QuestionsDetailComponent } from './questions-detail/questions-detail.component';
import { QuestionsNewComponent } from './questions-new/questions-new.component';


const routes: Routes = [{
  path: '',
  component: QuestionsHomeComponent
},
{
  path: "new",
  component: QuestionsNewComponent
},
{
  path: ":question_code",
  component: QuestionsDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
