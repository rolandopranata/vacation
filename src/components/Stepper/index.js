import React, { useState } from "react";
import propTypes from "prop-types";

export default function Stepper(props) {
	const { steps, initialStep } = props;
	const stepKeys = Object.keys(steps); // Convert steps from object to array

	// Check if steps behind the current steps or still on steps one
	const [CurrentStep, setCurrentStep] = useState(
		stepKeys.indexOf(initialStep) > -1 ? initialStep : stepKeys[0]
	);

	const totalSteps = steps.length; // all steps
	const indexStep = stepKeys.indexOf(CurrentStep); // current Steps active

	// Function handle steps previous
	const prevStep = () => {
		if (+indexStep > 0) setCurrentStep(stepKeys[indexStep - 1]);
	};

	// Function handle if steps is active next step
	const nextStep = () => {
		if (+indexStep < totalSteps) setCurrentStep(stepKeys[indexStep + 1]);
	};

	return <>{props.children(prevStep, nextStep, CurrentStep, steps)}</>;
}

Stepper.propTypes = {
	data: propTypes.object.isRequired,
	initialStep: propTypes.string,
};
