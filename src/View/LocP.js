import React from 'react';
import '../css/map.css';
import '../css/Loc.css'
import '../css/Search.css';
import mapBtn from '../images/map.svg';
import {Link} from 'react-router-dom';
import KeyMap from './KeyMap';
import Nav from '../Nav';



function LocP() {
  console.log('LocP');
  return (
    <div id="LocP">
          <Nav/>
      <Link to='/listp'><img src={mapBtn} id="mapBtn" style={{width:"50px",height:"50px"}} alt="mapBtn"/></Link>
        <br /><br />
       {/* <img src={map} className="map" alt="map"/>
        공영주차장 지도 나타냄-> 지금은 이미지 이지만, 추후 지도 api로 변경 예정(7/29) */}
        <KeyMap />
    </div>
  );
}

export default LocP;
