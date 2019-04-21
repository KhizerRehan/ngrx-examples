import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { StoreModule } from "@ngrx/store";
import { counterReducer } from './redux/counterReducer';
import { CounterComponent } from './components/counter/counter.component';

const routes: Routes = [
  {
    path:'',
    component:CounterComponent
  }
];


@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('counter', counterReducer),
  ],
  exports:[
    CounterComponent
  ]
})
export class CounterModule { }
