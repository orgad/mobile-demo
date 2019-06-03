import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabbarComponent } from 'src/tabbar/tabbar.component';
import { LoginComponent } from 'src/login/login.component';

const routes: Routes = [
  { 
    path: '', redirectTo:'login',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
  { 
    path: 'tabnav', 
    component : TabbarComponent,
    loadChildren : "src/tabbar/tabbar.module#TabbarModule"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
