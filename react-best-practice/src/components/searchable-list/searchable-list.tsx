import { useRef, useState } from "react"

export default function SearchableList({ items, itemKeyFn, children }) {
   const [searchTerm, setSearchTerm] = useState('');
   const timer = useRef(null);
   const searchResults = items.filter(item => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()));

   function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      if (timer.current) {
         clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
         timer.current = null;
         setSearchTerm((event.target as HTMLInputElement).value)
      }, 500);
   }

   return (<div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange} />
      <ul>
         {searchResults.map((item) => (
            <li key={itemKeyFn(item)}>{children(item)}</li>
         ))}
      </ul>
   </div>)
}