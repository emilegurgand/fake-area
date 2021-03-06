// Extern modules
import React from 'react';

// My modules
import Register from './Register';
import Login from './Login';
import AppBar from '../AppBar/AppBar';

// Styles
import styles from './styles/ConnexionPage.module.css';


// Component
function ConnexionPage() {
    const [gotAccount, setGotAccount] = React.useState(true)

    return (
        <div className="background">
            <AppBar></AppBar>
            <div className={styles.centerRow}>
                <div className={styles.logWidget}>
                    {!gotAccount ?
                        <Register setGotAccount={setGotAccount} gotAccount={gotAccount}></Register>
                        :
                        <Login setGotAccount={setGotAccount} gotAccount={gotAccount}></Login>
                    }
                </div>
            </div>
        </div>
    )
}

export default ConnexionPage;
