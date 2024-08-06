import { useState, useContext } from 'react';
import { signInUserWithEmailAndPassword, signInWithGooglePopup, createUserDocument } from '../../utils/firebase/firebase.utils';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';
import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const resetFormField = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = formFields;
        if (!email || !password) return;

        try {
            const { user } = await signInUserWithEmailAndPassword(email, password);
            resetFormField();
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert('Incorrect password');
                    break;
                case "auth/user-not-found":
                    alert('No user with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const logGoogleUser = async () => {
        await signInWithGooglePopup();
    };

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email} />

                <FormInput
                    label="Password"
                    type="password"
                    onChange={handleChange}
                    name="password"
                    value={password} />

                <div className='buttons-container'>
                    <Button children="Sign in" type="submit" />
                    <Button buttonType='google' type="button" children="Google sign in" onClick={logGoogleUser} />
                </div>
            </form>
        </div>
    )
}

export default SignInForm;