import { combineReducers } from 'redux-immutable';
import { reducer as headerRreducer} from '../common/header/store';

const reducer =combineReducers({
  header: headerRreducer
});

export default reducer; 