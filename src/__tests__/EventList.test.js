/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
// src/__tests__/EventList.test.js

import { render } from '@testing-library/react';
import EventList from '../components/EventList';
import { getEvents } from '../api';

describe('<EventList /> component', () => {
    test('has an element with "list" role', () => {
      const EventListComponent = render(<EventList />);
      expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
    });
    test('renders correct number of events', async () => {
      const EventListComponent = render(<EventList />);
      const allEvents = await getEvents();
      EventListComponent.rerender(<EventList events={allEvents} />);
      expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
    });
  });