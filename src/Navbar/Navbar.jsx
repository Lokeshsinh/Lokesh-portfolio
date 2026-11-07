import React, { useState } from 'react'
import styles from './Navbar.module.css'
import logo from '../assets/Logo/logo.png'
import hum from '../assets/Logo/hum.png'
import Xicon from '../assets/Logo/Xicon.png'
function Navbar() {

    const [select, setSelect] = useState(true)

    const handlerClick = () => {
        setSelect((prev) => !prev)
    }
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navbarContainer}>
                    <div className={styles.navbarLogo}>
                        <img src={logo} alt="logo" />
                    </div>

                    <div className={styles.navbarLinks}>
                        <ul >
                            <li>Home</li>
                            <li>About</li>
                            <li>Stack</li>
                            <li>Services</li>
                            <li>Contact</li>
                        </ul>
                    </div>


                    <div className={styles.navbarButtons}>
                        <button>Connect Now</button>
                    </div>


                    {/* Mobile icon */}
                    <div className={styles.mobileIcon} onClick={handlerClick}>
                        {select ? <img src={hum} alt="mobile icon" /> : <img className={styles.Xicon} src={Xicon} alt="xicon" />}
                    </div>


                </div>
            </nav>
        </>

    );
}

export default Navbar;