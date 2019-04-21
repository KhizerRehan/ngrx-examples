import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromCompanyProduct from '../../redux/reducers/companyReducer';
import * as fromCompaniesActions from '../../redux/actions/companyActions';
import * as fromCompaniesActionCreators from '../../redux/actions/companyActionCreators';
import * as fromCompaniesFeaturesSelectors from '../../redux/selectors/companyFeatureSelectors';
import { Observable } from 'rxjs';
import { Company } from '../../redux/types/company';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.sass']
})
export class CompanyListComponent implements OnInit {
  companies$: Observable<Company[]>

  constructor(private store: Store<fromCompanyProduct.AppState>) { }

  ngOnInit() {
    this.loadCompanies();
    this.companies$ = this.store.pipe(select(fromCompaniesFeaturesSelectors.getCompanies));
  }

  loadCompanies() {
    this.store.dispatch(new fromCompaniesActionCreators.LoadCompaniesAction());
  }

}
