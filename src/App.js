import React, { Component } from 'react';
import Product from './components/Product.js';
import './App.css'


const productList = [
    {
        productName: 'Strawberries', 
        productImage: './components/images/strawberries.jpg',
        productDescription: 'Tasty in-season strawberries fresh from the farm!', 
        price: 5,
        quantity: 0
    }, 
    {
        productName: 'Chocolate',
        productImage: './components/images/chocolate.jpg',
        productDescription: 'Whitacker New Zealand milk chocolate',
        price: 4.5
    },
    {
        productName: 'Steak',
        productImage: './components/images/steak.jpg',
        productDescription: 'Premium WA scotch fillet, 250g', 
        price: 10
    }
]

function App() {
    return (
        <div>
            {productList.map((product, index) => (
                <Product 
                    product={product}
                    image={require(`${product.productImage}`)}
                    key={index}
                    index={index}
                />
                ))}
        </div>        
    )
}

export default App