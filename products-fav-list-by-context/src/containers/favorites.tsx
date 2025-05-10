
import Favourite from "../components/favorite/favorite"
import { use } from "react"
import { ProductsContext, type Product } from "../context/products"

const buildFavList = (list: Product[]) => {
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
   const favList = use(ProductsContext).products.filter((prod) => prod.isFavorite);

   let content;
   if (favList.length <= 0) {
      content = <p style={{ textAlign: 'center' }}>Got no favorite yet!</p>
   } else {
      content = buildFavList(favList);
   }

   return content;
}