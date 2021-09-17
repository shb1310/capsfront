import React from 'react';
import '../App.css';
import '../css/button.css';
import '../css/logoF.css';
import '../css/list.css';
import '../css/map.css';
import '../css/Loc.css'
import '../css/Search.css';
import ListButton from './ListButton';


function ListL() {
  console.log('ListL');
  return (
    <div id="ListL">
   <ListButton/>{/* 버튼 불러오기 */}
    <br /><br />
    <table className="result"> {/*일식에 대한 리스트->추후 백에서 받아온 데이터로 변경 예정 -> 지금은 예시*/}
        <thead>
           <tr>
            <th>No.</th>
            <th className="name">이름</th>
            <th className="address">주소</th>
            <th className="number">전화번호</th>
            
          </tr>
         </thead>
         <tbody>
          <tr>
          <td>1.</td>
          <td className="name">일식당1</td>
            <td className="address">인천</td>
            <td className="number">032-0000-0000</td>
          </tr>
          <tr>
          <td></td>
            <td className="name"></td>
            <td className="address"></td>
            <td className="number"></td>
          </tr>
          <tr>
          <td></td>
            <td className="name"></td>
            <td className="address"></td>
            <td className="number"></td>
          </tr>
          <tr>
          <td></td>
            <td className="name"></td>
            <td className="address"></td>
            <td className="number"></td>
          </tr>
          <tr>
          <td></td>
            <td className="name"></td>
            <td className="address"></td>
            <td className="number"></td>
          </tr>
          <tr>
          <td></td>
            <td className="name"></td>
            <td className="address"></td>
            <td className="number"></td>
          </tr>
          <tr>
          <td></td>
            <td className="name"></td>
            <td className="address"></td>
            <td className="number"></td>
          </tr>
          <tr>
          <td></td>
            <td className="name"></td>
            <td className="address"></td>
            <td className="number"></td>
          </tr>
          <tr>
          <td></td>
            <td className="name"></td>
            <td className="address"></td>
            <td className="number"></td>
          </tr>
          <tr>
          <td></td>
            <td className="name"></td>
            <td className="address"></td>
            <td className="number"></td>
          </tr>
        </tbody>
        </table>

</div>
  );
}

export default ListL;
