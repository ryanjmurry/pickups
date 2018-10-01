import { combineReducers } from 'redux';
import modalReducer from '../../features/modals/modalReducer';

const rootReducer = combineReducers({
  modals: modalReducer
});

export default rootReducer;
