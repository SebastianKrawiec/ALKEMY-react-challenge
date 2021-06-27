import React,{createContext, useState } from 'react';
import {baseUrl} from "../API";

export const HeroesContext = createContext();

const HeroesContextProvider = ({children}) => {


const [heroes] = useState(
[
    {
        id: 0,
        name: "superman",
        powerstats:{
            intel: 10,
            strength: 20,
            speed: 15
        },
        img:"/images/superman_00.jpg"
    },
    {
        id: 1,
        name: "batman",
        powerstats:{
            intel: 20,
            strength: 15,
            speed: 10
        },
        img:"/images/batman_00.jpg"
    },
    {
        id: 2,
        name: "flash",
        powerstats:{
            intel: 10,
            strength: 15,
            speed: 25
        },
        img:"/images/flash_00.jpg"
    }
])

const [searchedHero, setSearchedHero] = useState();
const [getedHero, setGetedHero] = useState();
const [activeSearch, setActiveSearch] = useState(false);
const [teamHero, setTeamHero] = useState();



const fetchHero = async (search) => {
    try{
        const res = await fetch(`${baseUrl}${search}`)
        const data = await res.json();
        setGetedHero(data)

    }catch(err){
        console.log(err)
    }finally{
        setSearchedHero("");
    }
}


const handleSearch = (e) => {
    e.preventDefault();
    if(!searchedHero){
        alert("please enter a hero name or an id")
    } else {
        fetchHero(searchedHero)
    }
}

const handleInput = (e) => {
    const search = e.target.value;
    setSearchedHero(search);
}

const handleActiveSearch = () => {
    setActiveSearch(!activeSearch);
    setGetedHero(null);
}

const handleTeamHero = async (id) => {
    console.log(id)
   /*  try{
        const res = await fetch(`${baseUrl}${id}`)
        const data = await res.json();
        setTeamHero([...teamHero,data])

    }catch(err){
        console.log(err)
    } */
}

    return (
        <HeroesContext.Provider value={{  
                heroes,
                handleSearch,
                handleInput,
                getedHero,
                searchedHero,
                handleActiveSearch,
                activeSearch,
                handleTeamHero
            }}>
            {children}
        </HeroesContext.Provider>
    );
}

export default HeroesContextProvider;
