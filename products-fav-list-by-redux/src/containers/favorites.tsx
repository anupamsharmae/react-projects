import { useSelector } from "react-redux"
import Favourite from "../components/favorite/favorite"

const buildFavList = (list) => {
   return (
      <ul className="products-list">
         {list.map(prod => (
            <Favourite
               key={prod.id}
               id={prod.id}
               title={prod.title}
               description={prod.description}
            />
         ))}
      </ul>
   )
}

export default function Favourites() {
   const favList = useSelector((state) => state.products.filter((prod) => prod.isFavorite))

   let content;
   if (favList.length <= 0) {
      content = <p style={{ textAlign: 'center' }}>Got no favorite yet!</p>
   } else {
      content = buildFavList(favList);
   }

   return content;
}