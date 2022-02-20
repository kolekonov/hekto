import React from "react";
import classes from './HeaderNavigation.module.scss';
import Logo from '../Logo/Logo';
import { MenuLink } from "../MenuLink/MenuLink";

const HeaderNavigation = () => {

    return (
        <div>
            <div className="container">
                <div className={classes.navigation}>
                    <Logo className="header"/>
                    <nav className={classes.menu}>
                        <ul>
                            <li><MenuLink to="/" activeClass={classes.active} > Home </MenuLink> </li>
                            <li><MenuLink to="/pages" activeClass={classes.active} >Pages</MenuLink></li>
                            {/* <li><MenuLink to="/pages/page/lol/" activeClass={classes.active} >Page 1</MenuLink></li> */}
                            <li><MenuLink to="/products" activeClass={classes.active} >Products</MenuLink></li>
                            <li><MenuLink to="/blog" activeClass={classes.active} >Blog</MenuLink></li>
                            <li><MenuLink to="/shop" activeClass={classes.active} >Shop</MenuLink></li>
                            <li><MenuLink to="/contact" activeClass={classes.active} >Contact</MenuLink></li>
                            <li><MenuLink to="/basket" activeClass={classes.active} >basket</MenuLink></li>

                        </ul>
                    </nav>

                    <form className={classes.search}>
                        <input type="search" />
                        <button ></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HeaderNavigation;