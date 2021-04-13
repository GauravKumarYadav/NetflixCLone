import React from 'react';
import { useSelector } from 'react-redux';
import Nav from '../components/Nav';
import { auth } from '../config/firebase';
import { selectUser } from '../features/userSlice';
import '../styles/profilescreen.css';


function ProfileScreen() {
    const user = useSelector(selectUser);
    return (
        <div className="profilescreen">
            <Nav />
            <div className="profilescreen_Body" >
                <h1>
                    Edit Profile
                </h1>
                <div className="profilescreen_Info" >
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="" />
                    <div className="profilescreen_Details" >
                        <h2>{user.email}</h2>
                        <div className="profilescreen_Plans" >
                            <h3>Plans</h3>
                            <p></p>
                            <button onClick={() => { auth.signOut() }} className="profilescreen_SignOut" >Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
