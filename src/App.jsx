import { Routes, Route } from 'react-router-dom'
import DetailProduct from './components/DetailProduct'
import MyContext from './components/ProductContext'
import Table from './components/Table'
import Cart from './pages/Cart'
import Home from './pages/Home'

const App = () => {
  return (
    <MyContext>
      <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/detail-product/:id' element={ <DetailProduct/> }/>
          <Route path='/cart' element={ <Cart/> } />
          <Route path='/table' element= {<Table/>} />
      </Routes>
    </MyContext>
  )
}

export default App
