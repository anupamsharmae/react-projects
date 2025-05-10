import ProductItem from '../components/product-item/product-item';
import classes from './products.module.css';
import { use } from 'react';
import { ProductsContext } from '../context/products';

export default function Products() {
   const productList = use(ProductsContext).products;
   console.log('1111');
   return (
      <ul className={classes['products-list']}>
         {productList.map(prod => (
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