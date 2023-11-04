import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbo";
import Card from "./card";
import Footer from "./footer";

const Home = () => {
	return (
		<><div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="card-deck">
				<Card title="Card 1" text="ksudbfv" />
				<Card title="Card 2" text="ksudbfv" />
				<Card title="Card 3" text="ksudbfv" />
				<Card title="Card 4" text="ksudbfv" />
			</div>
		</div><Footer /></>
	);
};

export default Home;
