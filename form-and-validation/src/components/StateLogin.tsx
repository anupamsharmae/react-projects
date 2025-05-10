import { useState } from "react";
import Input from "./Input";
import { useInput } from "../hooks/useInput";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";

const Login = () => {
   const {
      value: emailValue,
      handleOnChangeInput: handleEmailChange,
      handleInputBlur: handleEmailBlur,
      hasError: emailHasError
   } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

   const {
      value: passValue,
      handleOnChangeInput: handlePasswordChange,
      handleInputBlur: handlePasswordBlur,
      hasError:passwordHasError
   } = useInput('', (value) => hasMinLength(value, 6) && isNotEmpty(value));



   const handleSubmitted = (event) => {
      event.preventDefault();
      console.log(1111, event);
      if(emailHasError || passwordHasError){
         return;
      }
      console.log(emailValue, passValue);
   }


   return (
      <form onSubmit={handleSubmitted}>
         <h2>Login form</h2>
         <div className="control-row">
            <Input label="Email" id="email"
               type="text"
               name="email"
               onChange={handleEmailChange}
               value={emailValue}
               onBlur={handleEmailBlur}
               error={emailHasError && 'Please enter a valid email'}
            />
            <Input label="Password" id="password"
               type="password"
               name="password"
               onChange={handlePasswordChange}
               value={passValue}
               onBlur={handlePasswordBlur}
               error={passwordHasError && 'Please enter a valid password'}
            />
            {/* <div className="control no-margin">
               <label htmlFor="email">Email</label>
               <input type="text" id="email" name="email" onChange={(event) => handleOnChangeInput('email', event.target.value)}
                  value={enteredValues.email}
                  onBlur={() => handleInputBlur('email')}
               />
               {emailIsValid && <p className="control-error">Please enter a valid email</p>}
            </div>
            <div className="control no-margin">
               <label htmlFor="password">Password</label>
               <input type="text" id="password" name="password" onChange={(event) => handleOnChangeInput('password', event.target.value)}
                  value={enteredValues.password}
                  onBlur={() => handleInputBlur('password')}
               />
            </div> */}
         </div>
         <div className="form-actions ">
            <button className="button button-flat">Reset</button>
            <button className="button">Login</button>
         </div>
      </form>
   )
}
export default Login;