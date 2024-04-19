

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import Portfolio from './components/Portfolio'
import Products from './components/Products'
import About from './components/About'
import RecentProducts from './components/RecentProducts'
import FeatureProducts from './components/FeatureProducts'
// import AboutUs from './components/About'




function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='contactUs' element={<ContactUs />} />
        <Route path='portfolio' element={<Portfolio />} />

        <Route path='products' element={<Products />}>
          <Route index element={<RecentProducts />} />    {/* we use index when we on Product by default
                                                              RecentProduct render */}
          <Route path='feature-product' element={< FeatureProducts />} />
        </Route>
        <Route path='about' element={< About />} />

      </Routes>
    </> 
  )
}

export default App
