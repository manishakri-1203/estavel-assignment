import { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import './index.css'

const NavigationBar = () => {
    const [isExpanded, setIsExpanded] = useState(true)

    const onExpand = () => {
        setIsExpanded(!isExpanded)
    }

    const productsCategoryClassName = isExpanded ? "show-navigation" : "hide-navigation"

    return(
    
    <div className="navigation-container">
        <div className="products-category" onClick={onExpand}>
            <h1 className='text-success pr-1 products-category-heading'>Products Category</h1>
            <MdKeyboardDoubleArrowRight className="text-success" size="20" />
        </div>
        <hr />
        <ul className={productsCategoryClassName}>
            <li className="products-category-item">
                <a href="#stonePediaExclusive" className="link">Stone Pedia Exclusive</a>
            </li>
            <hr />
            <li className="products-category-item">
                <a href="#bestSellingProducts" className="link">Best Selling Products</a>
            </li>
            <hr />
            <li className="products-category-item">
                <a href="#ourPremiumStones" className="link">Our Premuim Stones</a>
            </li>

        </ul>

    </div>
)}

export default NavigationBar