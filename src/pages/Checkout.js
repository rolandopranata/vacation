import React, { Component } from 'react';
import { Fade } from 'react-reveal';

import Header from 'parts/Header';
import Button from 'components/Button';
import { connect } from 'react-redux';

import Stepper, {
	Numbering,
	Meta,
	MainContent,
	Controller,
} from 'components/Stepper';

import BookingInformation from 'parts/Checkout/BookingInformation';
import Payment from 'parts/Checkout/Payment';
import Completed from 'parts/Checkout/Completed';

import ItemDetails from 'json/itemDetails.json';

class Checkout extends Component {
	// Create blueprint data
	state = {
		data: {
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			proofPayment: '',
			bankName: '',
			bankHolder: '',
		},
	};

	// Change data with user input
	onChange = (event) => {
		this.setState({
			data: {
				...this.state.data,
				[event.target.name]: event.target.value,
			},
		});
	};

	// For make page scroll from top
	componentDidMount() {
		window.scroll(0, 0);
	}

	render() {
		const { data } = this.state;
		const { checkout } = this.props;

		if (!checkout) {
			return (
				<div className='container' style={{ minWidth: '100%' }}>
					<div
						className='row align-items-center justify-content-center text-center'
						style={{
							height: '100vh',
							fontSize: '1.8em',
						}}>
						<div className='col-4'>
							Choice your bedroom before!
							<div>
								<Button className='btn mt-4' type='link' href='/' isLight>
									Back{' '}
								</Button>{' '}
							</div>{' '}
						</div>{' '}
					</div>{' '}
				</div>
			);
		}

		// Create templeting data Checkout page
		const steps = {
			bookingInformation: {
				title: 'Booking Information',
				description: 'Please fill up the blank below',
				content: (
					<BookingInformation
						data={data}
						checkout={checkout}
						ItemDetails={ItemDetails}
						onChange={this.onChange}
					/>
				),
			},
			payment: {
				title: 'Payment',
				description: 'Kindly follow the instruction below.',
				content: (
					<Payment
						data={data}
						ItemDetails={ItemDetails}
						checkout={checkout}
						onChange={this.onChange}
					/>
				),
			},
			completed: {
				title: 'Yay! Completed',
				description: null,
				content: <Completed />,
			},
		};

		return (
			<>
				<Header isCentered />
				<Stepper steps={steps} initialStep='bookingInformation'>
					{' '}
					{(prevStep, nextStep, CurrentStep, steps) => (
						<>
							<Numbering
								data={steps}
								current={CurrentStep}
								style={{ marginBottom: 50 }}
							/>
							<Meta data={steps} current={CurrentStep} />{' '}
							<MainContent data={steps} current={CurrentStep} />
							{CurrentStep === 'bookingInformation' && (
								<Controller>
									{' '}
									{data.firstName !== '' &&
										data.lastName !== '' &&
										data.email !== '' &&
										data.phone !== '' && (
											// If complete
											<Fade>
												<Button
													className='btn mb-3'
													type='button'
													isBlock
													isPrimary
													hasShadow
													onClick={nextStep}>
													Continue to Book{' '}
												</Button>{' '}
											</Fade>
										)}{' '}
									<Button
										className='btn mb-4'
										type='link'
										isBlock
										isLight
										href={`/properties/${checkout._id}`}>
										Cancel{' '}
									</Button>{' '}
								</Controller>
							)}
							{CurrentStep === 'payment' && (
								<Controller>
									{' '}
									{data.proofPayment !== '' &&
										data.bankName !== '' &&
										data.bankHolder !== '' && (
											// If complete
											<Fade>
												<Button
													className='btn mb-3'
													type='button'
													isBlock
													isPrimary
													hasShadow
													onClick={nextStep}>
													Continue to Book{' '}
												</Button>{' '}
											</Fade>
										)}{' '}
									<Button
										className='btn mb-4'
										type='button'
										isBlock
										isLight
										onClick={prevStep}>
										Cancel{' '}
									</Button>{' '}
								</Controller>
							)}
							{CurrentStep === 'completed' && (
								<Controller>
									<Button
										className='btn mb-4'
										type='link'
										isBlock
										isPrimary
										hasShadow
										href=''>
										Back to Home{' '}
									</Button>{' '}
								</Controller>
							)}{' '}
						</>
					)}{' '}
				</Stepper>{' '}
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	checkout: state.checkout,
});

export default connect(mapStateToProps)(Checkout);
