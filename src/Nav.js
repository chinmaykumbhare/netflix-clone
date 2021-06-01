import React, {useEffect, useState} from "react";
import "./Nav.css"

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
           if (window.scrollY > 100) {
               handleShow(true);
           } else {
               handleShow(false);
           }
        });

        return () => {
          window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
            />

            <img
                className="nav_avatar"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F0d%2Fdc%2Fca%2F0ddccae723d85a703b798a5e682c23c1.png&f=1&nofb=1"
                alt="Avatar Logo"
            />
        </div>
    )

}

export default Nav;