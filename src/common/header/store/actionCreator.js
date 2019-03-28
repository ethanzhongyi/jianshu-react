import * as actionTypes from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

export const searchFocus = () => {
  return {
    type: actionTypes.SEARCH_FOCUS
  }
}

export const searchBlur = () => {
    return {
      type: actionTypes.SEARCH_BLUR
    }
  }

const changeList = (data) => {
  return {
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data)
  }
}
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json')
      .then((res) => {
        const data = res.data;
        dispatch(changeList(data.data));
      })
      .catch(() => {console.log('err')})
  }
}