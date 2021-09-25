import React from 'react';
import './App.css';
import './css/logoF.css';
import './css/Home.css';
import Loc from './View/Loc';
import LocP from './View/LocP';
import LocG from './View/LocG';
import ListG from './View/ListG';
import List from './View/List';
import ListP from './View/ListP';
import Home from'./Home';
import Search from'./Search';
import Share from './Share';

import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';


const App=()=> {

  return (
     <Router>
    <div className="App">
     
     <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/loc" component={Loc} />
     <Route path="/locp" component={LocP} />
     <Route path="/locg" component={LocG} />
     <Route path="/list" component={List} />
     <Route path="/listg" component={ListG} />
     <Route path="/listp" component={ListP} />
     <Route path="/search" component={Search} />
     <Route path="/share" component={Share} />

     </Switch>
    </div>
    </Router>
  );
}

export default App;
