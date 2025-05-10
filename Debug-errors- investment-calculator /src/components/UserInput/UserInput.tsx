import { InvestmentData } from "../../Models/Models";


export default function UserInput({userInput,onChange}: {userInput: InvestmentData, onChange: (inputId:string, newValue:string) => void}) {


	return (
		<section id="userInput">
			<div className="input-group">
				<p>
					<label htmlFor="initialInvestment">Initial Investment</label>
					<input type="number" id="initialInvestment" value={userInput.initialInvestment} onChange={(event)=> onChange('initialInvestment', event.target.value)} required/>
				</p>
				<p>
					<label htmlFor="annualInvestment">Annual Investment</label>
					<input type="number" id="annualInvestment" value={userInput.annualInvestment} onChange={(event)=> onChange('annualInvestment', event.target.value)} required/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label htmlFor="expectedReturn">Expect Return</label>
					<input type="number" id="expectedReturn" value={userInput.expectedReturn} onChange={(event)=> onChange('expectReturn', event.target.value)} required/>
				</p>
				<p>
					<label htmlFor="duration">Duration</label>
					<input type="number" id="duration" value={userInput.duration} onChange={(event)=> onChange('duration', event.target.value)} required/>
				</p>
			</div>
		</section>
	)
}