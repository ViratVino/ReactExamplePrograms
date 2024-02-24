import React, { Component } from 'react';
import { dbConnection } from '../../dbConnection';

export default class ClassBasedComp extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }


  componentDidMount(){

    // componnent did mount is used for side effect in class based component
    // document.title=`this title coming from class ${this.state.count}`;
    dbConnection.connect();
  } //rendered only once


  componentDidUpdate(){
    document.title=`this is update  from class ${this.state.count}`
    console.log("to check it will be updated or not");
  }// render based on state on states and probs update



  componentWillUnmount(){
    dbConnection.Disconnect();

  }





  render() {


    // rener method is not a best place for calling side effcets
    //document.title=`this title coming from  render  ${this.state.count}`
    return (
      <div>
        <h2>Class Based Component</h2>
        {/* <h1>{this.state.count}</h1> */}
        <h1>{this.state.count<10 && this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>increment</button>
      </div>
    )
  }
}
