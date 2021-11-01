import React from 'react';
import Button from 'components/Button';
import { Fade } from 'react-reveal'; // React animation

export default function MostPicked(props) {
	return (
		<section className='container' ref={props.refMostPicked}>
			<Fade bottom>
				<h4 className='mb-3'>Most Picked</h4>
				<div className='container-grid'>
					{props.data.map((item, index) => {
						return (
							<div
								key={`Mostpicked-${index}`}
								className={`item column-4${index === 0 ? ' row-2' : ' row-1'}`}>
								<Fade bottom delay={500 * index}>
									<div className='card card-featured'>
										<div className='tag'>
											${item.price}
											<span className='font-weight-light'>
												{' '}
												per {item.unit}
											</span>
										</div>
										<figure className='img-wrapper'>
											<img
												className='img-cover'
												src={item.imageId[0] ? item.imageId[0].imageurl : ''}
												alt={item.title}
											/>
										</figure>
										<div className='meta-wrapper'>
											<Button
												className='stretched-link d-block text-white'
												type='link'
												href={`/properties/${item._id}`}>
												<h5>{item.title}</h5>
											</Button>
											<span>
												{item.city}, {item.country}
											</span>
										</div>
									</div>
								</Fade>
							</div>
						);
					})}
				</div>
			</Fade>
		</section>
	);
}
