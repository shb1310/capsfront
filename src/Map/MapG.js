/*geolocation으로 마커 표시하기 */
/*global kakao*/ 
import React, { useEffect } from 'react'
import '../css/Loc.css'

const MapG=()=>{
   
  useEffect(()=>{
    var mapWrapper = document.getElementById('mapWrapper'); //지도를 감싸고 있는 DIV태그

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapCenter = new kakao.maps.LatLng(37.60296100097552, 126.95503742328076), // 지도의 가운데 좌표
    mapOption = {
        center: mapCenter, // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };


// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);
map.addOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW); //지도 위에 로드뷰 도로 올리기

var rvContainer = document.getElementById('roadview'); //로드뷰를 표시할 div
var rv = new kakao.maps.Roadview(rvContainer); //로드뷰 객체
var rvClient = new kakao.maps.RoadviewClient(); //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체

toggleRoadview(mapCenter);

// 마커 이미지를 생성합니다.
var markImage = new kakao.maps.MarkerImage(
    'https://t1.daumcdn.net/localimg/localimages/07/2018/pc/roadview_minimap_wk_2018.png',
    new kakao.maps.Size(26, 46),
    {
        // 스프라이트 이미지를 사용합니다.
        // 스프라이트 이미지 전체의 크기를 지정하고
        spriteSize: new kakao.maps.Size(1666, 168),
        // 사용하고 싶은 영역의 좌상단 좌표를 입력합니다.
        // background-position으로 지정하는 값이며 부호는 반대입니다.
        spriteOrigin: new kakao.maps.Point(705, 114),
        offset: new kakao.maps.Point(13, 46)
    }
);


// HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
if (navigator.geolocation) {
    
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function(position) {
        
        var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도
        
        var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            message = '<div style="color:black;padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다
        
        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
            
      });
      
      
    
} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    
    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
        message = 'geolocation을 사용할수 없어요..'
        
    displayMarker(locPosition, message);
}

// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition, message) {

    // 드래그가 가능한 마커를 생성합니다.
    var rvMarker = new kakao.maps.Marker({
        image : markImage,
        position: locPosition,
        draggable: true,
        map: map
    });
    
    //마커에 dragend 이벤트를 할당합니다
    kakao.maps.event.addListener(rvMarker, 'dragend', function(mouseEvent) {
        var position = rvMarker.getPosition(); //현재 마커가 놓인 자리의 좌표
        toggleRoadview(position); //로드뷰를 토글합니다
    });
    
    //지도에 클릭 이벤트를 할당합니다
    kakao.maps.event.addListener(map, 'click', function(mouseEvent){
        
        // 현재 클릭한 부분의 좌표를 리턴 
        var position = mouseEvent.latLng; 
    
        rvMarker.setPosition(position);
        toggleRoadview(position); //로드뷰를 토글합니다
    });
    
      
        var iwContent = message, // 인포윈도우에 표시할 내용
            iwRemoveable = true;
    
        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
            content : iwContent,
            removable : iwRemoveable
        });
        
        // 인포윈도우를 마커위에 표시합니다 
        infowindow.open(map, rvMarker);
        
        // 지도 중심좌표를 접속위치로 변경합니다
        map.setCenter(locPosition);      
    }   

//로드뷰 toggle함수
function toggleRoadview(locPosition){

    //전달받은 좌표(position)에 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄웁니다
    rvClient.getNearestPanoId(locPosition, 50, function(panoId) {
        if (panoId === null) {
            rvContainer.style.display = 'none'; //로드뷰를 넣은 컨테이너를 숨깁니다
            mapWrapper.style.width = '100%';
            map.relayout();
        } else {
            mapWrapper.style.width = '100%';
            map.relayout(); //지도를 감싸고 있는 영역이 변경됨에 따라, 지도를 재배열합니다
            rvContainer.style.display = 'block'; //로드뷰를 넣은 컨테이너를 보이게합니다
            rv.setPanoId(panoId, locPosition); //panoId를 통한 로드뷰 실행
            rv.relayout(); //로드뷰를 감싸고 있는 영역이 변경됨에 따라, 로드뷰를 재배열합니다
        }
    });
}
    }, [])
    return (  
        <>  
  
    <div className="map_wrap" >  
        <div id="mapWrapper">
            <div id="map" ></div> 
        </div>
        <br/>
        <div id="rvWrapper" >
            <div id="roadview" ></div>
         </div>
    </div>
    </>
    )
}

export default MapG;