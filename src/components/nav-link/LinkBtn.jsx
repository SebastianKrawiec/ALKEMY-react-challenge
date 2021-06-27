import React, { useContext } from 'react';
import "./linkBtn.css";
import { Link } from "react-router-dom";
import { StyleContext } from '../../context/StyleContext';

const LinkBtn = ({to, label}) => {
    const {handleActive} = useContext(StyleContext)
    return (
        <li className="nav-item">
            <Link className="btn btn--nav" to={to} onClick={handleActive}>{label}</Link>
        </li>
    );
}

export default LinkBtn;
