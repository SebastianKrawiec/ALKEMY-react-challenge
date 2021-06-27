import React from 'react';
import "./acordeonBtn.css";


const AcordeonBtn = ({title,btnState,handleAcordeon, heroStats}) => {

    const active = btnState;
    /* console.log(heroStats) */

    return (
			<div className={`acordeon-container ${active ? "acordeon-active" : ""}`}>
				<button className="btn btn--acordeon" onClick={handleAcordeon}>
					<h2 className="acordeonBtn--title">{title}</h2>
				</button>

				<figcaption className={`card-content ${active ? "card-content--active" : ""}`}>
                <table className="table">
                        <thead>
                            <tr>
                                <td>stat</td>
                                <td>value</td>
                            </tr>
                        </thead>
                        <tbody>
                            { Object.keys(heroStats).map( (keyname,index) => {
                                return (
                                <tr key={keyname+index}>
                                    <td>{keyname}</td>
                                    <td>{heroStats[keyname]}</td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                </figcaption>
			</div>
		);
}

export default AcordeonBtn;