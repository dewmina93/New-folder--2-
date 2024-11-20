
import { Button } from "@/components/ui/button"


function Hero() {
    return (
      <section className="p-8 mx-16">
        <div className="grid grid-cols-2 b rounded-md  bg-[#f4f8f9] ">
          <div className="flex flex-col justify-center p-16 gap-4">
            <span className="inline-block rounded-full p-1 text-xs bg-[#febc26] w-28">WEEKLY DISCOUNT</span>
            <h1 className="text-6xl font-semibold leading-none ">Premium Product Online Shop</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos
              suscipit est autem quia? Voluptatem?
            </p>
            <Button >Shop Now</Button>
            
          </div>
          <div className="relative">
            <img
              src="https://fee-storefront.vercel.app/assets/hero/hero.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    );
  }
  
  export default Hero;