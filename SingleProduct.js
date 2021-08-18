import React from 'react'

const SingleProduct = ({product}) => {
    return (
        <div>
            {product.name} - {product.price}
        </div>
    )
}

export default SingleProduct;
