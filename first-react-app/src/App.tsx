// import { useState } from 'react'
// import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import './App.css'

function genRandomNum(max: number) {
	return Math.floor(Math.random() * max);
}


function Header() {
	return (
		<header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: '#282c34' }}>
			<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
				<img src="/vite.svg" alt="Vite logo" />
				<h1 style={{ color: 'crimson', margin: 0 }}>React app</h1>
			</div>
			<p style={{ marginLeft: 'auto' }}>Click the buttons below</p>
		</header>
	)
}

function MainGoal() {
	const randomNum = genRandomNum(5);
	return (
		<>
			<div style={{ marginBlock: '1rem'}}>
				<img src={reactLogo} width={100} alt="React logo" />
			</div>
			<p>My main goal: Learn React in-depth and from the ground up</p>
			{/* <span>{genRandomNum(5)}: This is the random number</span> */}
			<span>{randomNum}: This is the random number</span>
		</>
	)
}

function ColorButtons() {
	const buttons = [
		{ name: 'Button 1', color: 'red', bg: 'rgba(247, 178, 178, 0.2)' },
		{ name: 'Button 2', color: 'blue', bg: 'rgba(162, 146, 252, 0.2)' },
		{ name: 'Button 3', color: 'green', bg: 'rgba(106, 241, 129, 0.2)' },
		{ name: 'Button 4', color: 'yellow', bg: 'rgba(252, 232, 58, 0.2)' },
		{ name: 'Button 5', color: 'purple', bg: 'rgba(232, 59, 255, 0.2)' }
	]

	return (
		buttons.map((button, index) => (
			<button
				id={index.toString()}
				type='button'
				key={button.name}
				style={{ color: button.color, backgroundColor: button.bg }}
				onClick={() => console.log('Button clicked', button.name)}
			>
				{button.name}
			</button>
		))
	)
}

function UserCard(user: { firstName?: string, lastName?: string, title?: string }){ // consider as props
	// const user={
	// 	firstName: 'Anupam',
	// 	lastName: 'Sharma',
	// 	title: 'PRINCE OF BIT-LAND',
	// }
	return(
		<div className='card card-bg-light'>
			<div className="card-header">
				{user.title && <h3>{user.title}</h3>}
			</div>
			<div className="card-body card-bg-gradient">
				{user.firstName && user.lastName && <p>{user.firstName} {user.lastName}</p>}
				<p>Thanks for showing up the interest</p>
			</div>
		</div>
	)
}

function App() {
	return (
		<>
			<Header />
			<MainGoal />
			<div className="buttons-container"
				style={{ display: 'flex', justifyContent: 'center', gap: '1rem', padding: '2rem 0', flexWrap: 'wrap' }}>
				<ColorButtons />
			</div>
			<div style={{ display: 'flex', justifyContent: 'center', padding: '2rem', gap:'1rem' }}>
				<UserCard firstName='Anupam' lastName='Sharma' title='PRINCE OF BIT-LAND'/>
				<UserCard firstName='Ajay' lastName='Choudhary' title='CHOUDHARY SAHAB !'/>
				<UserCard  lastName='Choudhary' title='SAHABJZADA !'/>
				<UserCard firstName='Ajay' lastName='Verma' />
			</div>
		</>
	)
}


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
