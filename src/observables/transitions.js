/* eslint-disable */
import Rx from 'rxjs/Rx';
import forOwn from 'lodash/forOwn';
import uniqueId from 'lodash/uniqueId';

let transitions, anchors, commonElements;

export const registerTransition = (parentId, callback) => {
  const id = uniqueId(parentId + '_');
  transitions[id] = callback;
};

export const registerAnchor = (parentId, callback) => {
  const id = uniqueId(parentId + '_');
  anchors[id] = callback;
  transitions[parentId]({type: 'registerAnchor', payload: {id, callback}});
};

export const registerCommonElement = (parentId, callback) => {
  const id = uniqueId(parentId + '_');
  commonElements[id] = callback;
  anchors[parentId]({type: 'registerCommonElement', payload: {id, callback}});
}

const stream2$ = Rx.Observable.create((observer) => {
  observer.next('value1');
});



/**
let transitions = Object.create(null);
let transitionElements = Object.create(null);
let anchors = Object.create(null);
let commonElements = Object.create(null);
export const registerElem = (type, name, elem) => {
  // console.log('currElems = ', getElems());
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
**/




export const source$ = new Rx.Subject();
transitions = {};
let anchorKeys = {};
let commonElementKeys = {};
export const createChildStream = (parentStream$, internalKey) => {
  // console.log('internalKey = ', internalKey);
  return parentStream$
    .filter( data => data.context && data.context.startsWith(internalKey));
};


export const actions = {
  connect: (elemType, parentId, callback) => {
    let id;
    switch(elemType) {
      case 'transitionConnect':
        Rx.Observable.create((observer) => {
          if (!transitions[id] && !parentId) {
            id = 'root';
            if (!transitions[id] && !parentId) {
              transitions[id] = {
                id,
                parentId: null,
                callback,
              };
              observer.next(id);
              store$.next(transitions);
            } else {
              console.error('Only 1 mdTransitionConnect element can be used');
              observer.error('Only 1 mdTransitionConnect element can be used');
            }
          }
        }).subscribe(callback('connect'));
        break;
      case 'transitionGroup':

        break;
      case 'transitionElement':
        break;
      case 'transitionAnchor':
        break;
      case 'transitionCommonElement':
        break;
    }
    return Rx.Observable.create(observer => {
      let id;
      if (elemType === 'mdTransitionConnect') {

      } else if (parentId || parentId === 0) {
        id = uniqueId(parentId + '_');
        transitions[id] = {
          id,
          parentId,
          callback,
        };
        return {
          id,
          subscribe: store$.filter( data => data.id && data.id.startsWith(id)),
        };
      } else {
        console.error('Missing parentId');
        store$.error('Missing parentId');
      }


    })
  },
}

export const getUniqueId = (elemType, parentId, callback) => {
  let internalId;

  if (transitions[parentId] && transitions[parentId].callback) {
    transitions[parentId].callback({
      type: 'registerChild',
      payload: {
        callback: transitions[internalId]
      },
    });
  }
  return transitions[parentId];

  let keyLength = transitionKeys[parentKey].length;
  let newKey = `${parentKey}||${keyLength}`;
  while (transitionKeys[parentKey].indexOf(newKey) > -1 ) {
    keyLength++;
    newKey = `${parentKey}||${keyLength}`;
  }
  transitionKeys[parentKey].push(newKey);
  transitionKeys[newKey] = [];
  return newKey;
};

export const transitionActions = {
  registerAnchor: (parentKey, internalKey) => {
    source$.next({})


  },

};




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

