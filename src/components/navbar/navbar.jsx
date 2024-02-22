







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
                            <a href="/"> ABOUT </a>
                        </li>
                        <li>
                            <a href="/"> SERVICES </a>
                        </li>
                        <li>
                            <a href="/"> PAGES </a>
                        </li>
                        <li>
                            <a href="/"> BLOG </a>
                        </li>
                        <li>
                            <a href="/"> CONTACT </a>
                        </li>
                    </ul>
                </div>
            </div>
        
    );

}


export default Navbar;

