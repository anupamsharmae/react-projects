import './Cards.css'

export default function Cards({name, children} : {name: string, children: React.ReactNode}) {
	return (
		<div className="card">
			<div className="card-header">
				<h2>{name}</h2>
			</div>
			<div className='card-body'> {children} </div>
		</div>
	)
}