import React from 'react'
import ItemDescription from './ItemDescription'; 
import Button from './Button';


// I'm using props here I will be destructuring Product component to use title,description, price
const Product = ({title,description,price,increment,decrement}) => {


return (
    <div>
       
        <ItemDescription
        title={title} description={description} 
        />
        <h3>{price}</h3>

        <Button />

    </div>
)
}

export default Product;