import React, { useEffect, useState } from 'react'
import "./Nav.css"

export default function Nav() {
    
    const [show, setShow] = useState(false);

    useEffect(() => {

      window.addEventListener("scroll", () => {
        //scroll 내리는 event 에 대한 eventListener 
        //console.log('window.scrolly : ', window.scrollY);

        if(window.scrollY > 50) {
            setShow(true);
        } else {
            setShow(false);
        }
      })
    
      return () => {
        window.removeEventListener("scroll", () => {})
      }
    }, [])
    


  return (
    <nav className={`nav ${show && "nav__black"} `}>
        <img
            alt="Netflix logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/300px-Netflix_2015_logo.svg.png"
            className="nav__logo"
            onClick={() => window.location.reload()}
        />
        <img
            alt="User logged"
            src="https://ssl.pstatic.net/static/common/myarea/myInfo.gif"
            className="nav__avatar"
        />
    </nav>
  ) 
}
