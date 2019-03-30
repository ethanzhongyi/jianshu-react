import axios from 'axios';
import * as actionsType from './constants';

const ChangeHomeData = (data) => ({
    type: actionsType.CHANGE_HOME_DATA,
    articleList: data.articleList,
    recommendList: data.recommendList,
    topicList: data.topicList,
    writerList: data.writerList
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
        const data =res.data.data;
        dispatch(ChangeHomeData(data));
    })
  }
}