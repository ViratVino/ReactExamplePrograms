import React, { Fragment } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';

const GetUsers = () => {
  let data=useLoaderData();
  console.log(useNavigation());
  let state=useNavigation();
  console.log(data);

  return (
    <div>
        {
           state==="loading"?<h1>Loading....</h1>:

            data?.map((user)=>{
                return <Fragment key={user.id}>
                    <li>
                        <img src={user.avatar_url} alt={user.login} height={100} width={100} />
                    </li>
                </Fragment>
            })
        }
    </div>
  )
}

export default GetUsers