function Button({ children, mode = 'filled', className = '', ...props }: { children: React.ReactNode, mode?: string, className?: string, [x: string]: unknown }) {
   let cssClassName = `button ${mode}-button`;


   if (className) {
      cssClassName += ` ${className}`;
   }

   return (
      <button className={cssClassName} {...props}>
         {children}
      </button>
   )
}
export default Button;
