import { fromJS } from 'immutable';
import * as actionsType from './constants';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  articlePage: 1,
  showScroll: false
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionsType.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList)
      })
    case actionsType.ADD_ARTICLE_LIST:
      return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
      })
    case actionsType.SHOW_FLAG:
      return state.set('showScroll', action.showFlag)
    default:
      return state;
  }
}