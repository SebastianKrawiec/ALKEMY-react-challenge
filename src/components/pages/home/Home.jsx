import React, { useContext,useState } from 'react';
import "./home.css"
import Card from '../../card/Card';

import {HeroesContext} from "../../../context/HeroesContext";

const Home = () => {

	const [loading] = useState(false);
	const {heroes} = useContext(HeroesContext);



    return (
			<section className="home">
				{loading ? (
					<>
						<div className="home-title__container">
							<h2 className="home-title">Team: 3/6</h2>
							<div className="icon-container">icon</div>
						</div>
						<p>please sign in and start adding heroes</p>
					</>
				) : (
					<>
						<div className="home-title__container">
							<h2 className="home-title">Team: 3/6</h2>
							<div className="icon-container">icon</div>
						</div>
						<div className="carrousel-container">
							<ul className="card-slider">
								
								{/* {heroes.map((hero, index) => {
									return (
										<li key={hero + index}>
											<Card cardHero={hero} />
										</li>
									);
								})} */}
							</ul>
						</div>
					</>
				)}
			</section>
		);
}

export default Home;
