import { useSelector } from 'react-redux';
import ProductItem from '../components/product-item/product-item';
import classes from './products.module.css';

export default function Products() {
   const productList = useSelector((state) => state.products);
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