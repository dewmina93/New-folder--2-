import ProductCards from "./ProductCards";
import { Separator } from "@/components/ui/separator"
import Tab from "./Tab"
import {useState} from 'react'
import {Button} from "@/components/ui/button"
import {getCategory, getProduct} from "./lib/api.js"
import { useEffect } from "react";
import { useParams } from 'react-router';


function Product() {
   const [products, setProducts] = useState([])
   const [categories, setCategories] = useState([])
   const { categoryName } = useParams();
    
   

    const [selectedCategoryId , setSelectedCategoryId] = useState("676e0f257ea7e4c41c4d89e2");

    const filteredProduct=
        selectedCategoryId==="676e0f257ea7e4c41c4d89e2"
        ? products
        :products.filter((products) => {return products.categoryId===selectedCategoryId
            
        } )

        const handleTabClick=(_id)=>{
            setSelectedCategoryId(_id)
            console.log(_id)
        }

        useEffect(()=>{
            getProduct().then((data)=>{
                setProducts(data)
                console.log(data)
            }).catch((err)=>{
                console.log(err)
            })
        },[])

        useEffect(()=>{
            getCategory().then((data)=>{
                setCategories(data)
                console.log(data)
            }).catch((err)=>{
                console.log(err)
            })
        },[])

        useEffect(() => {
            if (categoryName) {
                const category = categories.find(cat => cat.name === categoryName);
                if (category) {
                    setSelectedCategoryId(category._id);
                }
            }
        }, [categoryName, categories]);
        
    return ( 
        <section className="px-8 PY-8 Flex">
            <h2>Our Top Product</h2>
            
            <Separator className ="mt-2"/>
            <div className="mt-4 flex gap-4 items-center">
                {categories.map((categories)=>(
                    <Tab key ={categories._id} 
                    _id={categories._id} 
                    name={categories.name} 
                    selectedCategoryId1={selectedCategoryId}
                    onTabClick={handleTabClick}>
                   
                    </Tab>
                ))}
            </div>
            <ProductCards products={filteredProduct}></ProductCards>
             
            
        </section>
        
     );
}

export default Product;