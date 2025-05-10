import { useDispatch } from "react-redux";
import Card from "../ui/card";
import { productAction } from "../../store/products";
import classes from './product-item.module.css';

export default function ProductItem({ id, isFav, title, description }: Record<string, string | boolean>) {
   const dispatch = useDispatch();

   function toggleFavHandler(id: string) {
      dispatch(productAction.toggleFav(id))
   }

   return (
      <Card style={{ marginBottom: '1rem' }}>
         <div className={classes['product-item']}>
            <h2 className={isFav ? classes['is-fav'] : undefined}>{title}</h2>
            <p className={isFav ? classes['is-fav'] : undefined}>{description}</p>
            <button type="button"
               className={!isFav ? 'button-outline' : undefined}
               onClick={() => toggleFavHandler(id as string)}>
               {isFav ? 'Un-Favorite' : 'Favorite'}
            </button>
         </div>
      </Card>
   )
}