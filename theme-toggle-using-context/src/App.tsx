import './App.css'
import Page from './components/Page'
import ThemeContextProvider from './store/ThemeContext'

function App() {
  return (
    <ThemeContextProvider>
      <Page />
    </ThemeContextProvider>
  )
}

export default App
