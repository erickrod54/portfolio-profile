/**root-reducer represents all the state
 * of the application, will be the file that
 * combine all the state slices together
 */
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';


export default combineReducers({
  user: userReducer
});