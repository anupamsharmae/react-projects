import { use } from "react";
import { ThemeContext } from "../store/ThemeContext";
import Header from "./Header";

export default function Page() {
   const { theme } = use(ThemeContext);
   console.log('pages------- ', theme);
   return (
      <div id="app" className={theme}>
         <Header />

         <article>
            <h2>React Course</h2>
            <p>
               A course that teaches you React from the ground up and in great depth!
            </p>
         </article>
      </div>
   )
}