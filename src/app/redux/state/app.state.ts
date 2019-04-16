import { combineReducers, ActionReducerMap } from '@ngrx/store';
import { counterReducer } from '../../counter/redux/counterReducer';
import { userReducer } from 'src/app/user/userReducer';

export interface IAppState {
    counter: any;
}

export const reducers: ActionReducerMap<IAppState> = {
     counter: counterReducer,
};