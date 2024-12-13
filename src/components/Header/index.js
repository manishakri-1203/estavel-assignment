import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

import './index.css'

const Header = () => (
    <nav className="navbar">
        <div className="header-container">
            <h1 className='website-logo'>STONE PEDIA</h1>
            <div className="search-cart-container">
                <div className="search-container">
                    <CiSearch size="16" color="#000000" />
                    <input type="search" id="search" className="search-input" placeholder="Search for products" />
                </div>
                <FaShoppingCart size="20"  />
            </div>
        </div>

    </nav>
)

export default Header