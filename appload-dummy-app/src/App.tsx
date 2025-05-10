import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Layout from './Components/Layout/Layout'
import { useEffect } from 'react';
import { getAppload } from './Store/appload-action';
import Frequency from './Components/Frequency';

function App() {
  const dispatch = useDispatch();
  const appload = useSelector((state) => state.appload)

  console.log(appload);

  useEffect(() => {
    dispatch(getAppload())
  }, [dispatch])

  return (
    <>
      <h1>Helo</h1>
      <Layout>
        <Frequency />
      </Layout>
    </>
  )
}

export default App
