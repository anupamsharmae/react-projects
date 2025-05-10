import { useEffect, useRef } from "react"
import { createPortal } from "react-dom";

export default function Modal({ open, children, onClose }: { onClose: () => void; open: boolean; children: React.ReactNode }) {
   const dialog = useRef<HTMLDialogElement>(null);

   useEffect(() => {
      if (open) {
         dialog.current?.showModal();
      } else {
         dialog.current?.close();
      }
   }, [open])

   return createPortal(
      <dialog ref={dialog} className="modal" onClose={onClose}>
         {open && children}
      </dialog>,
      document.getElementById('modal') as HTMLElement
   )
}