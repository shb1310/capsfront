/*global kakao*/ 
import React, { useEffect/*,useState*/ } from 'react'
import '../css/Loc.css'
import '../css/overlay.css'

const InfoMap=()=>{

  useEffect(()=>{
    var mapWrapper = document.getElementById('mapWrapper'); //지도를 감싸고 있는 DIV태그
    var infowindow = new kakao.maps.InfoWindow();
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

// 드래그가 가능한 마커를 생성합니다.
var rvMarker = new kakao.maps.Marker({
    image : markImage,
    position: mapCenter,
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

//로드뷰 toggle함수
function toggleRoadview(position){

    //전달받은 좌표(position)에 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄웁니다
    rvClient.getNearestPanoId(position, 50, function(panoId) {
        if (panoId === null) {
            rvContainer.style.display = 'none'; //로드뷰를 넣은 컨테이너를 숨깁니다
            mapWrapper.style.width = '100%';
            map.relayout();
        } else {
            mapWrapper.style.width = '100%';
            map.relayout(); //지도를 감싸고 있는 영역이 변경됨에 따라, 지도를 재배열합니다
            rvContainer.style.display = 'block'; //로드뷰를 넣은 컨테이너를 보이게합니다
            rv.setPanoId(panoId, position); //panoId를 통한 로드뷰 실행
            rv.relayout(); //로드뷰를 감싸고 있는 영역이 변경됨에 따라, 로드뷰를 재배열합니다
        }
    });
}
    
// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();
var addrData = [
    '서울특별시 관악구 관악로 1', 
    '대전광역시 유성구 대학로 99', 
    '부산광역시 금정구 부산대학로63번길 2',
    '인천광역시 연수구 아카데미로 1195',
    '전라남도 무안군 청계면 영산로 1666',
    '전라북도 군산시 대학로 558',
    '서울특별시 성북구 인촌로 73',
    '서울특별시 송파구 양재대로 1239',
    '강원도 춘천시 강원대학길 1',
    '경상남도 창원시 의창구 창원대학로 20',
    '서울특별시 성북구 화랑로32길 146-37',
    '제주특별자치도 제주시 제주대학로 102',
    '인천광역시 계양구 계산로 62'
];
addrData.forEach(function(addr, index) {
    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(addr, function(result, status) {
        // 정상적으로 검색이 완료됐으면 
        if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: coords,
                clickable: true
            });
             // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, 'click', function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        // 인포윈도우로 장소에 대한 설명을 표시합니다
        infowindow.setContent(  '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            '            <div class="close" onClick="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' +            
            '            <div class="desc">' + 
            '                <div class="ellipsis" style="color:black;">'+addrData[index]+'</div>' + 
            '            </div>' + 
            '        </div>' + 
            '    </div>' +    
            '</div>')
           
        infowindow.open(map, marker);
      })
        
        } 
    });
});
    }, [])
    return (  
         
      
    <div className="map_wrap" >  
        <div id="mapWrapper" >
            <div id="map" ></div> 
        </div>
        <br/>
        <div id="rvWrapper" >
            <div id="roadview" ></div>
         </div>
    </div>
    
    )
}

export default InfoMap;