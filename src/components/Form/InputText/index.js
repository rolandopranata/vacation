import React, { useState } from "react";
import propTypes from "prop-types";

import "./index.scss";

export default function InputText(props) {
	// Destructure object props
	const {
		value,
		type,
		placeholder,
		name,
		prepend,
		append,
		outerClassName,
		inputClassName,
		errorResponse,
	} = props;

	// Create useState if Error and setHasError
	const [HasError, setHasError] = useState(null);

	// Create pattern email and phone using regex
	let pattern = "";
	if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Create patter email
	if (type === "tel") pattern = "[0-9]*"; // Create pattern phone

	// Function for get input user
	const onChange = (event) => {
		const target = {
			target: {
				name: name,
				value: event.target.value,
			},
		};

		// Check email again if pattern has validation success
		if (type === "email") {
			if (!pattern.test(event.target.value)) setHasError(errorResponse);
			else setHasError(null);
		}

		// Check phone again if pattern has validation success
		if (type === "tel") {
			if (event.target.validity.valid) props.onChange(target);
		} else {
			props.onChange(target);
		}
	};

	return (
		<div className={["input-text mb-3", outerClassName].join(" ")}>
			<div className="input-group">
				{prepend && (
					<div className="input-group-prepend bg-gray-900">
						<span className="input-group-text">{prepend}</span>
					</div>
				)}
				<input
					name={name}
					type={type}
					pattern={pattern}
					className={["form-control", inputClassName].join(" ")}
					value={value}
					placeholder={placeholder}
					onChange={onChange}
				/>
				{append && (
					<div className="input-group-append bg-gray-900">
						<span className="input-group-text">{append}</span>
					</div>
				)}
			</div>
			{HasError && <span className="error-helper">{HasError}</span>}
		</div>
	);
}

// Default InputText props
InputText.defaultProps = {
	type: "text",
	pattern: "",
	placeholder: "Please type here...",
	errorResponse: "Please match the requested format.",
};

// Add component InputTexr props
InputText.propTypes = {
	name: propTypes.string.isRequired,
	value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
	onChange: propTypes.func.isRequired,
	prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
	append: propTypes.oneOfType([propTypes.number, propTypes.string]),
	type: propTypes.string,
	placeholder: propTypes.string,
	outerClassName: propTypes.string,
	inputClassName: propTypes.string,
};
