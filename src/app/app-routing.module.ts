import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/components/welcome/welcome.component';
import { ShellComponent } from './shared/components/shell/shell.component';

const routes: Routes = [
  {
    path:'',
    component: ShellComponent,
    children:[
      { path:'', component: WelcomeComponent },
      { path:'counter', loadChildren:'./counter/counter.module#CounterModule'},
      { path:'company', loadChildren:'./company/company.module#CompanyModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
