import headerImg from '/src/assets/quiz-logo.png';
export default function Header() {
   return (
      <header>
         <img src={headerImg} alt='Quiz logo' />
         <h1>React Quiz</h1>
      </header>
   )
}