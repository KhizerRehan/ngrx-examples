import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from "@ngrx/effects";

import { throwError } from 'rxjs';
import { map, catchError, switchMap, take, tap } from 'rxjs/operators';

import * as fromCompaniesActions from '../actions/companyActions';
import * as fromCompaniesActionCreators from '../actions/companyActionCreators';
import { CompanyService } from '../../company.service';
import { Company } from '../types/company';


@Injectable()
export class CompanyEffectsService {

  constructor(private companyService: CompanyService,
              private actions$: Actions) {}

  @Effect()
  loadCompanies = this.actions$.pipe(
    ofType(fromCompaniesActions.LOAD_COMPANIES),
    tap(()=> console.log(`Effects =>${fromCompaniesActions.LOAD_COMPANIES}`)),
    switchMap(() => this.companyService.loadCompanies()),
    map((companies:Company[]) => new fromCompaniesActionCreators.LoadCompaniesSuccessAction(companies)),
    catchError((error) => throwError(error))
  )
}
