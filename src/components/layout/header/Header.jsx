import React from 'react';
import "./header.css";
import NavBar from "../../nav/NavBar";
import Hamburguer from '../../btn/hamburguer/Hamburguer';
import SearchBtn from '../../btn/handleSearch/SearchBtn';

const Header = () => {

    return (
        <header className="header">
            <Hamburguer/>
            <NavBar />
            <SearchBtn/>
        </header>
    );
}

export default Header;