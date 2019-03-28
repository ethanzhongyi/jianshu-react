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

export const mouseIn = () => {
  return {
    type: actionTypes.MOUSE_IN
  }
}

export const mouseOut = () => {
  return {
    type: actionTypes.MOUSE_OUT
  }
}

export const changPage = (page) => {
  return {
    type: actionTypes.CHANGE_PAGE,
    page
  }
}

const changeList = (data) => {
  return {
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
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