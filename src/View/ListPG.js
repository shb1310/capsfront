import React from 'react';
import '../css/list.css';
import Nav from '../Nav';
import mapBtn from '../images/map.svg';
import {Link} from 'react-router-dom';

function ListPG() {
  console.log('ListPG');
  return (
    <div id="ListPG">
    <Nav/>
    <Link to='/locpg'><img src={mapBtn} id="mapBtn" style={{width:"50px",height:"50px"}} alt="mapBtn"/></Link>
    <br /><br />
    <table className="resultP"> {/*공영주차장에 대한 리스트->추후 백에서 받아온 데이터로 변경 예정 -> 지금은 예시*/}
        <thead>
          <tr>
            <th>No.</th>
            <th>주차장명</th>
            <th>주소</th>
            <th>운영요일</th>
            <th>전화번호</th>
            <th>요금정보<br />(유/무)</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>공영주차장</td>
            <td>서울시</td>
            <td>평일+토요일+공휴일</td>
            <td>02-0000-0000</td>
            <td>무료</td>
           
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
        </table>

</div>
  );
}

export default ListPG;
