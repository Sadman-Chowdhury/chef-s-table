import './App.css'
import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'

function App() {

  return (
    <>
    <Header></Header>
    <div className='flex'>
    <Recipes></Recipes>
    </div>
    </>
  )
}

export default App
