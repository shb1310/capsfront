import React from 'react';
import './App.css';
import './css/logoF.css';
import './css/Home.css';
import Loc from './Map/Loc';
import LocK from './Map/LocK';
import LocZ from './Map/LocZ';
import LocL from './Map/LocL';
import LocE from './Map/LocE';
import LocEt from './Map/LocEt';
import LocS from './Map/LocS';
import LocP from './Map/LocP';
import LocG from './Map/LocG';
import LocKG from './Map/LocKG';
import LocZG from './Map/LocZG';
import LocLG from './Map/LocLG';
import LocEG from './Map/LocEG';
import LocEtG from './Map/LocEtG';
import LocSG from './Map/LocSG';
import LocPG from './Map/LocPG';
import List from './List/List';
import ListP from './List/ListP';
import Home from'./Home';
import Search from'./Search';
import Share from './Share'
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
     <Route path="/locet" component={LocEt} />
     <Route path="/locs" component={LocS} />
     <Route path="/locp" component={LocP} />
     <Route path="/locg" component={LocG} />
     <Route path="/lockg" component={LocKG} />
     <Route path="/loczg" component={LocZG} />
     <Route path="/loclg" component={LocLG} />
     <Route path="/loceg" component={LocEG} />
     <Route path="/locetg" component={LocEtG} />
     <Route path="/locsg" component={LocSG} />
     <Route path="/locpg" component={LocPG} />
     <Route path="/list" component={List} />
     <Route path="/listp" component={ListP} />
     <Route path="/search" component={Search} />
     <Route path="/share" component={Share} />
   
     </Switch>
    </div>
    </Router>
  );
}

export default App;
