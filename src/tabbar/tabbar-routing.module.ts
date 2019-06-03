import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirstPageComponent } from 'src/firstpage/firstpage.component';
import { ExamComponent } from 'src/exam/exam.component';
import { ExamOverComponent } from 'src/exam-over/exam-over.component';

@NgModule({
  imports: [
      RouterModule.forChild([
        { path:'',component:FirstPageComponent,},
        { path:'exam',component:ExamComponent},
        { path:'examover',component:ExamOverComponent},
      ])
  ]
})

export class TabbarRoutingModule { 
  
}
