import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import CssInJs from './components/CssInJs';
import styled from 'styled-components';
import ContactForm from './components/form/ContactForm';



// console.log(styled);



//styled Component Css
const H1=styled.h1`
color:red;
font-size:20px;
`;



const H2=styled.h2`
color:blue;
font-size:18px;
`;


const Form=styled.form`
width:500px;
background-color:#eee;
color:white;
padding:10px;
margin:20px
`


const Input=styled.input`
width:100%;
padding:10px 0;
border:none;
color:#fff;
`


const Button=styled.button`

background:purple;
padding:10px;
margin:10px 0;
border:none;
color:#fff

`




// java Script Css
let styles={
  background:'red',
  color:"#111",
  "font-size":20,
  margin:"10px"

}


const App = () => {
  return (
    <div >
      {/* <Login/>
      <Register/> */}

     {/* <H1>Hello h1 Style is Coming From Styled Component</H1>
     <H2>Hello h2 style coming from styled Component</H2>
     <Form>
      <Input type='text' placeholder='enter Your name'/>
      <Button>View More</Button>
     </Form>

      <CssInJs/> */}



      <ContactForm color="#111"></ContactForm>
    </div>
  )
}

export default App