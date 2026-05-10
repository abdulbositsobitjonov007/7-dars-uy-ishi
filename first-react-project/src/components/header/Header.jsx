import "./header.css"

function Header() {
    return (
        < div className="nav-cover">

            <header className="container">
                <div className=" navbar">
                    <a className="logo-name" href="">
                        Clarity
                    </a>
                    <ul className="menu-bar">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">Team</a></li>
                        <li>
                            <select name="" id="select-dropdown">
                                <option value="">Dropdown</option>
                                <option value="">Dropdown 1</option>
                                <option value="">Deep Dropdown</option>
                                <option value="">Dropdown 2</option>
                                <option value="">Dropdown 3</option>
                                <option value="">Dropdown 4</option>
                            </select>
                        </li>
                        <li><a href="">Contact</a></li>
                    </ul>
                    <button className="nav-btn">
                        Get Started
                    </button>
                </div>
            </header>

        </div>
    )

}

export default Header;