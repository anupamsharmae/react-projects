import Card from "../ui/card";
import classes from './favorite.module.css';


export default function Favourite({ title, description }: Record<string, string>) {
   return (
      <Card style={{ marginBottom: '1rem' }}>
         <div className={classes['favorite-item']}>
            <h2>{title}</h2>
            <p>{description}</p>
         </div>
      </Card>
   )
}