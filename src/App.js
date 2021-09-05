import React from 'react';
import './App.css';
import './css/logoF.css';
import './css/Home.css';
import Loc from './Loc';
import LocK from './LocK';
import LocZ from './LocZ';
import LocL from './LocL';
import LocE from './LocE';
import LocS from './LocS';
import LocP from './LocP';
import LocG from './LocG';
import LocKG from './LocKG';
import LocZG from './LocZG';
import LocLG from './LocLG';
import LocEG from './LocEG';
import LocSG from './LocSG';
import LocPG from './LocPG';
import List from './List';
import ListK from './ListK';
import ListZ from './ListZ';
import ListL from './ListL';
import ListE from './ListE';
import ListS from './ListS';
import ListP from './ListP';
import Home from'./Home';
import Search from'./Search';

import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';


function App() {

  return (
    
    <Router>
    <div className="App">
     
     <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/loc" component={Loc} />
     <Route path="/lock" component={LocK} />
     <Route path="/locz" component={LocZ} />
     <Route path="/locl" component={LocL} />
     <Route path="/loce" component={LocE} />
     <Route path="/locs" component={LocS} />
     <Route path="/locp" component={LocP} />
     <Route path="/locg" component={LocG} />
     <Route path="/lockg" component={LocKG} />
     <Route path="/loczg" component={LocZG} />
     <Route path="/loclg" component={LocLG} />
     <Route path="/loceg" component={LocEG} />
     <Route path="/locsg" component={LocSG} />
     <Route path="/locpg" component={LocPG} />
     <Route path="/list" component={List} />
     <Route path="/listk" component={ListK} />
     <Route path="/listz" component={ListZ} />
     <Route path="/listl" component={ListL} />
     <Route path="/liste" component={ListE} />
     <Route path="/lists" component={ListS} />
     <Route path="/listp" component={ListP} />
     <Route path="/search" component={Search} />
     </Switch>
    </div>
    </Router>
  );
}

export default App;
