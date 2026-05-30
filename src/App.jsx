import Card from './card'
import './App.css'
import Header from './Header'
import Product from './product'
import {useState} from 'react';
function App() {
  // Display products
  //state to manage search input
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div style={{padding: '20px'}}>
      <Header setSearchTerm={setSearchTerm} />
      <Product searchTerm={searchTerm} />
      {searchTerm}
    </div>
  )
}

export default App 