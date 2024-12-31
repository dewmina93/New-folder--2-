
import './App.css'
import Navigation from '../src/Navigation.jsx'
import Hero from '@/Hero'
import ProductCard from './ProductCard';
import Products from './Products';


function App() {
  
   const items=3;

  return (
    <>
      <Navigation  count={items}></Navigation>
      <Hero></Hero>
      <Products></Products>
    
    </>
  )
}

export default App
