import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import clickButton from './actions/actions';

class App extends Component {
  updatePlease(){
   this.props.dispatch(clickButton);
  console.log("ACTION TRIGGERED");
  }

  render() {
    const { newValue } = this.props;
    return (
      <div className="App">
        <header className="App-header">
         <p onClick={()=> { this.updatePlease(); }}>Hello World! {newValue}.</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  dispatch: message => {store.dispatch(message);},
  newValue: store.testState.newValue
});

export default connect(mapStateToProps)(App);
