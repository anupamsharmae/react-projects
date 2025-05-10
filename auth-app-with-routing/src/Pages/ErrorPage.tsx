import { useRouteError } from "react-router";
import PageContent from "./PageContent";
import MainNavigation from '../components/MainNavigation';

export default function ErrorPage() {
   const error = useRouteError();

   let title = 'An error occured!';
   let message: string = 'Something went wrong!';

   if (error.status === 500) {
      message = error.data.message;
   }
   if (error.status === 404) {
      title = 'Not found!';
      message = 'Could not find resource or page.';
   }

   return (
      <>
         <MainNavigation />

         <PageContent title={title}>
            <p>{message}</p>
         </PageContent>
      </>
   )
}