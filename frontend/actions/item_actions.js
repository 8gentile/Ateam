import * as APIUtil from '../utils/item_api_utils';
import { receiveTodo } from './todo_actions';

export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";


export function requestItems(teamId, todoId) {
  return (dispatch) => {
    return APIUtil.fetchItems(teamId, todoId)
      .then(items => dispatch(receiveItems(items)));
  };
}

export function createItem(item) {
  return (dispatch) => {
    return APIUtil.createItem(item)
      .then(todo => dispatch(receiveTodo(todo)));
  };
}

export function updateItem(item) {
  return (dispatch) => {
    return APIUtil.updateItem(item)
      .then(list => dispatch(receiveTodo(list)));
  };
}

export function destroyItem(itemId) {
  return (dispatch) => {
    return APIUtil.destroyItem(itemId)
      .then(todo => dispatch(receiveTodo(todo)));
  };
}

export const receiveItems = items => ({
  type: RECEIVE_ITEMS,
  items
});

export const receiveItem = item => ({
  type: RECEIVE_ITEM,
  item
});

export const removeItem = item => ({
  type: REMOVE_ITEM,
  item
});