// Extern modules
import React from 'react';
import Request from '../Request';
import { useCookies } from 'react-cookie';

// My modules
import { goToPage } from '../Utils';
import GoogleAuthWidget from '../OAuth/GoogleAuthWidget';

// Styles
import styles from './styles/LoginRegister.module.css';


// Types

// Used to switch between register and login
type Props = {
    setGotAccount: Function,
    gotAccount: boolean
};


// Component
function Login(props: Props) {
    const [errorMessage, setErrorMessage] = React.useState("")
    const [,setCookies] = useCookies()

    async function login(e: any) {
        // Prevent event from reloading the page
        e.preventDefault()

        // Get the user input values needed for login
        const email = e.target.children.email.value
        const password = e.target.children.password.value

        // Login request to the database by Request
        Request.login({email: email, password: password}).then((res) => {
            // Set the cookies to know that the user is now logged
            setCookies('logged', true)
            // Redirect to profile page
            goToPage("/profile")
        }).catch((err) => {
            // Write an error message under the form to help the user found out the problem of connexion
            setErrorMessage(err)
        })
    }

    return (
        <div>
            <h1 className={styles.title}>LOGIN</h1>
            {/* Login form */}
            <form className={styles.form} onSubmit={(e) => login(e)}>
                <input
                    className={styles.input}
                    placeholder='Email'
                    type='text'
                    name='email'/>
                <input
                    className={styles.input}
                    placeholder='Password'
                    type='password'
                    name='password'/>
                <input
                    className={styles.button}
                    type='submit'
                    value='Envoyer'/>
            </form>
            {/* Zone of error message if a problem is encountered during login */}
            <p className={styles.errorMsg}>{errorMessage}</p>
            {/* Switch to the register form for a user that does not have an account */}
            <div className={styles.optionsContainer}>
                <GoogleAuthWidget setErrorMessage={setErrorMessage}></GoogleAuthWidget>
                <p className={styles.gotAccount} onClick={() => {props.setGotAccount(!props.gotAccount)}}>Still don't have an account ?</p>
            </div>
        </div>
    )
}

export default Login;
