import merge from 'lodash/merge';
import {
  RECEIVE_ITEMS,
  RECEIVE_ITEM,
  REMOVE_ITEM
} from '../actions/item_actions';

const itemsReducer = (state = {}, action) => {
  const nextState = merge({}, state);
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ITEMS:
      action.items.forEach((item) => nextState[item.id] = item);
      return nextState
    case RECEIVE_ITEM:
      return merge({}, state, { [action.item.id]: action.item });
    case REMOVE_ITEM:
      delete nextState[action.item.id]
      return nextState
    default:
      return state;
  }
};

export default itemsReducer;