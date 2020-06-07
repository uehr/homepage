import React from 'react';
import './assets/css/app.css';
import Header from './components/organisms/header.js';
import Experiences from './components/organisms/experiences.js'
import SNS from './components/organisms/sns.js'
import Langs from './components/organisms/langs.js'
import Hobbies from './components/organisms/hobbies.js'
import Products from './components/organisms/products.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Experiences />
      <SNS />
      <Langs />
      <Hobbies />
      <Products />
    </div>
  );
}

export default App;