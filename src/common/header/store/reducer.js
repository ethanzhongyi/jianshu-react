import * as actionTypes from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: [],
    mouseIn: false,
    page: 1,
    totalPage: 1
  })
  
export default (state = defaultState, action) => {
  if(action.type === actionTypes.SEARCH_FOCUS) {
  return state.set('focused', true);
  }
  if(action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focused', false);
  }
  if(action.type === actionTypes.CHANGE_LIST) {
    //meger 把多次set操作 合并一次
    return state.merge({
      'list': action.data,
      'totalPage': action.totalPage
    })
  }
  if(action.type === actionTypes.MOUSE_IN) {
    return state.set('mouseIn', true);
  }
  if(action.type === actionTypes.MOUSE_OUT) {
    return state.set('mouseIn', false);
  }
  if(action.type === actionTypes.CHANGE_PAGE) {
    return state.set('page', action.page);
  }
  return state;
}