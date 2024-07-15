//import { useEffect } from 'react';
//import { getRedirectResult } from 'firebase/auth';
//import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocument } from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss';

const Authentication = () => {
    // useEffect(() => {
    //     getRedirectResult(auth).then((response) => {
    //         if (response) {
    //             createUserDocument(response.user).then((doc) => {
    //                 console.log(doc);
    //             });
    //         }
    //     });
    // }, []);

    return (
        <div className='authentication-container'>
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google redirect.</button> */}
            <SignUpForm />
            <SignInForm />
        </div>
    )
}

export default Authentication;