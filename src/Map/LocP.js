import React from 'react';
import '../App.css';
import '../css/button.css';
import '../css/logoF.css';
import '../css/list.css';
import '../css/map.css';
import '../css/Loc.css'
import '../css/Search.css';
import Map from './Map';
import LocButton from './LocButton';



function LocP() {
  console.log('LocP');
  return (
    <div id="LocP">
      <LocButton />{/* 버튼 불러오기 */}
        <br /><br />
       {/* <img src={map} className="map" alt="map"/>
        공영주차장 지도 나타냄-> 지금은 이미지 이지만, 추후 지도 api로 변경 예정(7/29) */}
        <Map />
    </div>
  );
}

export default LocP;
