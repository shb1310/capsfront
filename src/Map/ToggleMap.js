import React from "react";
import {
  NavLink,
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Omap from "./Omap";
import Map from "./Map";
import "../App.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";


 
const ToggleMap = () => {
  return (
    <div className="Home">
      <Router>
        <div className="nav">
        <NavLink exact to="/Map"> <button className="button_agree" >로드뷰 보이기</button></NavLink>
          <NavLink to="/omap"><button className="button_Nagree">로드뷰 숨기기</button></NavLink>
        </div>
        <Route
          render={({ location }) => {
            console.log(location);
            return (
              <TransitionGroup>
                <CSSTransition  classNames="fade">
                  <Switch>
                    <Route exact path="/omap" component={Omap}></Route>
                    <Route path="/map" component={Map}></Route>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        ></Route>
      </Router>
    </div>
  );
};

export default ToggleMap;
