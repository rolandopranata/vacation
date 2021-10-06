import React from 'react';
import propTypes from 'prop-types';
import './index.scss';

export default function Star({ className, value, height, width, spacing }) {
	const decimals = Number(value) % 1;
	const star = [];
	let leftPost = 0;

	// Looping star with value number
	for (let i = 0; i < 5 && i < value - decimals; i++) {
		leftPost = leftPost + width;
		star.push(
			<div
				className='star'
				key={`star-${i}`}
				style={{
					left: i * width,
					height: height,
					width: width,
					marginRight: spacing,
				}}></div>
		);
	}

	// Check star with value decimals
	if (decimals > 0 && value <= 5) {
		star.push(
			<div
				className='star'
				// eslint-disable-next-line no-undef
				key={'starWithDecimal'}
				style={{
					left: leftPost,
					height: height,
					width: decimals * width - spacing,
				}}></div>
		);
	}

	// Star placeholder
	const starPlaceholder = [];
	// Looping star placeholder with value number
	for (let i = 0; i < 5; i++) {
		star.push(
			<div
				className='star placeholder'
				key={`starPlaceholder-${i}`}
				style={{
					left: i * width,
					height: height,
					width: width,
					marginRight: spacing,
				}}></div>
		);
	}

	return (
		<>
			<div className={['stars', className].join('')} style={{ height: height }}>
				{starPlaceholder}
				{star}
			</div>
		</>
	);
}

Star.propTypes = {
	className: propTypes.string,
	value: propTypes.number,
	width: propTypes.number,
	height: propTypes.number,
	spacing: propTypes.number,
};
