import React, { useState } from 'react';
import '../styles/loginscreen.css';
import SignUpScreen from '../components/SignUpScreen';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className="loginscreen" >
            <div className="loginscreen_Background" >
                <img
                    className="loginscreen_Logo"
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt=""
                />
                <button className="loginscreen_Button" onClick={() => setSignIn(true)} > Sign In </button>
                <div className="loginscreen_Gradient" />
                <div className="loginscreen_Body" >
                    {
                        signIn ? (
                            <SignUpScreen />
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
