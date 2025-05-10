import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";


export default function Modal({ ref, title, actions }: { ref: any, title: string; actions: unknown }) {
   const dialog = useRef<HTMLDialogElement>(null);

   useImperativeHandle(ref, () => {
      return {
         open: () => {
            dialog.current?.showModal();
         },
      };
   });
   return createPortal(
      <dialog id="modal" ref={dialog}>
         <h2>{title}</h2>
         <Cart />
         <form method="dialog" id="modal-actions">
            {actions}
         </form>
      </dialog>,
      document.getElementById('modal') as HTMLElement
   );
}