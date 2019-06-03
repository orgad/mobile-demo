import { NgModule } from "@angular/core";
import { CommonModule} from "@angular/common";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

import { TabbarRoutingModule } from "./tabbar-routing.module";
import { FirstPageComponent } from 'src/firstpage/firstpage.component';
import { ExamComponent } from 'src/exam/exam.component';
import { ExamOverComponent } from 'src/exam-over/exam-over.component';

@NgModule({
    imports : [
      TabbarRoutingModule,
      NgZorroAntdMobileModule,
      RouterModule,
      CommonModule,
      FormsModule
    ],
    providers : [],
    declarations:[
        FirstPageComponent,
        ExamComponent,
        ExamOverComponent,
    ]
})

export class TabbarModule{

}