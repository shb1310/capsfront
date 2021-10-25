import React from 'react';
import './App.css';
import './css/logoF.css';
import './css/Home.css';
import Loc from './View/Loc';
import Main from './View/Main';
import List from './View/List';
import LocP from './View/LocP';
import Home from'./pages/Home';
import Search from'./pages/Search';
import InfoPage from './View/InfoPage'

import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';



const App=()=> {

  return (
     <Router>
    <div className="App">
     
     <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/loc" component={Loc} />
     <Route path="/main" component={Main} />
     <Route path="/list" component={List} />
     <Route path="/locp" component={LocP} />
     <Route path="/search" component={Search} />

     <Route exact path='/infopage/:workplace/:address1/:address2/:tel/:lat/:lon' component={InfoPage} />
     </Switch>
    </div>
    </Router>
    
  );
}

export default App;
