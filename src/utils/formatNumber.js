/* eslint-disable import/no-anonymous-default-export */
export default (number) => {
	// API Format dari browser
	const numberFormatter = new Intl.NumberFormat("id-ID");
	return numberFormatter.format(number);
};
