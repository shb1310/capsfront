import React , { useState }from 'react';
import './css/button.css';
import menu from './menu.svg';
import search from './search.svg';
import './css/Search.css';
import Nav from './Nav';
import {Link} from 'react-router-dom';
import MapContainer from './MapContainer';

function Search() {
  
  const [InputText, setInputText] = useState('')
  const [Place, setPlace] = useState('')

  const onChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(InputText)
    setInputText('')
  }
    return(
          <div id="Search"> 
          {/*listbutton.js와 동일한 내용이지만, 검색 결과 위의 함수가 나오게 하기 위해 일단 불러오지 않고 직접 작성 */}
                 <div id="button">
              <Nav/>
              <div id="button1">{/*한식, 중식, 일식, 서양식에 대한 버튼 -> 각 페이지로 이동 */}

<Link to='/lock'>  <button id="한식" value="한식">한식</button></Link>
<Link to='/locz'>   <button id="중식" value="중식">중식</button></Link>
<Link to='/locl'>    <button id="일식" value="일식">일식</button></Link>
 <Link to='/locs'>   <button id="서양식" value="서양식">서양식</button></Link>
</div> 
<div id="button2">{/*기타, 즐겨찾기, 공영주차장에 대한 버튼->각 페이지로 이동 (즐겨찾기 추후 삭제 예정) */}

<Link to='/loce'>   <button id="기타외국식" value="기타외국식">기타외국식</button></Link>     
<Link to='/loct'>   <button id="기타_음식점업" value="기타 음식점업">기타 음식점업</button></Link>
</div>
         
    <form className="inputForm" onSubmit={handleSubmit}>
    <Link to='/loc'> <img src={menu} className="menu" alt="menu"/></Link>
        <input className="inputtxt" placeholder="검색어를 입력하세요" onChange={onChange} value={InputText} s/>
        &nbsp;   &nbsp;
        <button id="searchBox" type="submit" style={{width:"100px"}}><img src={search} className="searchIcon" alt="search" /></button>

      </form>
      <br/>
      <MapContainer searchPlace={Place} />
        </div>
        </div>
    );
}

export default Search;