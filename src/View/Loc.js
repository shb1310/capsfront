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
    
var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다    
imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 

var coords;
    <React.Fragment>
    {
         props.state.info === undefined?<br/>:
         props.state.info.map((item) => {
            coords = new kakao.maps.LatLng(item.lat, item.lon);
    
    console.log(item.workplacename,item.address1);
 
// HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
if (navigator.geolocation) {
    
  // GeoLocation을 이용해서 접속 위치를 얻어옵니다
  navigator.geolocation.getCurrentPosition(function(position) {
      
    /*  var lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도*/
      
      var locPosition = new kakao.maps.LatLng(position.coords.latitude,position.coords.longitude), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
          message = '<div style="padding:5px;width:100px;">현재위치</div>'; // 인포윈도우에 표시될 내용입니다
      
      // 마커와 인포윈도우를 표시합니다
      displayMarkerG(locPosition, message);
          
    });
  
} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
  
  var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
      message = 'geolocation을 사용할수 없어요..'
      
  displayMarkerG(locPosition, message);
}
    displayMarker(item);


// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarkerG(locPosition, message) {
  
// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
markerPosition = locPosition; // 마커가 표시될 위치입니다
  
  
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({  
      map: map, 
      position: locPosition,
      image: markerImage // 마커이미지 설정 
  }); 
  
  var iwContent = message, // 인포윈도우에 표시할 내용
      iwRemoveable = true;

  // 인포윈도우를 생성합니다
  var infowindow = new kakao.maps.InfoWindow({
      content : iwContent,
      removable : iwRemoveable
  });
  
  // 인포윈도우를 마커위에 표시합니다 
  infowindow.open(map, marker);
  
  // 지도 중심좌표를 접속위치로 변경합니다
  map.setCenter(locPosition);      
         
  }   

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
      infowindow.setContent('<div style="padding:5px;font-size:12px;width:300px;">' + item.workplacename+'<br/>'+item.address1+'</div>');
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