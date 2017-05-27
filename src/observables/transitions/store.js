import Rx from 'rxjs/Rx';
// import values from 'lodash/values';

/**
const initialState = {
  connect: {},
  groups: {},
  groupChildren: {},
  anchors: {},
  commonElements: {},
};
 **/

export const store$ = new Rx.BehaviorSubject({});

/**
setTimeout(() => {
  Rx.Observable.from(values(store$.getValue()))
    .groupBy(elem => elem.parentId)
    .flatMap(group => group.reduce((acc, curr, index, source) => [...acc, curr], []))
    .subscribe(
      (v) => {console.log('store value = ', v) }
    );
}, 1500);
 **/
