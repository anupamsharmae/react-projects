import logo from '../../assets/images/logo.png'


export default function Header() {
	return (
		<header className="flex flex-col items-center mt-8 md:mb-16">
			<img src={logo} alt="Art lover logo" className='object-contain mb-8 w-44 h-44' />
			<h1 className='text-xl md:text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-pacifico'>React art</h1>
			<p className="text-stone-500">A community of artists and art-lover</p>
		</header>
	)
}