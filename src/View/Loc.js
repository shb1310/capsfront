/*global kakao*/ 
import React,{useEffect} from 'react';


function Loc(props) {
  useEffect(()=>
  //  const getData = ()=>
  {
    var infowindow = new kakao.maps.InfoWindow({zIndex:1});
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.60450771132806, 126.92827091218756), // 지도의 중심좌표
        level: 7 // 지도의 확대 레벨
    };  
  

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 

var coords;
    <React.Fragment>
    {
         props.state.info === undefined?<br/>:
         props.state.info.map((item) => {
            coords = new kakao.maps.LatLng(item.lat, item.lon);
    
    console.log(item.workplacename,item.address1);
    displayMarker(item);
   
// 지도에 마커를 표시하는 함수입니다
function displayMarker(item) {
  // 마커를 생성하고 지도에 표시합니다
  var marker = new kakao.maps.Marker({
    map: map, // 마커를 표시할 지도
    position: new kakao.maps.LatLng(item.lat, item.lon), // 마커를 표시할 위치
    title : item.workplacename, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
  });

  // 마커에 클릭이벤트를 등록합니다
  kakao.maps.event.addListener(marker, 'click', function() {
      // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
      infowindow.setContent('<div style="padding:5px;font-size:12px;">' + item.workplacename+'<br/>'+item.address1+'</div>');
      infowindow.open(map, marker);
  });
 
		
}

         })			
}

</React.Fragment>; 

}, )
return (
    <div id="map" style={{width:"100%",height:"550px"}}></div> 
)   

 
}

export default Loc;