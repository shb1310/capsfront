import React , { useState }from 'react';
import '../css/button.css';
import menu from '../images/menu.svg';
import search from '../images/search.svg';
import '../css/Search.css';
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
              
         
    <form className="inputForm" onSubmit={handleSubmit}>
    <Link to='/loc'> <img src={menu} className="menu" alt="menu"/></Link>
        <input className="inputtxt" placeholder="검색어를 입력하세요" onChange={onChange} value={InputText} />
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