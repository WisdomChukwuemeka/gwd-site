import { useState } from "react"
import "bootstrap-icons/font/bootstrap-icons.css"
import {Link} from "react-router-dom"
export const Layout = () => {
    const [menu, setMenu] = useState(true)
    const Menu = () => {
        setMenu(!menu)
    }
    return(
        <>
            <div className="header-container">
                <div >
                    <header>
                        <nav>
                            <h2>GWD</h2>
                            <ul>
                                <div className="li">
                                <li>Courses</li>
                                <li>About Us</li>
                                <li>New feed</li>
                                <li>Contact Us</li>
                                </div>
                                <div className="login-signup">
                                    <div className="login">
                                        <div>
                                            <p>Login</p>
                                        </div>
                                    </div>
                                    <div className="get-started">
                                        <div>
                                            <p>Get Started</p>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                            <div className="menu" onClick={Menu}>
                                <div>
                                    {menu ? <i class="bi bi-list"></i> : <i class="bi bi-x-lg"></i>}
                                </div>
                            </div>
                        </nav>
                        <div className="menubar">
                        {menu ? ("") : (
                            <div className="links">
                            <li>Courses</li>
                            <li>About Us</li>
                            <li>News</li>
                            <li>Contact Us</li>
                            <div className="login-menu">
                                        <div>
                                            <p>Login</p>
                                        </div>
                                    </div>
                                    <div className="get-started-menu">
                                        <div>
                                            <p>Get Started</p>
                                        </div>
                                    </div>
                            </div>
                        )}
                        
                        </div>
                    
                    </header>
                </div>
            </div>
        </>
    )
}