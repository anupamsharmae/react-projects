export default function CustomCard({ title, description, imgSet }: { title: string; description: string; imgSet: { src: string; size: number; altText: string } }) {
	// const { title, description, imgSet } = props;
	return (
		<li>
			<div className='card'>
				<div className="card-header">
					<img src={imgSet.src} alt={imgSet.altText} width={imgSet.size} height={imgSet.size}/>
				</div>
				<div className="card-body">
					<h3>{title}</h3>
				</div>
				<div className="card-footer">
					<p>{description}</p>
				</div>
			</div>
		</li>
	);
}
