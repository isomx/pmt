export const observable = store => next => action => {
  console.log('observable store = ', store);
  console.log('observable next = ', next);
  console.log('observable action = ', action);

}