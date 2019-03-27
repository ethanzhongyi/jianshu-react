import { combineReducers } from 'redux';
import { reducer as headerRreducer} from '../common/header/store';

const reducer =combineReducers({
  header: headerRreducer
});

export default reducer; 