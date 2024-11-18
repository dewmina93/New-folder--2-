
import './App.css'
import Navigation from '@/Navigation'
import Hero from '@/Hero'
import ProductCard from './ProductCard';
import Products from './Products';


function App() {
  const name="Dewmina";
   const count=2

  return (
    <>
      <Navigation name={name} count={count}></Navigation>
      <Hero></Hero>
      <Products></Products>
    
    </>
  )
}

export default App
