/*global kakao*/ 
import React,{useEffect} from 'react';


function Loc(props,{type}) {
  useEffect(()=>
  //  const getData = ()=>
  {
    const type=props.type;
    console.log(type);
        var infowindow = new kakao.maps.InfoWindow({zIndex:1});
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.60450771132806, 126.92827091218756), // 지도의 중심좌표
        level: 7 // 지도의 확대 레벨
    };  
    
var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다    
imageSize = new kakao.maps.Size(34, 39), // 마커이미지의 크기입니다
imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 
// 마커 이미지의 이미지 주소입니다
var image = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
var imageSize = new kakao.maps.Size(24, 29);
<React.Fragment>
{
     props.state.pinfo === undefined?<br/>:
     props.state.pinfo.map((pitem) => {
     console.log(pitem.ppname);
      // 지도에 마커를 표시하는 함수입니다
function displayMarkerP(pitem) {
  // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
  
var markerImage = new kakao.maps.MarkerImage(image, imageSize, imageOption); 
// 마커를 생성하고 지도에 표시합니다
var marker = new kakao.maps.Marker({
  map: map, // 마커를 표시할 지도
  position: new kakao.maps.LatLng(pitem.lat, pitem.lon), // 마커를 표시할 위치
  image: markerImage, // 마커이미지 설정 
  title :pitem.ppname, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
});

// 마커에 클릭이벤트를 등록합니다
kakao.maps.event.addListener(marker, 'click', function() {
    // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
    infowindow.setContent('<div style="padding:5px;font-size:12px;width:300px;">' +
     pitem.ppname+'<br/>'+pitem.ppaddress1+pitem.ppaddress2+ '<br/>'+pitem.tel+'<br/>'+
    '운영요일: '+pitem.opdays+'<br/>'+
    '</div>');
    infowindow.open(map, marker);
});
     }
     displayMarkerP(pitem);
    })
     
    }

    {
         props.state.info === undefined?<br/>:
         props.state.info.map((item) => {
           
          var  coords = new kakao.maps.LatLng(item.lat, item.lon);
    
   // console.log(item.workplacename,item.address1);
 
// HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
//if (navigator.geolocation) {
    if(type==='G'){
  // GeoLocation을 이용해서 접속 위치를 얻어옵니다
  navigator.geolocation.getCurrentPosition(function(position) {
      
      var locPosition = new kakao.maps.LatLng(position.coords.latitude,position.coords.longitude), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
          message = '<div style="padding:5px;width:100px;">현재위치</div>'; // 인포윈도우에 표시될 내용입니다
      
      // 마커와 인포윈도우를 표시합니다
      displayMarkerG(locPosition, message);
      displayMarker(item); 
         
    });
  
} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
  

  displayMarker(item);
}
    


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
  var Position=new kakao.maps.LatLng(item.lat, item.lon);
  // 마커를 생성하고 지도에 표시합니다
  var marker = new kakao.maps.Marker({
    map: map, // 마커를 표시할 지도
    position: Position, // 마커를 표시할 위치
    title : item.workplacename, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
  });

  // 마커에 클릭이벤트를 등록합니다
  kakao.maps.event.addListener(marker, 'click', function() {
      // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
      infowindow.setContent('<div style="padding:5px;font-size:12px;width:300px;">' + item.workplacename+'<br/>'+item.address1+'<br/>'+item.tel+'</div>');
      infowindow.open(map, marker);
  });
 
  map.setCenter(Position);   
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