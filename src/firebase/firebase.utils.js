import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDp-fIUQGA9DWOHDx6k2SfW_1bcmtUkuys",
    authDomain: "e-commerce-db-a9f0e.firebaseapp.com",
    projectId: "e-commerce-db-a9f0e",
    storageBucket: "e-commerce-db-a9f0e.appspot.com",
    messagingSenderId: "995251812263",
    appId: "1:995251812263:web:8154cf42dc8481863ce882",
    measurementId: "G-RLC86TBMF1"
};

export const createUserProfileDocument = async (userAuth, aditionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShop = await userRef.get();

    if (!snapShop.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...aditionalData
            })
        } catch (err) {
            console.log('error creating user', err.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;