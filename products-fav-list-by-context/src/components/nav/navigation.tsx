import { NavLink } from "react-router";
import classes from './navigation.module.css';


export default function Navigation() {
   return (
      <header className={classes['main-header']}>
         <nav>
            <ul>
               <li>
                  <NavLink to="/" className={({ isActive }) => isActive ? classes.active : undefined}>All Products</NavLink>
               </li>
               <li>
                  <NavLink to="/favorites" className={({ isActive }) => isActive ? classes.active : undefined}>Favorites</NavLink>
               </li>
            </ul>
         </nav>
      </header>
   )
}