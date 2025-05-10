import { useSelector } from "react-redux"

export default function Frequency() {
   const appload = useSelector(state => state.appload);
   console.log(frequencies);
   return (
      <>
      <p>Frequency</p>

      </>
   )
}