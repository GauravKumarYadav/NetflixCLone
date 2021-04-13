import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import '../styles/nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory();
    
    const transitionNavBar = ()=>{
        if(window.scrollY >100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar)
        return ()=>{
            window.removeEventListener("scroll",transitionNavBar)
        }
    }, [])

    return (
        <div className={`nav ${show && 'nav_Black'}`}>
            <div className="nav_Container" >
                <img                    
                onClick={()=>{history.push("/")}}
                    className='nav_Logo'
                    src="https://www.freepnglogos.com/uploads/netflix-logo-symbol-png-1.png"
                    alt=""
                />

                <img
                    onClick={()=>{history.push("/profile")}}
                    className="nav_Avatar"
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Nav;
