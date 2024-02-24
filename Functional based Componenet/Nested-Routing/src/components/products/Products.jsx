import { useState } from "react"
import PRoducts from"../../Products.json";
import { Fragment } from "react";
import { useLocation } from "react-router-dom";

const Products = () => {
    let [products,setProducts]=useState(PRoducts);

    let Location=useLocation();
  return (
    
    <main>
      {/* <h1>
       {
        Location.state.name
       }
      </h1> */}
    <div className="products">

   {
        products.map.length>0 && products.map(user=>{
   
          return(
          <Fragment key={user.id}>
            <div className="container">
              <figure>
                <picture>
                 
                  <img src={user.image} alt={user.title} height={150} width={150}/>
                </picture>
              </figure>

            </div>

          </Fragment>
          )
        })
      }
   </div>
   </main>
  )
}

export default Products