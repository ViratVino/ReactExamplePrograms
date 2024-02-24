// import React from 'react'
// import UserProvider from './context/userContext';
// import Profile from './components/Profile';
// import AirtelProvider from './context/AirtelContext';
// import Vinoth from './components/Vinoth';
// import Nisha from './components/Nisha';

// const App = () => {
//   return (
// //     <UserProvider>
// //     <Profile/>
// //    </UserProvider>


// <AirtelProvider>
//  <Vinoth/>
//  <Nisha/>
// </AirtelProvider>
//   )
// }

// export default App





// import React from 'react'
// import Counter from './components/Counter'
// import CounterProvider from './context/CounterContext'

// const App = () => {
//   return (
//     <section id="mainContainer"> 
//      <article>
//         <CounterProvider>
//             <Counter/>     {/*counter is the Child of Counter Provider  */}
//         </CounterProvider>
//      </article>
//     </section>
//   )
// }

// export default App




import React from 'react'
import Container from './components/Container';
import { ThemeContextApi } from './context/ThemeContext';
import { theme } from './context/ThemeContext';


const App = () => {
  return (
    <ThemeContextApi.Provider value={theme}>
      <Container/>
    </ThemeContextApi.Provider>
  )
}

export default App