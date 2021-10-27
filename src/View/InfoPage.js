/*global kakao*/ 
import React,{useEffect} from 'react';
import Nav from '../pages/Nav';
import Footer from '../pages/Footer';

function InfoPage({match,history}){
function Share(){
    var shareBtn =document.getElementById("shareBtn");
  if(shareBtn){
    shareBtn.addEventListener("click",function(){
      
     
        var Title="안심식당 정보 공유";
        var Text="링크를 클릭하면 해당 상세정보 창으로 이동";
        var shareURL=" "; 

        if (navigator.share) {
            navigator.share({
              title: Title,
              text:Text,
              url: shareURL,
            }).then(() => {
              console.log('Sharing Success!!');
            })
            .catch((error)=>console.log('Error',error));
          } else {
            // fallback
            alert('공유가 실패되었습니다!');
          }
    })}
  }
     
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
            level: 4 // 지도의 확대 레벨
        };  
    
    // 지도를 생성합니다    
    var map = new kakao.maps.Map(mapContainer, mapOption); 
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
 
        
    var  coords = new kakao.maps.LatLng(match.params.lat, match.params.lon);
        // 마커 이미지의 이미지 크기 입니다
        var  imageSize = new kakao.maps.Size(24, 35); 
        // 마커 이미지를 생성합니다    
        var   markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
        // var coords = new kakao.maps.LatLng(item.lon, item.lat);
        console.log(match.params.workplacename,match.params.address1);
       // 마커를 생성합니다
       var marker = new kakao.maps.Marker({
           map: map, // 마커를 표시할 지도
           position: new kakao.maps.LatLng(match.params.lat, match.params.lon), // 마커를 표시할 위치
           title : match.params.workplacename, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
           image : markerImage // 마커 이미지 
       });
        
            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
    
    
    }, )
  
    return(
        
     <>
     <Nav />
     <div id="content">
         <div id="map" style={{width:"300px",height:"300px",position:"relative",left:"600px"}}></div> 
          <br/>
        <div id="Info">
         식당 이름: {match.params.workplace}<br/><br/>
         식당 주소:{match.params.address1}{match.params.address2}<br/><br/>
         식당 전화번호: {match.params.tel}</div>
         <br/><br/>
     <button className="return" onClick={goBack} 
     style={{backgroundColor:"black", color:"white",border:"solid",borderRadius:"20px", width:"200px",height:"50px"}}>리스트로 돌아가기</button><br/><br/>
     <button className="copy" onClick={copy} 
     style={{backgroundColor:"black", color:"white",border:"solid",borderRadius:"20px", width:"200px",height:"50px"}}>전화번호 복사하기</button><br/><br/>
  <button id="shareBtn" onClick={Share} 
     style={{backgroundColor:"black", color:"white",border:"solid",borderRadius:"20px", width:"200px",height:"50px"}}>현재 페이지 주소 공유하기</button>
     </div>
     <Footer/>

        </>
   

    )
}

export default InfoPage;