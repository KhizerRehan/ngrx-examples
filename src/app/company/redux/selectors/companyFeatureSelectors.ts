import * as fromCompanyReducer from '../reducers/companyReducer';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { companyReducer } from '../reducers/companyReducer';

// Get slice of Store Feature:
const getCompanyFeatureState = createFeatureSelector<fromCompanyReducer.AppState>('company');

export const getCompanies = createSelector(
    getCompanyFeatureState,
    state => state.companies
)