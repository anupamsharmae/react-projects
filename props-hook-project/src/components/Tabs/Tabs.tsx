export default function Tabs({ children, ...props }: { children: React.ReactNode; [x:string]: unknown }) {
	const { buttons, ButtonsContainer = 'menu' } = props; // Should use the captial B for this key, as if small is used then
	// it will be treated as a string and not a component
	// and will not be able to render the component

	return(
		<>
		<ButtonsContainer>
			{buttons as React.ReactNode}
		</ButtonsContainer>
		<div>
			{children}
		</div>
		</>
	)
}