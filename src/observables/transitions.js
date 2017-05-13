/* eslint-disable */
import Rx from 'rxjs/Rx';
import forOwn from 'lodash/forOwn';

let transitions = Object.create(null);
let transitionElements = Object.create(null);
let anchors = Object.create(null);
let commonElements = Object.create(null);
export const registerElem = (type, name, elem) => {
  console.log('currElems = ', getElems());
  switch(type) {
    case 'transition':
      transitions[name] = elem;
      break;
    case 'transitionElements':
      transitionElements[name] = elem;
      break;
    case 'anchor':
      anchors[name] = elem;
      // console.log('boundingRect = ', elem.getBoundingClientRect());
      // const newElem = elem.cloneNode(true);
      // document.body.append(newElem);
      break;
    case 'commonElement':
      commonElements[name] = elem;
      break;
  }
};

export const getElems = () => {
  return {
    transitions: {...transitions},
    transitionElements: {...transitionElements},
    anchors: {...anchors},
    commoneElements: {...commonElements},
  }
};

export const resetElems = (whichOnes = []) => {
  if (whichOnes.length < 1) {
    transitions = {};
    transitionElements = {};
    anchors = {};
    commonElements = {};
  }
}

export const getBoundingRect = (whichOnes = []) => {
  let boundingRect = {
    transitionElements: {},
    anchors: {},
    commonElements: {},
  };
  if (whichOnes.length < 1) {
    if (transitionElements) {
      forOwn(transitionElements, (elem, key) => {
        boundingRect.transitionElements[key] = elem.getBoundingClientRect();
      });
    }
    if (anchors) {
      forOwn(anchors, (elem, key) => {
        boundingRect.anchors[key] = elem.getBoundingClientRect();
      });
    }
    if (commonElements) {
      forOwn(commonElements, (elem, key) => {
        boundingRect.commonElements[key] = elem.getBoundingClientRect();
      });
    }
  }
  return boundingRect;
}







/**
export const source2$ = new Rx.Observable(observer => {
  obs = observer;

});

export const source2$ = new Rx.Observable((observer) => {
  registerElem(observer, 1);
}).take(4);
 **/
let containers = {};
let children = {};
export const containerStream$ = new Rx.Subject();
export const childStream$ = new Rx.Subject();


export const updateContainers = (id, elem) => {
  if (elem) {
    // containers[id] = {elem, rect: elem.getBoundingClientRect()};
    containers[id] = {elem};
    containerStream$.next(containers);
  } else if (containers[id]) {
    delete containers[id];
    containerStream$.next(containers);
  }
  /**
  containers.push({id, elem});
  Rx.Observable.from(containers)
    .subscribe(
      obj => {
        source$.next(obj);
      },
      err => {
        console.log('ERROR ADDING CONTAINER! err = ', err);
      },
      () => {
        console.log('Done adding container');
      }
    );
   **/
}

export const updateChildren = (id, elem) => {
  console.log('updateChildren called');
  if (elem) {
    //children[id] = {elem, rect: elem.getBoundingClientRect()};
    const elemRect = elem.getBoundingClientRect();
    setTimeout(() => {
      children[id] = {elem, rect: elemRect};
      childStream$.next(children);
    }, 2000);

  } else if (children[id]) {
    delete children[id];
    childStream$.next(children);
  }
}



//registerElem(1);
// let elems = [1, 5, 9];
// export const source2$ = Rx.Observable.from(elems);

//registerElem(1);
setTimeout(() => {
  //source$.next(50);
}, 3000);

