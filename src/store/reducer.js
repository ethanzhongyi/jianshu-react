import { combineReducers } from 'redux-immutable';
import { reducer as headerRreducer} from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store'

const reducer =combineReducers({
  header: headerRreducer,
  home: homeReducer
});

export default reducer; 