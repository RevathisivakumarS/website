import React from 'react';
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import {Products} from './Components/Products';
import {Demo} from './Components/Demo';
import {About} from './Components/About';
import Contact from './Components/Contact';

import Content from './Components/Content';
import Footer from './Components/Footer';


const App: React.FC = () => {
  return (
    <Router>
     <Header />
       <Content/>
      <Switch>
        <Route path="/Products"  component={Products} />
        <Route path="/Demo" component={Demo} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
      </Switch>
      <Footer/>
    </Router>
   
  );
};

export default App;









