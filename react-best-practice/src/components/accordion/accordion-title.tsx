import { useAccordionContext } from "./accordion"

export default function AccordionTitle({ id, className, children }) {
   const { toggle } = useAccordionContext();

   return <h3 className={className} onClick={() => toggle(id)}>{children}</h3>
}