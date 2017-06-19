import { connectSystemManager as notifyTransitions } from './transitions';
import { getUniqueId } from './helpers';

export const connectSystemManager = (addBodyElements, removeBodyElements, receiveDispatch) => {
  const id = getUniqueId();
  // Add other stores here as needed so each system of components can have a record of the systemManager
  notifyTransitions(id, addBodyElements, removeBodyElements, receiveDispatch);
  return id;
}