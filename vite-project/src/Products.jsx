import ProductCards from "./ProductCards";
import { Separator } from "@/components/ui/separator";
import Tab from "./Tab";
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { getCategory, getProduct } from "./lib/api.js";
import { useParams } from 'react-router';

function Product() {
    // State to store products and categories
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const { categoryName } = useParams();
    
    // State to store the selected category ID
    const [selectedCategoryId, setSelectedCategoryId] = useState("676e0f257ea7e4c41c4d89e2");

    // Filter products based on selected category
    const filteredProduct = selectedCategoryId === "676e0f257ea7e4c41c4d89e2"
        ? products
        : products.filter((product) => product.categoryId === selectedCategoryId);

    // Handle tab click to set selected category ID
    const handleTabClick = (_id) => {
        setSelectedCategoryId(_id);
        console.log(_id);
    };

    // Fetch products on component mount
    useEffect(() => {
        getProduct().then((data) => {
            setProducts(data);
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    // Fetch categories on component mount
    useEffect(() => {
        getCategory().then((data) => {
            setCategories(data);
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    // Update selected category ID based on URL parameter
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
            <Separator className="mt-2" />
            <div className="mt-4 flex gap-4 items-center">
                {categories.map((category) => (
                    <Tab key={category._id}
                        _id={category._id}
                        name={category.name}
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