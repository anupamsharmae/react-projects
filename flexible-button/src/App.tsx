import './App.css'
import Button from './assets/components/Button/Button'

function App() {

  return (
    <>
      <Button mode="filled" className="my-button">
        Button
      </Button>
      <Button>
        Default Button
      </Button>
      <Button mode="outline" className="my-button">
        outlined Button
      </Button>

      <Button disabled>
        Disabled Button
      </Button>
      <Button mode='text'>
        Text Button
      </Button>
    </>
  )
}

export default App
