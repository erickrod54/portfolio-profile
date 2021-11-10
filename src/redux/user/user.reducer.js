/**user.reducer is the slice of code related to
 * the user state
 */
 const INITIAL_STATE = {
  currentUser:  null
  /**this lane was extracted from app.js, in
   * order to set a initial state
   */
}

/**this function will receive a INITIAL_STATE
 * as first argument and then an action
 */
const userReducer = ( state = INITIAL_STATE, action ) => {
  /**how i return the state is using switch over
   * an action.type, that will be a string, and 
   * then we i can render something like the state
   * and action with the payload
  */
  switch(action.type){
    case 'SET_CURRENT_USER':
      return{
        ...state,
        currentUser: action.payload
        /**this payload property is very flexible
         * we can use it or no, and we can pass
         * whatever i need 
         */
      }

    default:
        return state;
        /**if everything fail, i return the state
         * that is the current state (can be the 
         * user object or the null value)
         */
  }
}

export default userReducer;