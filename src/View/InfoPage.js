/*global kakao*/ 
import React,{useEffect} from 'react';



function InfoPage({match,history}){
     
    function copy() {
      
          const selBox = document.createElement('textarea');
          selBox.style.position = 'fixed';
          selBox.style.left = '0';
          selBox.style.top = '0';
          selBox.style.opacity = '0';
          selBox.value =match.params.tel;
          
          document.body.appendChild(selBox);
          selBox.focus();
          selBox.select();
          
          document.execCommand('copy');
          document.body.removeChild(selBox);
  
            }
          
    const goBack = () => {
        history.goBack();
      };
      useEffect(()=>
      //  const getData = ()=>
      {
       
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
            center: new kakao.maps.LatLng(37.60450771132806, 126.92827091218756), // 지도의 중심좌표
            level: 7 // 지도의 확대 레벨
        };  
    
    // 지도를 생성합니다    
    var map = new kakao.maps.Map(mapContainer, mapOption); 
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    var imageSize,markerImage,marker,infowindow,coords;
        
                coords = new kakao.maps.LatLng(match.params.lat, match.params.lon);
        // 마커 이미지의 이미지 크기 입니다
             imageSize = new kakao.maps.Size(24, 35); 
        // 마커 이미지를 생성합니다    
          markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
        // var coords = new kakao.maps.LatLng(item.lon, item.lat);
        console.log(match.params.workplacename,match.params.address1);
       // 마커를 생성합니다
       marker = new kakao.maps.Marker({
           map: map, // 마커를 표시할 지도
           position: new kakao.maps.LatLng(match.params.lat, match.params.lon), // 마커를 표시할 위치
           title : match.params.workplacename, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
           image : markerImage // 마커 이미지 
       });
        
    // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
     
    // 인포윈도우를 생성합니다
     infowindow = new kakao.maps.InfoWindow({
    content :  '<div style="width:350px;text-align:center;padding:6px 0;">'+match.params.workplacename+'<br/>'+match.params.address1+'</div>',
    removable : true
    });
    
    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
      // 마커 위에 인포윈도우를 표시합니다
      infowindow.open(map, marker);  
    }
    
              )
               // 인포윈도우로 장소에 대한 설명을 표시합니다
          /*  var infowindow = new kakao.maps.InfoWindow({
                content: '<div style="width:350px;text-align:center;padding:6px 0;">'+item.workplacename+'<br/>'+item.address1+'</div>'
            });
            infowindow.open(map, marker);*/
            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
    
    
    }, )
  //const { ansimseq } = props.params;
    return(
        
     <>
         <div id="map" style={{width:"350px",height:"350px",zIndex:-1}}></div> 
          
        <div>
         식당 이름: {match.params.workplace}<br/>
         식당 주소:{match.params.address1}{match.params.address2}<br/>
         식당 전화번호: {match.params.tel}</div>
        
     <button className="return" onClick={goBack} 
     style={{backgroundColor:"black", color:"white"}}>리스트로 돌아가기</button>
     <button className="return" onClick={copy} 
     style={{backgroundColor:"black", color:"white"}}>전화번호 복사하기</button>

        </>
   

    )
}

export default InfoPage;