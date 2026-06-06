import { useState, useEffect } from 'react'
import Card from './card'

function Product({ searchTerm }) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchData() {
            let data = await fetch('https://ecommerce-backend-ewrk.onrender.com/products')
            let result = await data.json()
            setProducts(result)
        }
        fetchData()
    }, [])
    
    fetch('https://ecommerce-backend-ewrk.onrender.com/products',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add your POST request body here
            ID:25,
            title: "New Product",
            price: 19.99,
            description: "This is a new product.",
            image: "https://example.com/product-image.jpg"
        })
    })

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}> 
            {filteredProducts.map((product) => (
                <Card
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                />))}
        </div>
            
            
        </>
    )
}

export default Product