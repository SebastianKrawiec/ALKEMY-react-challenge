import React from "react";
import "./input.css";


const Input = ({label,type,handleInput,inputValue}) => {
    return (
			<div className="input-container">
				<input type={type} className="input-field" id={label} onChange={handleInput} value={inputValue}/>
				<label className="input-label" htmlFor={label}>
					{label}		
				</label>
			</div>
		);
}

export default Input