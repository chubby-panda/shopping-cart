import React from 'react';



const Product = (props) => {
    const { product, image, showButton } = props

    function showRemoveFromCartButton() {
        if (product.quantity != 0) {
            return true
        }
    }

    function showAddToCartButton() {
        if (product.quantity == 0) {
            return true
        }
    }
    
    return (
        <div className="product-container">
            <p className="product-name">{product.productName}</p>
            <img className="product-image" src={image} alt={product.productName}/>
            <p className="product-description">{product.productDescription}</p>
            <span className="price">${product.price}</span>
            <button className="btn">Add to cart</button>
            <button className="btn">Remove from cart</button>
        </div>
    )
}

export default Product;