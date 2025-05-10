export async function fetchAvailPlaces() {
   const resp = await fetch('http://localhost:3000/places');
   const respData = await resp.json();

   if (!resp.ok) { throw new Error('Failed to fetch the places!!') }
   return respData
}

export async function fetchUserPlaces() {
   const resp = await fetch('http://localhost:3000/places');
   const respData = await resp.json();

   if (!resp.ok) { throw new Error('Failed to fetch the user places!!') }
   return respData.places
}

export async function updateUserPlaces(places) {
   const resp = await fetch('http://localhost:3000/user-places', {
      method: 'PUT',
      body: JSON.stringify({places}),
      headers:{
         'Content-Type': 'application/json'
      }
   });
   const respData = await resp.json();

   if (!resp.ok) { throw new Error('Failed to fetch the places!!') }
   return respData
}