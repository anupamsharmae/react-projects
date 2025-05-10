import { use } from "react";
import { ProductItem } from "../models/models";
import { CartContext } from "../store/shoppingCartContext";



export default function Product({ id, image, title, price, description }: ProductItem) {
   const { addItemToCart } = use(CartContext);
   return (
      <article className="product">
         <img src={image} alt={title} />
         <div className="product-content">
            <div>
               <h3>{title}</h3>
               <p className="product-price">$ {price}</p>
               <p>{description}</p>
            </div>
            <p className="product-actions">
               <button onClick={() => addItemToCart(id)}>Add to cart</button>
            </p>
         </div>
      </article>
   )

}