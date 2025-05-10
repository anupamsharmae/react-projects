import { useState } from "react";
import TabButton from "../TabButton/TabButton";
import { EXAMPLES } from "../../assets/scripts/data";
import Section from "../Section/Section";
import Tabs from '../Tabs/Tabs';

function Examples() {
	const [selectedContent, setselectedContent] = useState('');

	function handleSelect(selectedBtn: string) {
		console.log('Selected -- tab', selectedBtn);
		setselectedContent(selectedBtn)
	}
	let tabContent: string | React.ReactNode = 'Please click a button to see the content';
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
		);
	}

	const tabButtons = ['components', 'jsx', 'props', 'state'].map((btn:string) => (
		<TabButton
			key={btn}
			isSelected={selectedContent === btn}
			onClick={() => handleSelect(btn)}>
				{btn.toUpperCase()}
		</TabButton>
	));

	return (
		<Section title="Examples" id='examples'>
			<Tabs buttons={tabButtons}>
				<div>{tabContent}</div>
			</Tabs>
		</Section>
	)
}
export default Examples;