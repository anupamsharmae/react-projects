import Card from "../ui/card";
import classes from './product-item.module.css';
import { useStore } from "../../hooks/store";
import { memo } from "react";

const ProductItem = memo(({ id, isFav, title, description }: Record<string, string | boolean>) => {
   const dispatch = useStore(false)[1];

   function toggleFavHandler(id: string) {
      dispatch('TOGGLE_FAV', id);
   };



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
})

export default ProductItem;