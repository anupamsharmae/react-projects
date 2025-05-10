import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import UserInput from './components/UserInput/UserInput';
import { INITIAL_INVESTMENT } from "./Util/Util";
import { InvestmentData } from './Models/Models';
import Results from './components/Results/Results';

function App() {
  const [userInput, setUserInput] = useState<InvestmentData>(INITIAL_INVESTMENT);

	const handleChange = (inputId:string, newValue:string) => {
		setUserInput((prevInputState) => {
			return { ...prevInputState, [inputId]: +newValue };
		})
	}

  const validateUserInput = userInput.duration > 0;

  return (
    <>
      <Header />
      <main>
        <UserInput userInput={userInput} onChange={handleChange} />
        {validateUserInput && <Results userInput={userInput} />}
        {!validateUserInput && <p className='error'>Please enter a valid duration</p>}
      </main>
    </>
  )
}

export default App
