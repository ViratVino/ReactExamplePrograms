
import { Fragment } from 'react';
import { AirtelContextApi } from '../context/AirtelContext';
import AirtelProvider from '../context/AirtelContext';


console.log(AirtelContextApi);
const Vinoth = () => {

    
    let {Consumer}=AirtelContextApi;
    console.log(Consumer);
  return (
    <Fragment>
    <div>Vinoth Using Airtel Network For Data and Extra Things...</div>
    <div>
        <Consumer>
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
        
            
        </Consumer>
    </div>
    </Fragment>
  )
}

export default Vinoth