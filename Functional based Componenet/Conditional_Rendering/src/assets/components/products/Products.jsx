import React, { Fragment } from 'react'
import Item from './Item';

const Products = ({data}) => {
console.log(data);

//  if(!data){
//     return(<h1>Loading...</h1>)
//  }


//  if(!data.length){
//     return<h1>Sorry No Data Found...</h1>
//  }else{

  
//  return (<ul>
//     {
//         data.map((val)=>{
//             return(
//             <Fragment key={val.id}>
//                 <Item key={val.id} Products={val}></Item>
//             </Fragment>
//             )
//         })
//     }
//  </ul>
//  )

// }




//Using Turnary Way

return(
    <Fragment>
        {
            !data?<h1>Loading...</h1>:!data.length?<h1>Sorry No Data Found...</h1>:data.map((val)=>{
                            return(
                            <Fragment key={val.id}>
                                <Item key={val.id} Products={val}></Item>
                            </Fragment>
                            )
                        })
        }
    </Fragment>
)




}

export default Products