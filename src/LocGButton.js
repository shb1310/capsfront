import React from 'react';
import menu from './menu.svg';
import './css/Search.css'
import {Link} from 'react-router-dom';
import NavG from './NavG';
import search from './search.svg';
function LocGButton() {
  
    return(
        
          <div id="button">{/*버튼 전체에 대한 div*/}
             <NavG/>
           <div id="button1">{/*한식, 중식, 일식, 서양식에 대한 버튼 -> 각 페이지로 이동 */}
           <Link to='/lockg'>  <button id="한식" value="한식">한식</button></Link>
           <Link to='/loczg'>   <button id="중식" value="중식">중식</button></Link>
           <Link to='/loclg'>    <button id="일식" value="일식">일식</button></Link>
            
          </div> 
          <div id="button2">{/*기타, 즐겨찾기, 공영주차장에 대한 버튼->각 페이지로 이동 (즐겨찾기 추후 삭제 예정) */}
          <Link to='/locsg'>   <button id="서양식" value="서양식">서양식</button></Link>
          <Link to='/loceg'>   <button id="기타" value="기타">기타</button></Link>     
          <Link to='/locpg'>   <button id="공영주차장" value="공영주차장">공영주차장</button></Link>
          </div>
          <div class="search">{/* 검색창에 대한 div*/}
          <Link to='/list'><img src={menu} className="menu" alt="menu"/></Link>{/* loc<->list로 서로 바꿔주는 이미지, Link로 연결*/}
            <input type="text" className="inputtxt"/>{/* 검색창(네모난 박스)*/}
            <Link to='/search'> <img src={search} className="searchIcon" alt="search"/></Link>
            {/*검색->돋보기 모양 이미지->search 페이지로 연결 */}
           </div>
        </div>
       
    );
}

export default LocGButton;