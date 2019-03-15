import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    const { newValue } = this.props;
    return (
      <div className="App">
        <header className="App-header">
         <p>Hello World! {newValue}.</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.testState.newValue
});

export default connect(mapStateToProps)(App);
