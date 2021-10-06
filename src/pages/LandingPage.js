import React, { Component } from 'react';
import landingPage from '../json/landingPage.json';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';
import Categories from 'parts/Categories';
import Testimoni from 'parts/Testimoni';

export default class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.refMostPicked = React.createRef();
	}
	render() {
		return (
			<>
				<Header {...this.props} />
				<Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
				<MostPicked
					refMostPicked={this.refMostPicked}
					data={landingPage.mostPicked}
				/>
				<Categories
					refMostPicked={this.refMostPicked}
					data={landingPage.categories}
				/>
				<Testimoni data={landingPage.testimonial}></Testimoni>
			</>
		);
	}
}
