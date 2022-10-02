import React from 'react';
import {Container} from '@material-ui/core';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import Main from './components/Main/Main'

function App() {
  
  return (
    <div>
      <Header/>
      <Navbar/>
      <Main></Main>
      <div className='content'></div>
      <Footer/>
    </div>
  );
};

export default App;
