import React, { Component } from 'react';
import Context from '../config/Context';

class ContextProvider extends Component {

  render() {
    const { value } = this.props;
    return (
      <Context.Provider
        value={{
          ...this.props,
          state: this.state
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;
