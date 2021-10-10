import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function Button(props) {
	// Preparing button component
	const className = [props.className];
	if (props.isPrimary) className.push("btn-primary");
	if (props.isLarge) className.push("btn-lg");
	if (props.isSmall) className.push("btn-sm");
	if (props.isBlock) className.push("btn-block");
	if (props.isShadow) className.push("btn-shadow");

	// Create condition if button clicked
	const onClick = () => {
		if (props.onClick) props.onClick();
	};

	// Check button disabled
	if (props.isDisabled || props.isLoading) {
		if (props.isDisabled) className.push("disabled");
		return (
			// Add loading animation
			<span className={className.join(" ")} style={props.style}>
				{props.isLoading ? (
					<>
						<span className="spinner-border spinner-border-sm mx-5"></span>
						<span className="sr-only">Loading...</span>
					</>
				) : (
					props.children
				)}
			</span>
		);
	}

	// Render button component
	if (props.type === "link") {
		if (props.isExternal) {
			// Condition if link external
			return (
				// eslint-disable-next-line react/jsx-no-target-blank
				<a
					href={props.href}
					className={className.join(" ")}
					style={props.style}
					target={props.target === "_blank" ? "_blank" : undefined}
					rel={props.target === "_blank" ? "noopener noreferrer" : undefined}>
					{props.children}
				</a>
			); // children digunakan untuk mendifinisikan isi sebuah component
		} else {
			// Condition if link internal
			return (
				<Link
					to={props.href}
					className={className.join(" ")}
					style={props.style}
					onClick={onClick}>
					{props.children}
				</Link>
			);
		}
	}
	// Return button component
	return (
		<button
			className={className.join(" ")}
			style={props.style}
			onClick={onClick}>
			{props.children}
		</button>
	);
}

// Create Button Component Using propstypes.
Button.prototype = {
	type: propTypes.oneOf(["button", "link"]),
	onClick: propTypes.func,
	href: propTypes.string,
	target: propTypes.string,
	className: propTypes.string,
	isDisabled: propTypes.bool,
	isPrimary: propTypes.bool,
	isExternal: propTypes.bool,
	isLoading: propTypes.bool,
	isSmall: propTypes.bool,
	isLarge: propTypes.bool,
	isBlock: propTypes.bool,
	hasShadow: propTypes.bool,
};
