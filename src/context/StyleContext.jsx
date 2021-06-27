import React, {createContext,useState} from 'react';

export const StyleContext = createContext();

const StyleContextProvider = ({children}) => {
    
    const [active, setActive] = useState(false);


    const handleActive = () => {
        setActive(!active);
    }
    
    
    return (
        <StyleContext.Provider value={ {active,handleActive} }>
            {children}
        </StyleContext.Provider>
    );
}

export default StyleContextProvider;