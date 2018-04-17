import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header.js';
import ProfileBody from './components/ProfileBody/ProfileBody'
import Card from './components/Card/Card';
import hugh from './components/Hugh/Hugh'

console.log(hugh)

class App extends Component {
  render() {
    return (
      <div className="App">

<div className="container">
 <Header 
      name = { hugh.name }
      stats = { hugh.careerStats } 
      headerImage = { hugh.coverImg }
      tags = { hugh.titles }
      /> 
  
 <ProfileBody 
      stats = { hugh.socialStats }
      blurb = { hugh.infoParagraphs }
      profileImage = { hugh.profileImg }
      /> 
 <Card />
</div>

      </div>
    );
  }
}

export default App;
