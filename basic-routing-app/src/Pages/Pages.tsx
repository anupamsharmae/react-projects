import { Link, useNavigate } from "react-router-dom";

export default function Home() {
   const navigate = useNavigate();

   function navigateHandler() {
      navigate('/products')
   }

   return (
      <>
         <h1>My home page</h1>
         <p>Go to <Link to="/products"> the list of products</Link></p>
         <button onClick={navigateHandler}>Programmatically navigate</button>
      </>
   )
}