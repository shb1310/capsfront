import React from 'react';
import './css/button.css';
import menu from './menu.svg';
import search from './search.svg';
import './css/Search.css';
import Nav from './Nav';
import {Link} from 'react-router-dom';


function SearchNotFound(){
     /*SearchNotFound: 임시적으로 만든 함수 지금 현재(7/29)search 페이지에서 돋보기 이미지 누르면 나옴
     추후에 일치하지 않는 결과를 찾을 때 나오게 변경 */
    alert("해당 검색에 대한 결과가 존재하지 않습니다.");
     }

function Search() {
    return(
          <div id="Search"> 
          {/*listbutton.js와 동일한 내용이지만, 검색 결과 위의 함수가 나오게 하기 위해 일단 불러오지 않고 직접 작성 */}
                 <div id="button">
              <Nav/>
           <div id="button1">
           <Link to='/listk'>  <button id="한식" value="한식">한식</button></Link>
           <Link to='/listz'>   <button id="중식" value="중식">중식</button></Link>
           <Link to='/listl'>    <button id="일식" value="일식">일식</button></Link>
          
           
          </div> 
          <div id="button2">  
          <Link to='/lists'>   <button id="서양식" value="서양식">서양식</button></Link>
          <Link to='/liste'>   <button id="기타" value="기타">기타</button></Link>   
          <Link to='/listp'>   <button id="공영주차장" value="공영주차장">공영주차장</button></Link>
          </div>
          <div class="search">
          <Link to='/loc'> <img src={menu} className="menu" alt="menu"/></Link>
            <input type="text" className="inputtxt"/>
            <img src={search} className="searchIcon" alt="search" onClick={SearchNotFound}/>
           </div>
        </div>
        </div>
    );
}

export default Search;