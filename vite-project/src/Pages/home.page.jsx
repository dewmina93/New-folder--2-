import Hero from "../Hero"
import Navigation from "../Navigation"
import Products from "../Products"

function HomePage() {
  const name = "name"
  const count = 2;

  return (
    <div>
      <Navigation name={name} cartCount={count} />
      <Hero />
      <Products />
    </div>
  );
}

export default HomePage;