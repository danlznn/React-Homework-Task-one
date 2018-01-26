import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import ContentContainer from './ContentContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer /> 
        <ContentContainer />
      </div>
    );
  } div
}

export default App;
