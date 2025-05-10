import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
   const dialogRef = useRef<HTMLDialogElement | null>(null);

   useEffect(() => {
      const dialog = dialogRef.current;
      dialog?.showModal();

      return () => dialog?.close();
   }, [])

   return createPortal(
      <dialog className="modal" ref={dialogRef} onClose={onClose}>
         {children}
      </dialog>,
      document.getElementById('modal') as HTMLElement
   )
}