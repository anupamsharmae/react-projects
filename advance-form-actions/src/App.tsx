import './App.css'
import { Header } from './components/Header'
import { NewOpinion } from './components/NewOpinion'
import { Opinions } from './components/Opinions'
import { OpinionsContextProvider } from './store/opinion-context'

function App() {

  return (
    <>
    <Header />
    <main>
      <OpinionsContextProvider>
        <NewOpinion />
        <Opinions />
      </OpinionsContextProvider>
    </main>
  </>
  )
}

export default App
