import { redirect } from "react-router";

export default function Logout() {
   return (
      <>
      </>
   )
}

export function action() {
   localStorage.clear();
   return redirect('/');
}