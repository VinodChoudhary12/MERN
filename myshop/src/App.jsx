
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='SingIn' element={<SignIn />} />
        <Route path='products' element={<Products />} />
        <Route path='ProductDetail/:productId' element={<ProductDetail />} />


      </Routes>

    </>
  )
}

export default App
