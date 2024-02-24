import React from 'react'
import { AirtelContextApi } from '../context/AirtelContext'

const Nisha = () => {
  return (
    <div>
        Nisha Using BSNL sim for data
        <AirtelContextApi.Consumer>
    {
        (({network_name,nearest_tower,duration,sim_type,data,price})=>{
            return(
                <>
                <h1>Network :{network_name}</h1>
                <p>Price &#8377; :{price}</p>
                </>
            )

        }
        )
    }

    
</AirtelContextApi.Consumer></div>
  )
}

export default Nisha