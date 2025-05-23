import { NavLink, useRouteLoaderData } from 'react-router';
import classes from './EventsNavigation.module.css';

function EventsNavigation() {
  const token = useRouteLoaderData('root');

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/events" end className={({ isActive }) => isActive ? classes.active : undefined}>All Events</NavLink>
          </li>
          {token && (
            <li>
              <NavLink to="/events/new" className={({ isActive }) => isActive ? classes.active : undefined}>New Event</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
