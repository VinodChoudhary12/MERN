
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Products from './Products'
import GetData from './GetData'
import Cart from './Cart'
import ViewMore from './ViewMore'


function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='Users' element={<GetData />} />
        <Route path='/products' element={<Products />} >
          <Route path='ViewMore' element={<ViewMore />} />
          <Route path='cart' element={<Cart />} />
        </Route>
        {/* <Route path='ViewMore' element={<ViewMore />} /> */}

        <Route path='cart' element={<Cart />} />
        <Route path="ViewMore" element={<ViewMore />} />

      </Routes>

      {/*  */}

    </>
  )
}

export default App
