import React from 'react'

const User = ({salary,name,company,role,age}) => {
    // console.log(salary);
    
    switch(role){
        case 'admin':{
            return(
                <section style={{background:"#eee",color:"#333" ,padding:10}}>
                    <h1>ADMIN PANEL</h1>
                    <h1>{name}</h1>
                    <h3>{role}</h3>

                </section>
            )
        }
        case 'user':{
            return(
                <section style={{background:"#111",color:"#fff" ,padding:20}}>
                    <h1>ADMIN PANEL</h1>
                    <h1>{name}</h1>
                    <h3>{role}</h3>

                </section>
            )
        }
    }
}

export default User