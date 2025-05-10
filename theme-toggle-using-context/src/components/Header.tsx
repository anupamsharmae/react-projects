import { use } from "react"
import { ThemeContext } from "../store/ThemeContext"

export default function Header() {
   const { toggleTheme } = use(ThemeContext);
   return (
      <header>
         <h1>Demo Website</h1>
         <button onClick={toggleTheme}>Toggle Theme</button>
      </header>
   )
}