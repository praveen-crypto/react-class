

import './navbar.css';

function Navbar() {

    return (
        
            <div className="navbar" >
                <div className="logo_container" >
                    <a className='logo'  href="/"> RONIN </a>
                </div>
                <div className='nav_items'>
                    <ul className='' >
                        <li>
                            <a href="/"> HOME </a>
                        </li>
                        <li>
                            <a href="/about"> ABOUT </a>
                        </li>
                        <li>
                            <a href="/services"> SERVICES </a>
                        </li>
                        <li>
                            <a href="/pages"> PAGES </a>
                        </li>
                        <li>
                            <a href="/blog"> BLOG </a>
                        </li>
                        <li>
                            <a href="/contact"> CONTACT </a>
                        </li>
                    </ul>
                </div>
            </div>
        
    );

}


export default Navbar;

