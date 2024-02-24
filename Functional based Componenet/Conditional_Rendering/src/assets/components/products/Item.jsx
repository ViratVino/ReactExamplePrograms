import React from 'react'


const Item = (prob) => {

   let {title,image,price,description}=prob.Products
    console.log(prob)
  return (
    <div>
        <header>
            <picture>
                <img src={image} alt="" />
            </picture>
        </header>
        <main>
            <h3>
                {title}
            </h3>
            <p>{title}</p>
            <p>{price}</p>
            {/* <p>{rate}</p> */}
            {/* <p>{count}</p> */}
            <p>{description}</p>
        </main>
    </div>
  )
}

export default Item