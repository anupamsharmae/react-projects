export default function Button() {
   const clickHandler = () => {
      console.log('Button is pressed forcely!!');
   }
   return <button type="button" onClick={clickHandler}>Click me</button>
}