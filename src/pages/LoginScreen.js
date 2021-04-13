import React, { useState } from 'react';
import '../styles/loginscreen.css';
import SignInCard from '../components/SignInCard';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className="loginscreen" >
            <div className="loginscreen_Background" >
                <img
                    className="loginscreen_Logo"
                    src="https://www.freepnglogos.com/uploads/netflix-logo-symbol-png-1.png"
                    alt=""
                />
                <button className="loginscreen_Button" onClick={() => setSignIn(true)} > Sign In </button>
                <div className="loginscreen_Gradient" />
                <div className="loginscreen_Body" >
                    {
                        signIn ? (
                            <SignInCard />
                        ) : (
                            <>
                                <h1>Unlimited Films, TV Programmes and More.</h1>
                                <h2>Watch Anywhere. Cancel at any time</h2>
                                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                                <div className="loginscreen_Input" >
                                    <form>
                                        <input type='email' placeholder="Email Adress" />
                                        <button className="loginscreen_GetStarted" onClick={() => setSignIn(true)} >Get Started</button>
                                    </form>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default LoginScreen
