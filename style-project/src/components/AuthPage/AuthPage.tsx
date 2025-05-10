import { useState } from "react";
import { styled } from "styled-components";
import Button from "../../ui/Button";
import CustomInput from '../../ui/Label';

const CtrlContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-bottom: 1.5rem;
`

export default function AuthPage() {
	const [userInput, setUserInput] = useState({
		email: '',
		password: ''
	});
	const [submitted, setSubmitted] = useState(false);

	const handleInputChange = (type: string, value: string) => {
		setUserInput((prevState) => {
			return {
				...prevState,
				[type]: value
			}
		})
	}
	const isValid = {
		email: (submitted && !userInput.email.trim()) || false,
		password: (submitted && !userInput.password.trim()) || false
	};
	function submitForm(event: React.FormEvent) {
		event.preventDefault();


		setSubmitted(true);
	}

	return (
		<form action="" id="auth-inputs" onSubmit={submitForm}>
			<div>
				<CtrlContainer className="controls">
					{/* <Label htmlFor="email" className={`label ${isValid.email ? 'invalid' : ''}`}>Email</Label> */}
					{/* <Label htmlFor="email" $invalid={isValid.email}>Email</Label>
					<Input
						type="email"
						id="email"
						name="email"
						value={userInput.email}
						$invalid={isValid.email}
						// className={isValid.email ? 'invalid' : undefined}
						onChange={(event) => handleInputChange('email', event.target.value)}
					/> */}
					<CustomInput
						label="Email"
						type="email"
						id="email"
						name="email"
						value={userInput.email}
						invalid={isValid.email}
						// className={isValid.email ? 'invalid' : undefined}
						onChange={(event) => handleInputChange('email', event.target.value)} />
				</CtrlContainer>
				<CtrlContainer className="controls">
					{/* <Label htmlFor="password" $invalid={isValid.password}>Password</Label>
					<Input
						type="password"
						id="password"
						name="password"
						$invalid={isValid.password}
						// className={isValid.password ? 'invalid' : undefined}
						value={userInput.password}
						onChange={(event) => handleInputChange('password', event.target.value)}
					/> */}
					<CustomInput
						label="Password"
						invalid={isValid.password}
						type="password"
						id="password"
						name="password"
						// className={isValid.password ? 'invalid' : undefined}
						value={userInput.password}
						onChange={(event) => handleInputChange('password', event.target.value)}
					/>
				</CtrlContainer>
				<div className="actions">
					<button type="button" className="text-button">Create a new account</button>
					<Button type="submit">Sign in</Button>
				</div>
			</div>
		</form>
	)
}