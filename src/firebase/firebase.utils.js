import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDTxEa0Z0wLk74K2gpm6VwG1vCcKz_j41g',
	authDomain: 'crwn-db-51835.firebaseapp.com',
	projectId: 'crwn-db-51835',
	storageBucket: 'crwn-db-51835.appspot.com',
	messagingSenderId: '899341032832',
	appId: '1:899341032832:web:f19a8a5fd9fc28d2c1f565',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	//* !userAuth => if user object does not exist,
	//* return; => we want to exit from this function
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	// * this is async so we are gonna await
	const snapShot = await userRef.get();

	// console.log(firestore.doc('users/128fdashadu'));
	// * look at the exist property in the console
	// * it tells us whether or not there's any data there
	// console.log(snapShot);

	// * if it doesn't exist we want to create it using ref
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		// * wrap it in try catch cause will make async request
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// * this gives us access to this new google
// * auth provider class from the authentication
// * library
const provider = new firebase.auth.GoogleAuthProvider();
/**
 * * what this means is the we want to always
 * * trigger the google pop up when ever we use this google
 * * auth provider */
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
