import React from 'react';
import './styles/App.css';
import './styles/Docs.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Docs from './components/Docs';
import { BrowserRouter,Route,Switch } from 'react-router-dom';  

function App() {
  return (
   <BrowserRouter>
 <div className="wrapper">
     <Sidebar />
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/docs" component={Docs} />
     </Switch>
    </div>

   </BrowserRouter>
  );
}

export default App;
