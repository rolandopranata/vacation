import React from 'react';
import { render } from '@testing-library/react';
import Breadcrumb from './index';
import { BrowserRouter as Router } from 'react-router-dom';

// Setup build testing
const setup = () => {
	const breadcrumblist = [
		{ pageTitle: 'Home', pageHref: '' },
		{ pageTitle: 'Home', pageHref: '' },
	];

	// Create Breadcrumb testing component
	const { container } = render(
		<Router>
			<Breadcrumb data={breadcrumblist}></Breadcrumb>
		</Router>
	);

	const breadcrumb = container.querySelector(`.breadcrumb`); // select breadcrumb component

	return breadcrumb;
};

test('Should have <ol> component with className .breadcrumnb and have text Home & House Details.', () => {
	const { breadcrumb } = setup();

	expect(breadcrumb).toBeInTheDocument();
	expect(breadcrumb).toBeInTheDocument('Home');
	expect(breadcrumb).toBeInTheDocument('House Details');
});
