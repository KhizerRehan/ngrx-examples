import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from "@ngrx/store";
import { companyReducer } from './redux/reducers/companyReducer';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';



const routes: Routes = [
  { path:'', redirectTo:'company/list', pathMatch:'full' },
  { path: 'company/list', component: CompanyListComponent },
  { path: 'company/edit/:id', component: CompanyEditComponent },
];


@NgModule({
  declarations: [CompanyListComponent, CompanyEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('company', companyReducer)
  ]
})
export class CompanyModule { }
