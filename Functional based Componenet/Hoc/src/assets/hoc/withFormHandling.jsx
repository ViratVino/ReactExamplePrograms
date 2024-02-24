import React from "react";

const withFormHandling = (WrappedComponent) => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        value: {},
        errors: {},
      };
    }

    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({
    
        [name]: value,
    });
    };

    handleSubmit = (e) => {
      e.preventDefault();
      // const error=this.validateErrors();
      // this.setState({error});

      // if(Object.keys(error).length===0){
      //     this.props.onSubmit(this.state.value)
      // }

      console.log(this.state);
    };

    validateErrors() {
      return {};
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          values={this.state.value}
          errors={this.state.errors}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  };
};

export default withFormHandling;
