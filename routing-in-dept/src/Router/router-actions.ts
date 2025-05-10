import { LoaderFunctionArgs, redirect } from "react-router-dom";

export async function newEventAction({ request, params }) {
   const method = request.method;
   console.log(method);
   const data = await request.formData();
   const eventData = {
      title: data.get('title'),
      image: data.get('image'),
      date: data.get('date'),
      description: data.get('description')
   }

   let url = 'http://localhost:8080/events';
   if (method === 'PATCH') {
      const eventId = params.eventId;
      url = `${url}/${eventId}`;
   }
   console.log(url);
   const response = await fetch(url, {
      method: method,
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
   });

   if (response.status === 422) {
      return response;
   }
   if (!response.ok) {
      throw Response.json({ message: 'Could not save the event.' }, { status: 500 })
   }

   console.log(response);
   return redirect('/events');
}


export async function deleteEventAction({params, request}: LoaderFunctionArgs) {
   const id = params.eventId;
   const response = await fetch(`http://localhost:8080/events/${id}`, {
      method: request.method,
   });
   if(!response.ok){}

   return redirect('/events')
}


export async function newsletterAction({ request }) {
   const data = await request.formData();
   const email = data.get('email');

   // send to backend newsletter server ...
   console.log(email);
   return { message: 'Signup successful!' };
}