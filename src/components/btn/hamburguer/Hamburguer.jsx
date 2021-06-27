import React, {useContext} from 'react';
import "./hamburguer.css";
import { StyleContext } from '../../../context/StyleContext';

const Hamburguer = () => {


    const { active,handleActive } = useContext(StyleContext);

    return (
        <button className={`btn btn--hamburguer ${active ? "btn-active" : ""}`} onClick={handleActive}>
            <div className="hamburguer-icon">
                <span className="icon-fr"></span>
            </div>
        </button>
    );
}

export default Hamburguer;
