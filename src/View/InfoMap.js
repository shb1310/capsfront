/*global kakao*/
import React,{useEffect} from 'react';

function InfoMap(props){
  useEffect(()=>
  {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
var markerPosition,marker;
<React.Fragment>
{
     props.info === undefined?<br/>:
     props.info.map((item) => {
// 마커가 표시될 위치입니다 
 //markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 
//markerPosition  =  
// 마커를 생성합니다
 marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(item.lat, item.lon)
});


// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
})			
}

</React.Fragment>; 

}, )
return (
    <div id="map" style={{width:"350px",height:"350px",zIndex:-1}}></div> 
)   

  }

export default InfoMap;