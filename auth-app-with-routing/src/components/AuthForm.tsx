import { Form, Link, useActionData, useNavigation, useSearchParams,  } from 'react-router';

import classes from './AuthForm.module.css';

function AuthForm() {
   const [searchParams] = useSearchParams();
   const actionData = useActionData();

   const mode = searchParams.get('mode') ?? 'signup';
   const isLogin = mode === 'login';

   const navigation = useNavigation();
   const isSubmitting = navigation.state === 'submitting';

   return (
      <>
         <Form method="post" className={classes.form}>
            <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
            {actionData?.errors && (
               <ul>
                  {Object.values(actionData.errors).map((err) => <li key={err}>{err}</li>)}
               </ul>
            )}
            {actionData?.message && <p>{actionData.message}</p>}
            <p>
               <label htmlFor="email">Email</label>
               <input id="email" type="email" name="email" required />
            </p>
            <p>
               <label htmlFor="image">Password</label>
               <input id="password" type="password" name="password" required />
            </p>
            <div className={classes.actions}>
               <Link to={`?mode=${isLogin ? 'signup': 'login'}`} aria-disabled={isSubmitting}>
                  {isLogin ? 'Create new user' : 'Login'}
               </Link >
               <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...': 'Save'}</button>
            </div>
         </Form>
      </>
   );
}

export default AuthForm;
