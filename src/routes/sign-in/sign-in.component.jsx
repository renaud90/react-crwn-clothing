import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocument } from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
    useEffect(() => {
        getRedirectResult(auth).then((response) => {
            if (response) {
                createUserDocument(response.user).then((doc) => {
                    console.log(doc);
                });
            }
        });
    }, []);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocument(user);
        console.log(userDocRef);
    };

    return (
        <div>
            <h1>You're in the sign-in page!</h1>
            <button onClick={logGoogleUser}>Sign in with Google popup.</button>
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google redirect.</button> */}
            <SignUpForm />
        </div>
    )
}

export default SignIn;