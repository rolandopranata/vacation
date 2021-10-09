import React, { Component } from "react";
import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import ItemDetails from "json/itemDetails.json";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Testimoni from "parts/Testimoni";
import Footer from "parts/Footer";
import { Fade } from "react-reveal";

export default class DetailsPage extends Component {
	// Make positon component in window
	componentDidMount() {
		window.title = "Details Page";
		window.scrollTo(0, 0);
	}

	render() {
		// Created component breadcrumb
		const breadcrumb = [
			{ pageTitle: "Home", pageHref: "" },
			{ pageTitle: "House Details", pageHref: "" },
		];

		return (
			<>
				<Header {...this.props} />
				<PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
				<FeaturedImage data={ItemDetails.imageUrls} />
				<section className="container">
					<div className="row">
						<div className="col-7 pr-5">
							<Fade bottom>
								<PageDetailDescription data={ItemDetails} />
							</Fade>
						</div>
						<div className="col-5">
							<Fade bottom>
								<BookingForm itemDetails={ItemDetails} />
							</Fade>
						</div>
					</div>
				</section>

				<Categories data={ItemDetails.categories}></Categories>
				<Testimoni data={ItemDetails.testimonial}></Testimoni>
				<Footer />
			</>
		);
	}
}
