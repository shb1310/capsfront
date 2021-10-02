import React from 'react';
import './App.css';
import './css/logoF.css';
import logo from './images/logo.svg';
import {Link} from 'react-router-dom';
function Nav() {
  
  return (
    <div className="Nav" style={{backgroundColor:"ghostwhite"}}>
   
  <div id="content">{/*홈페이지 맨 위 가운데에 항상 떠있는 로고이미지와 안심식당 */}
    <Link to='/loc'><img src={logo} id="logo" alt="logo"/></Link>
    <Link to='/loc'>    <span id="logoword"> 안심식당</span></Link>
    <hr/>
  </div>
  </div>
  );
}

export default Nav;
