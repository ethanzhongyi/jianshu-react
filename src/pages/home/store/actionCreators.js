import axios from 'axios';
import * as actionsType from './constants';
import { fromJS } from 'immutable';

const ChangeHomeData = (data) => ({
    type: actionsType.CHANGE_HOME_DATA,
    articleList: data.articleList,
    recommendList: data.recommendList,
    topicList: data.topicList,
    writerList: data.writerList
});
const addHomeList = (list, nextPage) => {
  return {
    type: actionsType.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage
  }
}

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
        const data =res.data.data;
        dispatch(ChangeHomeData(data));
    })
  }
}

export const getMore = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const data =res.data.data;
      //console.log(data) 
      dispatch(addHomeList(data, page + 1));
  })
  }
}

export const toggleTopShow = (showFlag) => {
  return {
    type: actionsType.SHOW_FLAG,
    showFlag
  }
}