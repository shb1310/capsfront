import React from 'react';
import '../css/logoF.css';
import logo from '../images/logo.svg';
function Nav() {
  
  return (
  <div id="content" style={{height:"200px",marginTop:"10px"}}>{/*홈페이지 맨 위 가운데에 항상 떠있는 로고이미지와 안심식당 */}
    <img src={logo} id="logo" alt="logo" style={{height:"100px" }}/>
     <span id="logoword" > 안심식당</span>
    <hr/>
  </div>
  );
}

export default Nav;
