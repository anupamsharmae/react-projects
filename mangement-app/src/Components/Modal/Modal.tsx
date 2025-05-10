import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "../Button";

export default function Modal({ children, ref }: { children: React.ReactNode, ref:React.ReactObject<unknown> }) {
   const dialogRef = useRef<HTMLDialogElement>(null);
   useImperativeHandle(ref, ()=>{
      return {
         open(){
            dialogRef.current?.showModal()
         }
      }
   })

   return createPortal(
      <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
         {children}
         <form method="dialog" className="text-right mt-4">
            {/* <button type="submit" className="">Close</button> */}
            <Button type="submit">Close</Button>
         </form>
      </dialog>,
      document.getElementById('modal-root') as HTMLElement
   );
}