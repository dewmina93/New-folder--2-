import ProductCard from './ProductCard';

function ProductCards(props) {
    return ( 
        <div className="grid grid-cols-4 gap-4">
            {
                props.products.map((product )=>(
                    <ProductCard 
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        key={product._id} 
                        description={product.description}
                    ></ProductCard>
                ))
            }
        </div>
     );
}

export default ProductCards;