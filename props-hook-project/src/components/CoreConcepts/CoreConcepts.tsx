import { CORE_CONCEPTS } from "../../assets/scripts/data"
import CustomCard from "../CustomCard/CustomCard";

function CoreConcepts() {
	return (
		<section id='coreConcepts'>
			<ul>
				{
					CORE_CONCEPTS.map((concept, index) => (
						<CustomCard key={concept.title || index}
							{...concept} />
					))
				}
			</ul>
		</section>
	)
}
export default CoreConcepts;