import { redirect } from "react-router";

export function getTokenDuration() {
   const storedExpirationDate = localStorage.getItem('expiration');
   const expireDate = new Date(storedExpirationDate);
   const now = new Date();
   const duration = expireDate.getTime() - now.getTime();
   return duration;
}

export function getAuthToken() {
   const token = localStorage.getItem('token');
   if (!token) return null;
   const tokenDuration = getTokenDuration();
   if (tokenDuration < 0) {
      return 'EXPIRED';
   }
   return token;
}

export function tokenLoader() {
   return getAuthToken();
}

export function checkAuthLoader() {
   const token = getAuthToken();
   if (!token) {
      return redirect('/auth');
   }
   return null;
}