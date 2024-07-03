import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCAHHDV_dKo3yhOvb4NwW04YNmmv_7YxY0",
    authDomain: "crown-clothing-react-course.firebaseapp.com",
    projectId: "crown-clothing-react-course",
    storageBucket: "crown-clothing-react-course.appspot.com",
    messagingSenderId: "1083219307688",
    appId: "1:1083219307688:web:ce0f0b9b6b40c70b3fe69d"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocument = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (err) {
            console.log(`error creating the user: ${err}`);
        }
    }
    return userDocRef;
}
