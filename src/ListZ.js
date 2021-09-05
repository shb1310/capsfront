import React from 'react';
import './App.css';
import './css/button.css';
import './css/logoF.css';
import './css/list.css';
import './css/map.css';
import './css/Loc.css'
import './css/Search.css';
import ListButton from './ListButton';


function ListZ() {
  console.log('ListZ');
  return (
    <div id="ListZ">
    <ListButton/>{/* 버튼 불러오기 */}
    <br /><br />
    <table class="result"> {/*중식에 대한 리스트->추후 백에서 받아온 데이터로 변경 예정 -> 지금은 예시*/}
        <thead>
          <tr>
            <th>No.</th>
            <th>이름</th>
            <th>주소</th>
            <th>전화번호</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td class="name">중식당1</td>
            <td class="address">경기도</td>
            <td class="number">031-0000-0000</td>
           
          </tr>
          <tr>
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
          </tr>
          <tr>
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
          </tr>
          <tr>
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
          </tr>
          <tr>
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
          </tr>
        </tbody>
        </table>

</div>
  );
}

export default ListZ;
