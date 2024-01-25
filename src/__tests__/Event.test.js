/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
// src/__tests__/Event.test.js

import { render } from '@testing-library/react';
import mockData from '../mock-data';
import Event from '../components/Event';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';


describe('<Event /> component', () => {
    let EventComponent;
    const event = mockData[0];
    beforeEach(() => {
        EventComponent = render(<Event event={event} />);
    });
    test('has event title', () => {
        expect(EventComponent.queryByText(event.summary)).toBeInTheDocument();
    });

    test('has event created time', () => {
        expect(EventComponent.queryByText(event.created)).toBeInTheDocument();
    });

    test('has event location', () => {
        expect(EventComponent.queryByText(event.location)).toBeInTheDocument();
    });

    test('has button show details', () => {
        expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
    });

    test('by default, events details section should be hidden', () => {
        const details = EventComponent.container.querySelector('.details');
        expect(details).not.toBeInTheDocument();
    });

    test('shows details section, when user clicks show details button', async() => {
        const user = userEvent.setup();
        const button = EventComponent.queryByText('Show Details');
        await user.click(button);
        const details = EventComponent.container.querySelector('.details');
        expect(details).toBeInTheDocument();
    });

    test('hide details section, when user clicks hide details button', async() => {
        const user = userEvent.setup();
        const showButton = EventComponent.queryByText('Show Details');
        const hideButton = EventComponent.queryByText('Hide Details');
        user.click(hideButton);
        expect(showButton).toBeInTheDocument();
        expect(hideButton).not.toBeInTheDocument();

    })

});