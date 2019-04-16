
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICounterState } from "../redux/counterReducer";


// Get slice of Store <name of a slice> is defined in IAppState to get which slice of store:
const getCounterFeatureState = createFeatureSelector<ICounterState>('counter');

// Get props from SlicedFeature of State:
export const getCounterValue = createSelector(
    getCounterFeatureState,
    state => state.counterValue
)
