import Card from './card'
import './App.css'
import Header from './Header'
import {Route,Routes} from 'react-router-dom'
import Signin from './Signin'
import Signup from './signup'
import About from './About'
import Product from './product'
import {useState} from 'react';
function App() {
  // Display products
  //state to manage search input
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Product searchTerm={searchTerm} />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <div style={{padding: '20px'}} >
        <Header setSearchTerm={setSearchTerm} />
        <Product searchTerm={searchTerm} />
      </div>
    </>
  )
}

export default App 