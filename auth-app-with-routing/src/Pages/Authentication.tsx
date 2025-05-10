import { redirect } from "react-router";
import AuthForm from "../components/AuthForm";

export default function Authentication() {
   return <AuthForm />
}


export async function action({ request }) {
   const searchParams = new URL(request.url).searchParams;
   const mode = searchParams.get('mode') || 'signup'

   if (!['login', 'signup'].includes(mode)) {
      throw Response.json({ message: 'Unsupported mode.' }, { status: 422 })
   }

   const data = await request.formData();
   const authData = Object.fromEntries(data);
   console.log(authData);

   const response = await fetch(`http://localhost:8080/${mode}`, {
      method: request.method,
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(authData)
   });
   if(response.status === 422 || response.status === 401){
      return response;
   }
   if(!response.ok){
      throw Response.json({ message: 'Could not authenticate user.' }, { status: 500 })
   }
   const respData = await response.json();
   const token = respData.token;

   localStorage.setItem('token', token);
   const expiration = new Date();
   expiration.setHours(expiration.getHours() + 1);
   localStorage.setItem('expiration', expiration.toISOString());

   return redirect('/');
}