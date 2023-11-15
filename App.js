import React from 'react';
import Header from './header';
import Footer from './footer';
import Menu from './menu';
import ImageSlider from './slide';
import image from'./image';
import { Container } from 'react-dom';

const App = () => {
  return (
    <div>
      <Header />
    <Menu/>
  <ImageSlider/>
  <div className="container">
      <img src="public/pic7.jpg - Shortcut.lnk" alt="Image" className="image" />
    </div>
      <div className="container">
      <h1 className="centered-text">shining with canva jewlwery</h1>
    </div>
      <Footer />
    
    </div>
  );
}

export default App;