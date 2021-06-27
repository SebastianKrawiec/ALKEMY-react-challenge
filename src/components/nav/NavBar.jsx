import React,{useContext} from 'react';
import LinkBtn from "../nav-link/LinkBtn";
import "./navBar.css";
import { StyleContext } from '../../context/StyleContext';

const NavBar = () => {

    const {active} = useContext(StyleContext)

    return (
            <nav className={`nav--header ${active ? "active" : ""}`}>
                <ul className="nav-list">
                    <LinkBtn to="/" label="home"/>
                    <LinkBtn to="/log-in" label="log in"/>
                    <LinkBtn to="/heroes-list" label="all heroes"/>
                </ul>
            </nav>
    )
}

export default NavBar;
