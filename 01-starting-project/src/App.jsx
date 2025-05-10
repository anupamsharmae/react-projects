import Header from './components/Header/Header';
import CustomCards from './components/CustomCards/CustomCards';
import CourseGoal from './components/CourseGoal/CourseGoal';
import TabButtons from './components/TabButtons/TabButtons';
import Cards from './components/Cards/Cards';
import { useState } from 'react';

import { CORE_CONCEPTS, COURSE_GOALS,EXAMPLES } from '/src/assets/scripts/data';


function App() {
	// let tabContent = 'Please click a button to see the content';
	const [selectedContent, setselectedContent] = useState();

	function handleSelect(selectedBtn) {
		console.log('Selected -- tab', selectedBtn);
		tabContent = selectedBtn;
		setselectedContent(selectedBtn)
	}
	let tabContent = 'Please click a button to see the content';
	if (selectedContent) {
		tabContent = (
			<div>
				<h2>{EXAMPLES[selectedContent].title}</h2>
				<p>{EXAMPLES[selectedContent].description}</p>
				<pre>
					<code>
						{EXAMPLES[selectedContent].code}
					</code>
				</pre>
			</div>
		)
	}

	return (
		<div>
			<Header />
			<main>
				<h2>Time to get started!</h2>
				<section id='coreConcepts'>
					<ul>
						{/* <CustomCards title='Components' description='The core UI building blocks' imgSet={{src: compImg, size: 100, altText: 'Component logo'}} /> */}
						{/* <CustomCards title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} imgSet={CORE_CONCEPTS[0].imgSet} />
						<CustomCards {...CORE_CONCEPTS[1]} />
						<CustomCards {...CORE_CONCEPTS[2]} />
						<CustomCards {...CORE_CONCEPTS[3]} /> */}
						{
							CORE_CONCEPTS.map((concept) => (
								<CustomCards key={concept.title}
								{...concept}
								></CustomCards>
							))
						}
					</ul>
				</section>
				<section id='courseGoals'>
					<ul>
						<CourseGoal title='React Fundamentals' description='Learn the core concepts of React' />
						<CourseGoal {...COURSE_GOALS[2]} />
						<CourseGoal title={COURSE_GOALS[0].title} description={COURSE_GOALS[0].description} />
					</ul>
				</section>
				<section id='cards'>
					<h2>Cards Examples</h2>
					<Cards name='Maria Miles'>
						<p>Maria is a professor of Computer Science at the University of Illinois.</p>
						<p><a href="mailto:blake@example.com">Email Maria</a></p>
					</Cards>
					<Cards name='Anupam Sharma'>
						<p>Anupam is a student of Computer Science at the University of Illinois.</p>
						<p><a href="mailto:anupam@example.com">Email Anupam</a></p>
					</Cards>
				</section>

				<section id='examples'>
					<h2>Examples</h2>
					<menu>
						<TabButtons isSelected={selectedContent === 'components'} onSelect={() => handleSelect('components')}>Components</TabButtons>
						<TabButtons isSelected={selectedContent === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButtons>
						<TabButtons isSelected={selectedContent === 'props'} onSelect={() => handleSelect('props')}>Props</TabButtons>
						<TabButtons isSelected={selectedContent === 'state'} onSelect={() => handleSelect('state')}>State</TabButtons>
					</menu>
					{ tabContent }
				</section>

			</main>
		</div>
	);
}

export default App;


// function App() {
//   return (
//     <div>
//       <header>
//         <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
//         <h1>React Essentials</h1>
//         <p>
//           Fundamental React concepts you will need for almost any app you are
//           going to build!
//         </p>
//       </header>
//       <main>
//         <h2>Time to get started!</h2>
//       </main>
//     </div>
//   );
// }

// export default App;
