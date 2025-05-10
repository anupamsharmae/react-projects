import MealItem from "./MealIem";
import useHttp from "../hooks/useHttp";
import ErrorMessage from "./ErrorMessage";

const getMealsUrl = 'http://localhost:3000/meals';
const requestConfig = {};

export default function Meals() {
   const {data: loadedMeals, isLoading, error} = useHttp(getMealsUrl, requestConfig, [])

   if(isLoading){
      return <p className="center">Fetching meals ...</p>
   }

   if(error){
      return <ErrorMessage title="Failed to fetch meals" message={error} />
   }

   return (
      <ul id="meals">
         {loadedMeals.map((meal) => <MealItem key={meal.id} meal={meal}></MealItem>)}
      </ul>
   )
}