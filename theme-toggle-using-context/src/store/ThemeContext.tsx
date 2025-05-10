import { createContext, useState } from "react";

export const ThemeContext = createContext({
   theme: 'dark',
   toggleTheme: () => {}
})

export default function ThemeContextProvider({children}:{children:React.ReactNode}){
   const [theme, setTheme] = useState('dark');

   const handleTheme = () => {
      console.log('CLICKED----');
      setTheme((prevTheme) => {
         console.log(prevTheme === 'dark' ? 'light' : 'dark');
         return prevTheme === 'dark' ? 'light' : 'dark';
      })
   }

   const ctxProvider = {
      theme: theme,
      toggleTheme: handleTheme
   }

   return (
      <ThemeContext.Provider value={ctxProvider}>
         {children}
      </ThemeContext.Provider>
   )
}