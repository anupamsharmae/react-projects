
export default function CustomInput({label, invalid, ...props}:{label:string; invalid:boolean; [x:string]:unknown}){

   const labelClass = `block mb-2 text-xs font-bold tracking-wide uppercase ${invalid ? "text-red-500" : "text-gray-500"}`;
   const inputClass = `w-full px-3 py-2 leading-tight border rounded shadow ${invalid ? "text-red-500 bg-red-100 border-red-500" : "text-gray-700 bg-stone-300 border-gray-300"}`;
   return(
      <>
         <label className={labelClass}>{label}</label>
         <input className={inputClass} {...props}/>
      </>
   )
}