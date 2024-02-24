import React, { Component } from 'react'

export default class MyComponent extends Component {
    state={
        hasError:false
    }

    static getDerivedStaeFromError(error){
        return{hasError:true}
    }

  render() {
     
    if(this.state.hasError){
        return (
            <>
            <h1 >Sorry Something Went Wrong....</h1>
            <p>WE will Back Soon</p>
            </>
          )
    }else{
        this.props.children;
    }
  }
}
