import * as fromRoot from '../../redux/state/app.state';
import { CounterActionTypes } from "./counterActionTypes";

export interface ICounterState {
    counterValue: number,
    error: string
}

const InitialCounterState: ICounterState = {
    counterValue: 0,
    error: ''
}

export const counterReducer = (state: ICounterState = InitialCounterState, action: any) => {
    switch (action.type) {
        case CounterActionTypes.IncrementCounter:
            return {
                counterValue: state.counterValue+1,
                error: ''
            }
        case CounterActionTypes.DecrementCounter:
            return {
                counterValue: state.counterValue-1,
                error: ''
            }
        default:
            return state;
    }
};