import reactCoreImage from '/src/assets/images/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
	return Math.floor(Math.random() * (max + 1));
}

function Header() {
	const reactTopics = reactDescriptions[genRandomInt(2)];

	return (
		<header>
			<img src={reactCoreImage} alt="Stylized atom" />
			<h1>React Essentials</h1>
			<p>
				{reactTopics} React concepts you will need for almost any app you are going to build!
			</p>
		</header>
	);
}

export default Header;