import React, { useState } from "react";
import propTypes from "prop-types";

export default function Stepper(props) {
	const { steps, initialStep } = props;
	const stepsKeys = Object.keys(steps); // Convert steps from object to array

	// Check if steps behind the current steps or still on steps one
	const [CurrentStep, setCurrentStep] = useState(
		stepsKeys.indexOf(initialStep) > -1 ? initialStep : stepsKeys[0]
	);

	const totalStep = stepsKeys.length; // all steps
	const indexStep = stepsKeys.indexOf(CurrentStep); // current Steps active

	// Function handle steps previous
	function prevStep() {
		if (+indexStep > 0) setCurrentStep(stepsKeys[indexStep - 1]);
	}

	// Function handle if steps is active next step
	function nextStep() {
		if (+indexStep < totalStep) setCurrentStep(stepsKeys[indexStep + 1]);
	}

	return <>{props.children(prevStep, nextStep, CurrentStep, steps)}</>;
}

Stepper.propTypes = {
	data: propTypes.object.isRequired,
	initialStep: propTypes.string,
};

export { default as Numbering } from "./Numbering";
export { default as Meta } from "./Meta";
export { default as Controller } from "./Controller";
export { default as MainContent } from "./MainContent";
