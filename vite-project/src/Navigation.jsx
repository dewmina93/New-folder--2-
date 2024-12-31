
import Hero from "@/Hero";
import SignIn from "@/SignIn";
import React from 'react';

function Navigation(props) {
 const status="signin"
 const name="Dewmina"



    return ( 
        <nav className="flex items-center justify-between p-8 mx-16">
            <div className="flex gap-x-16 ">
                <a className="font-semibold text-3xl" href="/">
                    Mabius
                </a>
                <div className="flex items-center gap-4 ">
                    <a href="/">Home</a>
                    <a href="/">Shop</a>
                </div>
            </div>
            <div className="flex items-center gap-4 relative">
                <div>
                    <a href="/" className="flex items-center gap-2 relative ">
                    <p className="text-lg">{props.cartCount}</p>
                   
                    <div className="flex items-center gap-2 text-lg">
                        Cart
                    </div>
                    </a>
                </div>
               <SignIn name ={name} status={status} ></SignIn>

            </div>
        </nav>
     );
}

export default Navigation;