import React from 'react';
import './App.css';
import './css/button.css';
import './css/logoF.css';
import './css/list.css';
import './css/map.css';
import './css/Loc.css'
import './css/Search.css';
import ListButton from './ListButton';

function ListJ() {
  console.log('ListJ');
  return (
    <div id="ListJ">
    <ListButton/>
    <br /><br />
    <table class="result">
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
            <td>즐겨찾기1</td>
            <td>서울시</td>
            <td>02-0000-0000</td>
           
           
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

export default ListJ;
