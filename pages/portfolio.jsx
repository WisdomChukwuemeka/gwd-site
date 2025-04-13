import {useState} from "react"
import {Link} from "react-router-dom"
import "bootstrap-icons/font/bootstrap-icons.css"

export const Portfolio = () => {
    const [menu, setMenu] = useState(true)

    const menubutton = () => {
        setMenu(!menu)
    }
    return(
        <>
            <div>
                <div className="header">
                    <header>
                        <nav>
                            <Link to="/"><h3>Portfolio</h3></Link>
                            <ul>
                                <Link className="Link" to="/about"><li>About</li></Link>
                                <Link className="Link" to="services"><li>Services</li></Link>
                                <Link className="Link" to="contact"><li>Contact</li></Link>
                                <Link className="Link" to="support"><li>Support</li></Link>
                                <div className="menu" onClick={menubutton}>
                                    <div>
                                        {menu ? <i class="bi bi-list"></i> : <i class="bi bi-x-lg"></i>}
                                    </div>
                                </div>
                            </ul>
                        </nav>
                    </header>
                    <div className="menubar">
                        <div>
                            {menu ? ("") : (
                               <div className="menu-content">
                                 <Link className="Link" to="/about"><li>About</li></Link>
                                <Link className="Link" to="services"><li>Services</li></Link>
                                <Link className="Link" to="contact"><li>Contact</li></Link>
                                <Link className="Link" to="support"><li>Support</li></Link>
                               </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}