import investmentLogo from '../../assets/investment-calculator-logo.png';

export default function Header() {
	return (
		<header id="header">
			<img src={investmentLogo} alt="investment logo" width={100}  />
			<h1>Investment Calculator</h1>
		</header>
	)
}