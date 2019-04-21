import * as fromRoot from '../../../redux/state/app.state';
import * as fromCompaniesActions from '../actions/companyActions';
import * as fromCompaniesActionCreators from '../actions/companyActionCreators';
import { Company } from '../types/company';


export interface AppState extends fromRoot.AppState {
    companies: Company[];
};

const InitialCompanyState: AppState = {
   companies: []
}


export const companyReducer = (state: AppState = InitialCompanyState,  action: fromCompaniesActionCreators.Actions) => {

    switch (action.type) {
        case fromCompaniesActions.LOAD_COMPANIES_SUCCESS: {
            return {
                ...state,
                companies:action.payload
            }
        }
        case fromCompaniesActions.DELETE_COMPANY_SUCCESS: {
            return state = {
                companies: state.companies.filter(company => company.id !== action.payload)
            };
        }
        default: {
            return state;
        }
    }
}
