import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

/**HERE GOES THE FIREBASE CONFIG OBJECT */


/**createUserProfileDocument creates a profile
 * for the user with the properties that we want
 * from it
 */
export const createUserProfileDocument = async (userAuth, additionalData) => {
  /**if the userAuth doesn't exist, should
   * be return*/
  if (!userAuth) return;

  /*i make the query for reference user object */
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  /**and then i get() the a snapshot of it
   * from firebase*/
  const snapShot = await userRef.get();

  /**now i check, if a snapShot doesn't exist
   * i create it destructuring the userAuth with
   * the properties i need*/
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    /**try catch make a asynchronous request
     * to store the user in firebase database
     */
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message );
    }
  }
  
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;