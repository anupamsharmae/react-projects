import ProductItem from '../components/product-item/product-item';
import { useStore } from '../hooks/store';
import classes from './products.module.css';


export default function Products() {
   const state = useStore()[0];

   return (
      <ul className={classes['products-list']}>
         {state.products.map(prod => (
            <ProductItem
               key={prod.id}
               id={prod.id}
               title={prod.title}
               description={prod.description}
               isFav={prod.isFavorite}
            />
         ))}
      </ul>
   )
}