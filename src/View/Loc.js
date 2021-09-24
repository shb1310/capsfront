import React,{useState,useEffect} from 'react';
import '../App.css';
import '../css/button.css';
import '../css/logoF.css';
import '../css/list.css';
import '../css/map.css';
import '../css/Loc.css'
import '../css/Search.css';
import { Map,MapMarker,RoadviewMarker,Roadview} from 'react-kakao-maps-sdk';
import axios from 'axios';
import KeyMap from './KeyMap'
import LocButton from './LocButton';


function Loc(props) {


  console.log('Loc');
  
  console.log(props);
 
 
  return (
    
    <div id="Loc">
      <LocButton />{/* 버튼 불러오기 */}
        <br /><br />
   
    <KeyMap/>
    </div>
  )
}

export default Loc;
