import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import NewsletterSignup from './NewsletterSignup';

const NAVS = [
  { title: 'Home', routes: '' },
  { title: 'Events', routes: 'events' },
  { title: 'News letter', routes: 'newsletter' },
]

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {NAVS.map(route => (
            <li key={route.routes + '111'}>
              <NavLink to={route.routes} className={({ isActive }) => isActive ? classes.active : undefined}>{route.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
