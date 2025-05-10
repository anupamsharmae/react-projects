const Login = () => {

   const handleSubmitted = (event) => {
      event.preventDefault();
      console.log(1111);
   }

   return (
      <form onSubmit={handleSubmitted}>
         <h2>Login form</h2>
         <div className="control-row">
            <div className="control no-margin">
               <label htmlFor="email">Email</label>
               <input type="text" id="email" name="email" />
            </div>
            <div className="control no-margin">
               <label htmlFor="password">Password</label>
               <input type="text" id="password" name="password" />
            </div>
         </div>
         <div className="form-actions ">
            <button className="button button-flat">Reset</button>
            <button className="button">Login</button>
         </div>
      </form>
   )
}
export default Login;