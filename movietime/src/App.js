import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './index.css' 
import {BrowserRouter} from 'react-router-dom'



const App = () => {
  return (
     <div>
     <Header/>
   <Content/>
  <Footer/>
  </div>
   );
}

export default App;
