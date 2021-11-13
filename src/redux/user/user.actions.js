/**this file manage actions for the user, for now 
 * only to fire 'SET_CURRENT_USER' that gives shape
 * the data() that we need for user
 */
export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  payload:  user
});

