/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/style-prop-object */
import React from 'react';
import Button from 'components/Button';
import formatNumber from 'utils/formatNumber';
import ImageHero from '../assets/images/picture.png';
import FrameHero from '../assets/images/frame.png';
import IconCities from '../assets/icons/ic_cities.svg';
import IconTravelers from '../assets/icons/ic_traveler.svg';
import IconTreasure from '../assets/icons/ic_treasure.svg';
import { Fade } from 'react-reveal'; // React reveal animation

export default function Hero(props) {
	const showMostPick = () => {
		window.scrollTo({
			top: props.refMostPicked.current.offsetTop - 30,
			behavior: 'smooth',
		});
	};
	return (
		<Fade bottom>
			<section className='container pt-4'>
				<div className='row align-items-center'>
					<div className='col-auto pr-5' style={{ width: 530 }}>
						<h1 className='h2 font-weight-bold line-height-1 mb-3'>
							Forget Busy Work, <br /> Start Next Vacation
						</h1>
						<p
							className='mb-5 font-weight-light text-gray-500 w-75'
							style={{ lineHeight: '170%' }}>
							We provide what you need to enjoy your holiday with family. Time
							to make another memorable moments.
						</p>
						<Button
							className='btn px-5 btn-shadow'
							hasShadow
							isPrimary
							onClick={showMostPick}>
							Show Me Now
						</Button>
						<div className='row' style={{ marginTop: 80 }}>
							<div className='col-auto mr-4'>
								<img
									height='36'
									width='36'
									src={IconTravelers}
									alt={`${props.data.travelers} Travelers`}
								/>
								<h6 className='mt-2'>
									{formatNumber(props.data.travelers)}{' '}
									<span className='text-gray-500 font-weight-light'>
										travelers
									</span>
								</h6>
							</div>
							<div className='col-auto mr-4'>
								<img
									height='36'
									width='36'
									src={IconCities}
									alt={`${props.data.cities} Cities`}
								/>
								<h6 className='mt-2'>
									{formatNumber(props.data.cities)}{' '}
									<span className='text-gray-500 font-weight-light'>
										cities
									</span>
								</h6>
							</div>
							<div className='col-auto'>
								<img
									height='36'
									width='36'
									src={IconTreasure}
									alt={`${props.data.treasures} Treasures`}
								/>
								<h6 className='mt-2'>
									{formatNumber(props.data.treasures)}{' '}
									<span className='text-gray-500 font-weight-light'>
										treasures
									</span>
								</h6>
							</div>
						</div>
					</div>

					<div className='col-6 pl-5 position-relative'>
						<div style={{ width: 520, height: 410 }}>
							<img
								src={ImageHero}
								alt='Banner Image'
								className='img-fluid position-absolute'
								style={{ margin: '-30px 0 0 -30px', zIndex: 1 }}
							/>
							<img
								src={FrameHero}
								alt='Frame Banner Image'
								className='img-fluid position-absolute'
								style={{ margin: '0 -15px -15px 0' }}
							/>
						</div>
					</div>
				</div>
			</section>
		</Fade>
	);
}
