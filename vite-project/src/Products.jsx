import ProductCards from "./ProductCards";
import { Separator } from "@/components/ui/separator"
import Tab from "./Tab"
import {useState} from 'react'

function Product() {
    const products=[
        {id:1,
        name:"Airpods Max",
        price:500,
        image:'/src/assets/product/airpods-max.png',
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo explicabo, est nobis sequi tempore numquam."},

        {   id:2,
            name:"Apple-watch",
            price:200,
            image:'/src/assets/product/apple-watch.png',
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo explicabo, est nobis sequi tempore numquam."},

        {id:3,
            name:"Echo dot",
            price:80,
            image:'/src/assets/product/echo-dot.png',
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo explicabo, est nobis sequi tempore numquam."},


        {id:4,
            name:"Iphone 15",
            price:1500,
            image:'/src/assets/product/iphone-15.png',
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo explicabo, est nobis sequi tempore numquam."},

        {id:5,
            name:"Pixel 8",
            price:899,
            image:'/src/assets/product/pixel-8.png',
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo explicabo, est nobis sequi tempore numquam."},

        {id:6,
            name:"Pixel buds",
            price:150,
            image:'/src/assets/product/pixel-buds.png',
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo explicabo, est nobis sequi tempore numquam."},

        {id:7,
            name:"Quietcomfort",
            price:99,
            image:'/src/assets/product/Quietcomfort.png',
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo explicabo, est nobis sequi tempore numquam."},

        {id:8,
            name:"Soundlink",
            price:250,
            image:'/src/assets/product/Soundlink.png',
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo explicabo, est nobis sequi tempore numquam."},
    ]

    const categories=[
        {id:"All", name:"All"},
        {id:"1",name:"Headphone"},
        {id:"2", name:'Earbuds'},
        {id:"3", name:"Speaker"},
        {id:"4", name:"Mobile Phone"},
        {id:"5", name:"Smart Watches"}
    ]

    const [selectedCategoryId , setSelectedCategoryId] = useState("All");

    const filteredProduct=
        selectedCategoryId==="All"
        ? products
        :products.filter((products) =>  products.categoryId==selectedCategoryId)

        const handleTabClick=(_id)=>{
            selectedCategoryId(_id)
        }
    return ( 
        <section className="px-8 PY-8 Flex">
            <h2>Our Top Product</h2>
            <Separator className ="mt-2"/>
            <div className="mt-4 flex gap-4 items-center">
                {categories.map((category)=>(
                    <Tab key ={category.id} 
                    _id={category.id} 
                    selectedCategory={selectedCategoryId} 
                    name={category.name}>
                    selectedCategoryId={selectedCategoryId}
                    
                    </Tab>
                ))}
            </div>


            <ProductCards products={products}></ProductCards>
             
            
        </section>
        
     );
}

export default Product;