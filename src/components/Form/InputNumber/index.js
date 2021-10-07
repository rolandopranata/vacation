import React, { useState } from 'react';
import propTypes from 'prop-types';
import './index.scss';

export default function Number(props) {
	const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlural } =
		props; // Component for inputFile
	const [inputValue, setInputValue] = useState(`${prefix}${value}${suffix}`); // Set state for inputValue

	// OnChange dipilah karena dia event yang bersifat bisa memuat berbagai interaksi dari user.
	const onChange = (e) => {
		let value = String(e.target.value);
		if (prefix) value = value.replace(prefix);
		if (suffix) value = value.replace(suffix);

		const patternNumeric = new RegExp('[0-9]*'); // Check value with regex
		const isNumeric = patternNumeric.test(value); // set value

		// Check if isNumeric and value > 0 and < 30, props onChange will be running
		if (isNumeric && +value <= max && +value >= min) {
			props.onChange({
				target: {
					name,
					value: +value,
				},
			});
			setInputValue(
				`${prefix}${value}${suffix}${isSuffixPlural && value > 1 ? 's' : ''}`
			);
		}
	};

	// Check if user click minus button, value will be decrement
	const minus = () => {
		value > min &&
			onChange({
				target: {
					name,
					value: +value - 1,
				},
			});
	};

	// Check if user click plus button, value will be increment
	const plus = () => {
		value > min &&
			onChange({
				target: {
					name,
					value: +value + 1,
				},
			});
	};
	return (
		<div className={['input-number mb-3', props.outerClassName].join(' ')}>
			<div className='input-group'>
				<div className='input-group-prepend'>
					<span className='input-group-text minus' onClick={minus}>
						-
					</span>
				</div>
				<input
					min={min}
					max={max}
					name={name}
					pattern='[0-9]*'
					className='form-control'
					placeholder={placeholder ? placeholder : '0'}
					value={String(inputValue)}
					onChange={onChange}
				/>
				<div className='input-group-sppend'>
					<span className='input-group-text plus' onClick={plus}>
						+
					</span>
				</div>
			</div>
		</div>
	);
}

// Declaration default props
Number.defaultProps = {
	min: 1,
	max: 1,
	prefix: '',
	suffix: '',
};

// Create proptypes
Number.propTypes = {
	value: propTypes.oneOfType([propTypes.string, propTypes.number]),
	onChange: propTypes.func,
	placeholder: propTypes.string,
	outerClassName: propTypes.string,
	isSuffixPlural: propTypes.bool,
};
