import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import './Nav.css';
function Nav() {
    const [show, handleShow] = useState(false);
    const history=useHistory();

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => {
            return window.removeEventListener("scroll", transitionNavbar);
        }
    }, []);
    return (

        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_content">

                <img
                     onClick={()=>history.push("./")}
                    className="nav_logo"
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="" />
                <img
                    onClick={()=>history.push("./profile")}
                    className="nav_avatar"
                    src="http://cm1.narvii.com/6791/b765482fb6aeac20cf43da52b1c609eb9a3c7468_00.jpg"
                    alt="" />
            </div>
        </div>
    )
}

export default Nav
