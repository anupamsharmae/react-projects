import { createContext, useContext, useState } from "react"
import AccordionItem from "./accordion-item";
import AccordionTitle from "./accordion-title";
import AccordionContent from "./accordion-content";

const AccordionCtx = createContext({});

export function useAccordionContext(){
   const ctx = useContext(AccordionCtx);
   if(!ctx){
      throw new Error('Accordion-related components must be wrapped by <Accordion>')
   }
   return ctx;
}

export default function Accordion({ children, className }) {
   const [openItemId, setOpenItemId] = useState(null);

   function toggle(id){
      setOpenItemId(prevId => prevId === id ? null: id )
   }

   const contextValue = {
      openItemId: openItemId,
      toggle
   }
   return (
      <AccordionCtx.Provider value={contextValue}>
         <ul className={className}>
            {children}
         </ul>
      </AccordionCtx.Provider>
   )
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;