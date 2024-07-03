import { signInWithGooglePopup, createUserDocument } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocument(user);
        console.log(userDocRef);
    }
    return (
        <div>
            <h1>You're in the sign-in page!</h1>
            <button onClick={logGoogleUser}>Sign in with Google popup.</button>
        </div>
    )
}

export default SignIn;