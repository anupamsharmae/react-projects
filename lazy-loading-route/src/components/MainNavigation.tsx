import { NavLink } from 'react-router';
import classes from './MainNavigation.module.css';

export default function MainNavigation() {

   return (
      <header className={classes.header}>
         <nav>
            <ul>
               <li>
                  <NavLink to='/' end className={({isActive}) => isActive ? classes.active : undefined}>Home</NavLink>
               </li>
               <li>
                  <NavLink to='/posts' className={({isActive}) => isActive ? classes.active : undefined}>Blogs</NavLink>
               </li>
            </ul>
         </nav>
      </header>
   );
}