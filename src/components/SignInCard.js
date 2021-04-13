import React, { useRef, useState } from 'react';
import db, { auth } from '../config/firebase';
import '../styles/signincard.css';

function SignInCard() {
    const [signup, setSignup] = useState(false);
    const emailRef = useRef(null);
    const nameRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            db.collection("users").doc(auth.currentUser.uid).set({
                name: nameRef.current.value,
                email: emailRef.current.value
            })
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        })
    }
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message)
        });
    }

    return (
        <div className="signincard">
            {
                !signup ?
                    (
                        <>
                            <form>
                                <h1>Sign In</h1>
                                <input ref={emailRef} placeholder="Email" type="email" autoFocus />
                                <input ref={passwordRef} placeholder="Password" type="password"  />
                                <button type="submit" onClick={signIn} >Sign In</button>
                                <h4><span className="signincard_Gray" > New to Netflix ? </span>
                                    <span className="signincard_Link" onClick={() => {setSignup(true);}} > Sign Up now.</span></h4>
                            </form>
                        </>
                    ) :
                    (
                        <>
                            <form>
                                <h1>Sign Up</h1>
                                <input ref={nameRef} placeholder="Full Name" type='text' />
                                <input ref={emailRef} placeholder="Email" type="email"  />
                                <input ref={passwordRef} placeholder="Password" type="password"  />
                                <button type="submit" onClick={register} >Sign Up</button>
                                <h4><span className="signincard_Gray" > Already a User ? </span>
                                    <span className="signincard_Link" onClick={() => {setSignup(false);                                    }} > Login now</span></h4>
                            </form>
                        </>
                    )
            }
        </div>

    )
}

export default SignInCard;
