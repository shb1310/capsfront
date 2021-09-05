import React from 'react';
import './App.css';
import './css/logoF.css';
import './css/Nav.css';
import logo from './logo.svg';
import {Link} from 'react-router-dom';
function Nav() {
  
  return (
    <div className="Nav">
     <input id="menuBox" type="checkbox" /><label for="menuBox">&equiv;</label>{/*슬라이드 메뉴를 나오게 하기 위한 것 */}
  <nav>
    <ul id="menuList">{/*슬라이드 메뉴 눌러서 열렸을 때 나오는 메뉴 리스트 ->loc, list 존재 */}
      <Link to='/loc'><li>Loc</li></Link>
      <Link to='/list'> <li>List</li></Link>  
    </ul>
  </nav>
  <div id="content">{/*홈페이지 맨 위 가운데에 항상 떠있는 로고이미지와 안심식당 */}
    <Link to='/loc'><img src={logo} id="logo" alt="logo"/></Link>
    <Link to='/loc'>    <span id="logoword"> 안심식당</span></Link>
    <hr/>
  </div>
  </div>
  );
}

export default Nav;
