import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, className }) {
   const dialogRef = useRef(null);
   const cssClass = `modal ${className ? className : ''}`

   useEffect(() => {
      const modal = dialogRef.current! as HTMLDialogElement;
      if (open) {
         dialogRef.current?.showModal()
      }

      return () => modal.close()
   }, [open])

   return createPortal(
      <dialog className={cssClass} ref={dialogRef}>{children}</dialog>,
      document.getElementById('modal') as HTMLElement
   )
}