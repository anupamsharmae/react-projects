export default function Input({ isTextArea, label, ref, ...props }: { isTextArea?: boolean, label:string, ref:React.RefObject<T>, [x:string]:unknown }) {

   const inputClass = `w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600`;
   console.log(isTextArea);
   return (
      <p className="flex flex-col gap-2 my-4">
         <label className="text-sm font-bold uppercase text-stone-500" htmlFor="">{label}</label>
         {isTextArea ? <textarea ref={ref} className={inputClass} {...props} /> : <input ref={ref} className={inputClass} {...props} />}
      </p>
   )
}