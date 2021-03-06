import React from "react";
import Star from "components/Star";
import Button from "components/Button";
import TestimonyAccent from "assets/images/frame.png";
import { Fade } from "react-reveal"; // React animation

export default function Testimoni({ data }) {
	return (
		<Fade bottom>
			<section className="container">
				<div className="row align-items-center">
					<div className="col-auto" style={{ marginRight: 60 }}>
						<div
							className="testimonial-hero"
							style={{ margin: `1.875rem 0 6.25rem 1.875rem` }}>
							<img
								src={data.imageUrl}
								alt={`Testimonial-${data.name}`}
								className="position-absolute"
								style={{ zIndex: 1 }}
							/>
							<img
								src={TestimonyAccent}
								alt={`TestimonialFrame`}
								className="position-absolute"
								style={{ margin: `-30px 0 0 -30px` }}
							/>
						</div>
					</div>
					<div className="col">
						<h4 style={{ marginBottom: 40 }}>{data.name}</h4>
						<Star value={data.rate} width={35} height={35} spacing={4} />
						<h5 className="h2 font-weight-light line-height-2 my-3">
							{data.content}
						</h5>
						<span className="text-gray-500">
							{data.familyName}, {data.familyOccupation}
						</span>
						<div>
							<Button
								className="btn px-5 btn-shadow"
								style={{ marginTop: 50 }}
								hasShadow
								isPrimary
								type="link"
								href={`/testimonial/${data._id}`}>
								Read Their Story
							</Button>
						</div>
					</div>
				</div>
			</section>
		</Fade>
	);
}
