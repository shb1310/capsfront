/*global kakao*/ 
import React,{useState,useEffect} from 'react';
import { Map,MapMarker } from 'react-kakao-maps-sdk';
import '../css/overlay.css';
import '../css/InfoMap.css';


function InfoMap(props){
 /* var key;

  if (props.location.state === undefined){ 	
	key = "unkey";
}
  else{
	key =  props.location.state['key'];
}
//  var deps;
  const [info, setInfo] = useState([]);	  
//  const request = axios
 	useEffect(()=>
//  const getData = ()=>
	{
   
	axios.get("http://testproj-env.eba-gzdtgprf.ap-northeast-2.elasticbeanstalk.com/testapp/ansimapi", {
	params: {
		prid: key,
		pname: 'pname'
	}
  
  })
  	.then(res => setInfo(res.data))
  	.catch(err => console.log(err))
  },{deps:[]})*/
    return (
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "450px",
        }}
        level={4} // 지도의 확대 레벨
      >
        <MapMarker // 마커를 생성합니다
          position={{
            // 마커가 표시될 위치입니다
            lat: 33.450701,
            lng: 126.570667,
          }}
        />
      </Map>
    )
  }

export default InfoMap;