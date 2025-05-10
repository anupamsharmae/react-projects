function CousreGoal({...course}){
	return(
		<li>
			<h2>{course.title}</h2>
			<p>{course.description}</p>
		</li>
	)
}
export default CousreGoal;