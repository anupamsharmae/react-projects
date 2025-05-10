export default function TabButton({ children, isSelected, ...props }: { children: React.ReactNode; isSelected?: boolean; props?: unknown }) {

   return (
      <li>
         <button type="button"
         className={isSelected ? 'active' : undefined}
         {...props}>{children}</button>
      </li>
   )
}