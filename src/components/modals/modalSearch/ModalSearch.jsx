import React,{useContext} from 'react';
import {HeroesContext} from "../../../context/HeroesContext";
import "./modalSearch.css";

import Input from '../../inputs/Input';
import SimpleBtn from '../../btn/simpleBtn/SimpleBtn';
import Card from "../../card/Card";

const ModalSearch = () => {

    const { handleSearch,
            handleInput,
            getedHero,
            searchedHero,
            activeSearch,
            handleActiveSearch} = useContext(HeroesContext);

    
    return (
        <section className={`modal--search ${activeSearch ? "activeSearch" : ""}`} >
            <form className="modal--search__form" onSubmit={handleSearch}>
                <Input label="Search your hero by name or id" type="text" handleInput={handleInput} inputValue={searchedHero}/>
                <SimpleBtn text="search" className="btn--simple--search"/>
            </form>
            <button className="btn btn--close" onClick={handleActiveSearch}>X</button>

            { getedHero && 
            <ul className="search-container">
                <li>
                    <Card cardHero={getedHero} handleActive={handleActiveSearch}/>
                </li>
            </ul>
            }
        </section>
    );
}

export default ModalSearch;
