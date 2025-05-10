import { useState } from "react";
import Button from "../../ui/Button";
import CustomInput from '../../ui/Label';



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
		<form action="" id="auth-inputs" className="w-full max-w-sm mx-auto p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800" onSubmit={submitForm}>
			<div>
				<div className="flex flex-col gap-2 mb-6">
					<CustomInput
						label="Email"
						type="email"
						id="email"
						name="email"
						value={userInput.email}
						invalid={isValid.email}
						onChange={(event) => handleInputChange('email', event.target.value)} />
				</div>
				<div className="flex flex-col gap-2 mb-6">
					<CustomInput
						label="Password"
						invalid={isValid.password}
						type="password"
						id="password"
						name="password"
						value={userInput.password}
						onChange={(event) => handleInputChange('password', event.target.value)}
					/>
				</div>
				<div className="flex justify-end gap-4 ">
					<button type="button" className="text-amber-400 hover:text-amber-500">Create a new account</button>
					<Button type="submit">Sign in</Button>
				</div>
			</div>
		</form>
	)
}