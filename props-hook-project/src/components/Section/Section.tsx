function Section({ title, children, ...props }: { title: string; children: React.ReactNode, props?: unknown }) {
	return (
		<section {...props}>
			<h2>{title}</h2>
			{children}
		</section>
	)
}
export default Section;