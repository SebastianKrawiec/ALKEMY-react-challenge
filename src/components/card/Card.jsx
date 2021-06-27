import React,{useState,useContext} from 'react';
import { Link } from "react-router-dom";
import "./card.css";
import "../btn/simpleBtn/simpleBtn.css";

import SimpleBtn from "../btn/simpleBtn/SimpleBtn";
import AcordeonBtn from "../btn/acordeon/AcordeonBtn";
import { HeroesContext } from '../../context/HeroesContext';


const Card = ({cardHero,handleActive}) => {



const [activeAcordeon, setActiveAcordeon] = useState(false);
const [handleTeamHero] = useContext(HeroesContext)

const handleAcordeon = () => {
    setActiveAcordeon(!activeAcordeon);
}


    return (
        <article className="card">
            <span className="hero-name">{cardHero.name}</span>
            <figure className="card-img__container">
                <img src={cardHero.image.url} alt="hero" className="card-img" />
            </figure>
            <ul className="card-list">
                <li className="card-item">
                    <AcordeonBtn heroStats={cardHero.powerstats} title={activeAcordeon ? "see less" : "see more"} btnState={activeAcordeon} handleAcordeon={handleAcordeon}/>
                </li>
                <li className="card-item">
                    <Link className={`btn btn--know ${!activeAcordeon ? "btn--know-active" : ""}`} to={`/heroe-detail/${cardHero.id}`} onClick={handleActive}>know hero</Link>             
                </li>
            </ul>
            <SimpleBtn text="remove" handleHero={handleTeamHero} />
        </article>
    );
}

export default Card;
