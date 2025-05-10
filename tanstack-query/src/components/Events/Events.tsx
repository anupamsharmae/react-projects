import { Link, Outlet } from 'react-router';

import Header from '../Header.jsx';
import EventsIntroSection from './EventIntroSection';
import FindEventSection from './FindEventSection';
import NewEventsSection from './NewEventsSection';

export default function Events() {
  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events/new" className="button">
          New Event
        </Link>
      </Header>
      <main>
        <EventsIntroSection />
        <NewEventsSection />
        <FindEventSection />
      </main>
    </>
  );
}
