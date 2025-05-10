export default function Button({ children, ...props }: { children: React.ReactNode, [x:string]:unknown }) {

   const buttonClass= `px-4 py-2 text-xs md:text-base rounded bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 cursor-pointer`;

   return <button type="button" className={buttonClass} {...props}>
      {children}
   </button>
}