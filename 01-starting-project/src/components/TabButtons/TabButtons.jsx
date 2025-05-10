export default function TabButtons({ children, onSelect, isSelected }) {
   function handleClick() {
      console.log('Clicked');
   }

   return (
      <li>
         <button type="button" className={isSelected ? 'active': null} onClick={onSelect || handleClick}>{children}</button>
      </li>
   )
}