import { useState, useEffect } from 'react'
import Card from './card'

function Product({ searchTerm }) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchData() {
            let data = await fetch('https://fakestoreapi.com/products')
            let result = await data.json()
            setProducts(result)
        }
        fetchData()
    }, [])

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <>
            {filteredProducts.map((product) => (
                <Card
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                />
            ))}
        </>
    )
}

export default Product