import React from 'react';
import './App.css';
import './css/button.css';
import './css/logoF.css';
import './css/list.css';
import './css/map.css';
import './css/Loc.css'
import './css/Search.css';
import ListButton from './ListButton';


function ListS() {
  console.log('ListS');
  return (
    <div id="ListS"> 
       <ListButton/>{/* 버튼 불러오기 */}
    <br /><br />
    <table class="result"> {/*서양식에 대한 리스트->추후 백에서 받아온 데이터로 변경 예정 -> 지금은 예시*/}
        <thead>
           <tr>
            <th>No.</th>
            <th class="name">이름</th>
            <th class="address">주소</th>
            <th class="number">전화번호</th>
          </tr>
        </thead>
        <tbody>
         
          <tr>
          <td>1.</td>
          <td class="name">서양식1</td>
            <td class="address">부산</td>
            <td class="number">051-0000-0000</td>
          </tr>
          <tr>
          <td></td>
            <td class="name"></td>
            <td class="address"></td>
            <td class="number"></td>
          </tr>
          <tr>
          <td></td>
            <td class="name"></td>
            <td class="address"></td>
            <td class="number"></td>
          </tr>
          <tr>
          <td></td>
            <td class="name"></td>
            <td class="address"></td>
            <td class="number"></td>
          </tr>
          <tr>
          <td></td>
            <td class="name"></td>
            <td class="address"></td>
            <td class="number"></td>
          </tr>
          <tr>
          <td></td>
            <td class="name"></td>
            <td class="address"></td>
            <td class="number"></td>
          </tr>
          <tr>
          <td></td>
            <td class="name"></td>
            <td class="address"></td>
            <td class="number"></td>
          </tr>
          <tr>
          <td></td>
            <td class="name"></td>
            <td class="address"></td>
            <td class="number"></td>
          </tr>
          <tr>
          <td></td>
            <td class="name"></td>
            <td class="address"></td>
            <td class="number"></td>
          </tr>
          <tr>
          <td></td>
            <td class="name"></td>
            <td class="address"></td>
            <td class="number"></td>
          </tr>
        </tbody>
        </table>

</div>
  );
}

export default ListS;
