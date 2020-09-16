import React from 'react';

import Config from '../../config';

import Button from '../Button/Button';
import SocialMedia from '../SocialMedia/SocialMedia';
import Banner from '../Banner/Banner';
import Carousel from './Carousel/Carousel';
import Committees from './Committees/Committees';
import News from './News/News'

function Home (props) {
	return (
		<div className="home-page">
			<Banner />
			<div className="content-section center">
				<h2>The largest Computer Science community at UCLA</h2>
				<p className="subheading">As the largest Computer Science student organization at UCLA and in Southern California, <b>ACM at UCLA</b> welcomes students of all backgrounds, interests, and skill levels to join our community and share in our passion for CS. ACM comprises eight committees — each serves a unique topic and mission. Regardless of major or experience, our events are open to everyone!</p>
				<SocialMedia />
			</div>
			<br />
			<Committees committees={Config.committees} />
			<div className="button-section center">
				{ /** CHANGE THIS LINK TO ABOUT PAGE LATER */ }
				<a href="https://www.facebook.com/uclaacm" target="_blank" rel="noreferrer noopener"><Button text="Learn More" /></a>
			</div><br /><br />

			<div className="content-section center">
				<h2>In the News</h2>
				<News news={Config.news} />
			</div>
			
			<br /><br /><br />

			<div className="full-width blue">
				<div id="sign-up-section" className="content-section">
					<div id="sign-up-left" className="half-width">
						<h2>Want to stay updated on what's going on?</h2>
					</div>
					<div id="sign-up-right" className="half-width">
						<a href="http://eepurl.com/c5pE6P" target="_blank" rel="noreferrer noopener">
							<Button className="tight dark" text="Join our Mailing List" styleClass="tight dark" />
						</a>
					</div>
				</div>
			</div>
			<Carousel images={Config.carousel.images} />
		</div>
	);
}

export default Home;