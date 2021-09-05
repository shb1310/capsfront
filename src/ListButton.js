import React from 'react';
import './css/button.css';
import menu from './menu.svg';
import search from './search.svg';
import {Link} from 'react-router-dom';
import './css/Search.css';
import Nav from './Nav';

function ListButton() {
	
	function handleClick() {
    	console.log('this is:', this);
	}
	const url = "/list";
    return(
        
          <div id="button">{/*�뵓怨뚯뫓占쎈괏 �뜝�럩�쓧嶺뚳퐢�샍�굢占� �뜝�룞�삕�뜝�럥由� div*/}
              <Nav/>
           <div id="button1">{/*�뜝�럥由썲뜝�럥六�, 繞벿살탳占쎈뻤, �뜝�럩逾у뜝�럥六�, �뜝�럡�맋�뜝�럥�렧�뜝�럥六쇔뜝�럥�뱺 �뜝�룞�삕�뜝�럥由� �뵓怨뚯뫓占쎈괏 -> �뤆�룊�삕 �뜝�럥�쓡�뜝�럩逾좂춯�쉻�삕�슖�댙�삕 �뜝�럩逾졾뜝�럥吏� */}
           <Link to={{pathname: url, state: { key: 'sh'}}}>  <button id="k" value="kor">kor</button></Link>
           <Link to={{pathname: url, state: {key: 'w'}}}>   <button id="z" value="chi">chi</button></Link>
           <Link to='/listl'>    <button id="i" value="jap">jap</button></Link>
           <Link to={{pathname: url, state: { key: 'list_key'}}}>    <button onClick={handleClick} value="ont">list</button></Link>
           
          </div> 
          <div id="button2"> {/*�뼨轅명�у뜝占�, 嶺뚯빖횧�댆�눦�럶占쎈폁�뵳占�, 占썩뫀踰딉옙寃ラ썒�슣�닔揶쏅㉡�삕占쎌궋�뜝�럥�뱺 �뜝�룞�삕�뜝�럥由� �뵓怨뚯뫓占쎈괏->�뤆�룊�삕 �뜝�럥�쓡�뜝�럩逾좂춯�쉻�삕�슖�댙�삕 �뜝�럩逾졾뜝�럥吏� (嶺뚯빖횧�댆�눦�럶占쎈폁�뵳占� 占쎈퉲�뀎占쏙옙�쐩 �뜝�럡�뀭�뜝�럩�젷 �뜝�럩援쇿뜝�럩�젧) */} 
          <Link to='/lists'>   <button id="�뜝�럡�맋�뜝�럥�렧�뜝�럥六�" value="�뜝�럡�맋�뜝�럥�렧�뜝�럥六�">�뜝�럡�맋�뜝�럥�렧�뜝�럥六�</button></Link>
          <Link to='/liste'>   <button id="�뼨轅명�у뜝占�" value="�뼨轅명�у뜝占�">�뼨轅명�у뜝占�</button></Link>   
          <Link to='/listp'>   <button id="占썩뫀踰딉옙寃ラ썒�슣�닔揶쏅㉡�삕占쎌궋" value="占썩뫀踰딉옙寃ラ썒�슣�닔揶쏅㉡�삕占쎌궋">占썩뫀踰딉옙寃ラ썒�슣�닔揶쏅㉡�삕占쎌궋</button></Link>
          </div>
          <div class="search">{/* �뇦猿볦삕�뜝�럡�돰嶺뚢돦�윪�굢占� �뜝�룞�삕�뜝�럥由� div*/}
          <Link to='/loc'> <img src={menu} className="menu" alt="menu"/></Link>{/* loc<->list�슖�댙�삕 �뜝�럡�맋�슖�댙�삕 �뛾�룆�뼺占쎈쾴�썒�슣�닑占쎈츎 �뜝�럩逾졿쾬�꼶梨룟뜝占�, Link�슖�댙�삕 �뜝�럥�뿼�뇦猿볦삕*/}
            <input type="text" className="inputtxt"/>{/* �뇦猿볦삕�뜝�럡�돰嶺뚢댙�삕(�뜝�럡�맟嶺뚮ㅄ維�亦낉옙 �뛾�룆踰∽옙裕�)*/}
            <Link to='/search'> <img src={search} className="searchIcon" alt="search"/></Link> {/*�뇦猿볦삕�뜝�럡�돰->�뜝�럥利사솻洹ｋ뼬�뵳占� 嶺뚮ㅄ維곩젆占� �뜝�럩逾졿쾬�꼶梨룟뜝占�->search �뜝�럥�쓡�뜝�럩逾좂춯�쉻�삕�슖�댙�삕 �뜝�럥�뿼�뇦猿볦삕 */}
           </div>
        </div>
    );
}

export default ListButton;