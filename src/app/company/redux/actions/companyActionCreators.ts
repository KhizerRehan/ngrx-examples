import * as fromCompanyActions from './companyActions';
import { Action } from "@ngrx/store";
import { Company } from '../types/company';

export class LoadCompaniesAction implements Action {
    readonly type = fromCompanyActions.LOAD_COMPANIES;

    constructor() { }
}

export class LoadCompaniesSuccessAction implements Action {
    readonly type = fromCompanyActions.LOAD_COMPANIES_SUCCESS;

    constructor(public payload: Company[]) { }
}

export class DeleteCompanyAction implements Action {
    readonly type = fromCompanyActions.DELETE_COMPANY;

    constructor(public payload: number) { }
}

export class DeleteCompanySuccessAction implements Action {
    readonly type = fromCompanyActions.DELETE_COMPANY_SUCCESS;

    constructor(public payload: number) { }
}

export type Actions
    = LoadCompaniesAction
    | LoadCompaniesSuccessAction
    | DeleteCompanyAction
    | DeleteCompanySuccessAction