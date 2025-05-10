// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { COURSE_GOALS } from './assets/scripts/data';
import Header from './components/Header/Header';
import CourseGoal from './components/CourseGoal/CourseGoal';
import Cards from './components/Cards/Cards';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import Examples from './components/Examples/Examples';


function App() {


	return (
		<>
			<Header />
			<main>
				<h2>Time to get started!</h2>
				<CoreConcepts />
				<Examples />
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
			</main>
		</>
	)
}

export default App
