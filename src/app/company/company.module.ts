import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { companyReducer } from './redux/reducers/companyReducer';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyEditComponent } from './components/company-edit/company-edit.component';
import { CompanyEffectsService } from './redux/@effects/companyEffects.service';
import { CompanyTableComponent } from './components/company-table/company-table.component';


const routes: Routes = [
  { path:'', redirectTo:'company/list', pathMatch:'full' },
  { path: 'company/list', component: CompanyListComponent },
  { path: 'company/edit/:id', component: CompanyEditComponent },
];


@NgModule({
  declarations: [CompanyListComponent, CompanyEditComponent, CompanyTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('company', companyReducer),
    EffectsModule.forFeature([ CompanyEffectsService ])
  ]
})
export class CompanyModule { }
