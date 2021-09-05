
/*global kakao*/ 
import React, { useEffect } from 'react'



const Map=()=>{

  useEffect(()=>{
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.56682, 126.97865), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
        mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
    }; 

// 지도를 생성한다 
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 지도 타입 변경 컨트롤을 생성한다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도의 상단 우측에 지도 타입 변경 컨트롤을 추가한다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);	

// 지도에 확대 축소 컨트롤을 생성한다
var zoomControl = new kakao.maps.ZoomControl();

// 지도의 우측에 확대 축소 컨트롤을 추가한다
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 지도 중심 좌표 변화 이벤트를 등록한다
kakao.maps.event.addListener(map, 'center_changed', function () {
  console.log('지도의 중심 좌표는 ' + map.getCenter().toString() +' 입니다.');
});

// 지도 확대 레벨 변화 이벤트를 등록한다
kakao.maps.event.addListener(map, 'zoom_changed', function () {
  console.log('지도의 현재 확대레벨은 ' + map.getLevel() +'레벨 입니다.');
});

// 지도 영역 변화 이벤트를 등록한다
kakao.maps.event.addListener(map, 'bounds_changed', function () {
  var mapBounds = map.getBounds(),
    message = '지도의 남서쪽, 북동쪽 영역좌표는 ' +
          mapBounds.toString() + '입니다.';

  console.log(message);	
});

// 지도 시점 변화 완료 이벤트를 등록한다
kakao.maps.event.addListener(map, 'idle', function () {
  var message = '지도의 중심좌표는 ' + map.getCenter().toString() + ' 이고,' + 
          '확대 레벨은 ' + map.getLevel() + ' 레벨 입니다.';
  console.log(message);
});

// 지도 클릭 이벤트를 등록한다 (좌클릭 : click, 우클릭 : rightclick, 더블클릭 : dblclick)
kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
  console.log('지도에서 클릭한 위치의 좌표는 ' + mouseEvent.latLng.toString() + ' 입니다.');
});	

// 지도 드래깅 이벤트를 등록한다 (드래그 시작 : dragstart, 드래그 종료 : dragend)
kakao.maps.event.addListener(map, 'drag', function () {
  var message = '지도를 드래그 하고 있습니다. ' + 
          '지도의 중심 좌표는 ' + map.getCenter().toString() +' 입니다.';
  console.log(message);
});

// 지도에 마커를 생성하고 표시한다
var marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.56682, 126.97865), // 마커의 좌표
    draggable : true, // 마커를 드래그 가능하도록 설정한다
    map: map // 마커를 표시할 지도 객체
});

// 마커 위에 표시할 인포윈도우를 생성한다
var infowindow = new kakao.maps.InfoWindow({
    content : '<div style="padding:5px;">인포윈도우 :D</div>' // 인포윈도우에 표시할 내용
});

// 인포윈도우를 지도에 표시한다
infowindow.open(map, marker);

// 마커에 클릭 이벤트를 등록한다 (우클릭 : rightclick)
kakao.maps.event.addListener(marker, 'click', function() {
    alert('마커를 클릭했습니다!');
});

// 마커에 mouseover 이벤트를 등록한다
kakao.maps.event.addListener(marker, 'mouseover', function() {
    console.log('마커에 mouseover 이벤트가 발생했습니다!');
});

// 마커에 mouseout 이벤트 등록
kakao.maps.event.addListener(marker, 'mouseout', function() {
    console.log('마커에 mouseout 이벤트가 발생했습니다!');
});

// 마커에 dragstart 이벤트 등록
kakao.maps.event.addListener(marker, 'dragstart', function() {
    console.log('마커에 dragstart 이벤트가 발생했습니다!');
});

// 마커에 dragend 이벤트 등록
kakao.maps.event.addListener(marker, 'dragend', function() {
    console.log('마커에 dragend 이벤트가 발생했습니다!');
});

//로드뷰를 표시할 div
var roadviewContainer = document.getElementById('roadview'); 

// 로드뷰 위치
var rvPosition = new kakao.maps.LatLng(37.56613, 126.97837);

//로드뷰 객체를 생성한다
var roadview = new kakao.maps.Roadview(roadviewContainer, {
  panoId : 1050215190, // 로드뷰 시작 지역의 고유 아이디 값
  panoX : 126.97837, // panoId가 유효하지 않을 경우 지도좌표를 기반으로 데이터를 요청할 수평 좌표값
  panoY : 37.56613, // panoId가 유효하지 않을 경우 지도좌표를 기반으로 데이터를 요청할 수직 좌표값
  pan: 68, // 로드뷰 처음 실행시에 바라봐야 할 수평 각
  tilt: 1, // 로드뷰 처음 실행시에 바라봐야 할 수직 각
  zoom: -1 // 로드뷰 줌 초기값
}); 

// 로드뷰 초기화가 완료되었을 때 로드뷰에 마커나 커스텀오버레이를 표시한다
kakao.maps.event.addListener(roadview, 'init', function() {
});

// 로드뷰 초기화 완료 이벤트를 등록한다
kakao.maps.event.addListener(roadview, 'init', function() {
    console.log('로드뷰 초기화가 완료되었습니다');
});

// 로드뷰 파노라마 ID 변화 이벤트를 등록한다
kakao.maps.event.addListener(roadview, 'panoid_changed', function() {
    console.log('로드뷰의 파노라마 ID가 변경되었습니다');
});

// 로드뷰 시점 변화 이벤트를 등록한다
kakao.maps.event.addListener(roadview, 'viewpoint_changed', function() {
  console.log('로드뷰 시점이 변경되었습니다');
});

// 로드뷰 지도 좌표 변화 이벤트를 등록한다
kakao.maps.event.addListener(roadview, 'position_changed', function() {
    console.log('로드뷰 좌표가 변경되었습니다');
});

  marker.setMap(map);

    }, [])


    return (
        <div>
        <div id="map" style={{width:"500px", height:"400px"}}></div>
        <div id="roadview" style={{width:"750px", height:"350px"}}></div>
        </div>
    )
}


export default Map;
