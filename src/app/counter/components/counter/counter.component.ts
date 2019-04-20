import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// NGRX:
import * as fromCounter from '../../redux/counterReducer';
import * as fromCounterFeatureSelector from '../../redux/counterFeatureSelector';
import { CounterActionTypes } from '../../redux/counterActionTypes';
import { Store,select } from '@ngrx/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent implements OnInit {

  counter$: Observable<number>

  constructor(private store: Store<fromCounter.ICounterState>) {
    /*
        Select returns an observable of the appropriate slice of state (reducer) from store.
        This is equivalent to store.map(state => state['counter']).distinctUntilChanged()
     */
    // this.counter$ = this.store.select<fromCounter.ICounterState>('counter');

  //  SELECT CURRENT PRODUCT:
    this.store.pipe(
      select(fromCounterFeatureSelector.getCounterValue))
      .subscribe((value) => {
        console.log(value);
      });
}

  ngOnInit() {
  }

  increment() {
    this.store.dispatch({ type: CounterActionTypes.IncrementCounter });
  }

  decrement() {
    this.store.dispatch({ type: CounterActionTypes.DecrementCounter });
  }

  // incrementAsync() {
  //   setTimeout(() => {
  //     this.store.dispatch({ type: CounterActionTypes.IncrementCounter });
  //   }, 1000);
  // }

  // decrementAsync() {
  //   setTimeout(() => {
  //     this.store.dispatch({ type: CounterActionTypes.DecrementCounter });
  //   }, 1000);
  // }

}
