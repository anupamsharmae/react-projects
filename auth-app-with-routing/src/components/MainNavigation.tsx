import { Form, NavLink, useRouteLoaderData } from 'react-router';
import classes from './MainNavigation.module.css';
import NewsletterSignup from './NewsletterSignup';

const NAVS = [
  { title: 'Home', routes: '' },
  { title: 'Events', routes: 'events' },
  { title: 'News letter', routes: 'newsletter' },
  // { title: 'Authentication', routes: 'auth?mode=login' },
]

function MainNavigation() {
  const token = useRouteLoaderData('root');
  console.log('token----', token);

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {NAVS.map(route => (
            <li key={route.routes + '111'}>
              <NavLink to={route.routes} className={({ isActive }) => isActive ? classes.active : undefined}>{route.title}</NavLink>
            </li>
          ))}
          {!token && (
            <li>
              <NavLink to='auth?mode=login' className={({ isActive }) => isActive ? classes.active : undefined}>Login</NavLink>
            </li>
          )}
          {token && (
            <li>
              <Form action="/logout" method='post'>
                <button>Logout</button>
              </Form>
            </li>
          )}
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
