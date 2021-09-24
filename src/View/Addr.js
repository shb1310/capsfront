import { Map,MapMarker,RoadviewMarker,Roadview, } from 'react-kakao-maps-sdk';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import LocButton from './LocButton';

function Addr(props){
  console.log('Addr');
  console.log(props);
 
  //  var deps;
  const [info, setInfo] = useState([]);	 

  var key;
 
  if (props.key === undefined){ 	
		key = "unkey";

}
  else{
	key =  props.state['key'];
}

var urls = ["http://127.0.0.1:8000/testapp/testapi"
,"http://testproj-env.eba-gzdtgprf.ap-northeast-2.elasticbeanstalk.com/testapp/ansimapi"
,"http://testproj-env.eba-gzdtgprf.ap-northeast-2.elasticbeanstalk.com/testapp/testapi"]

//  const request = axios
useEffect(()=>
//  const getData = ()=>
{

axios.get(urls[2], {
params: {
prid: 'd',
content: key
}

})
.then(res => setInfo(res.data))
.catch(err => console.log(err))
},{deps:[]})

  
  const [toggle, setToggle] = useState("map");

  const placePosition = {
    lat: 37.60276973035844,
    lng: 126.570667,
  }

  return (
    <>
       <LocButton/>
    <div style={{ width: "100%", height: "300px", position: "relative" }}>
               
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
      level={3} // 지도의 확대 레벨
    >
      {info.map(item => (
        <MapMarker
   
          position={{ lat: item.lat, lng: item.lon }} // 마커를 표시할 위치
          image={{
            src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
            size: {
              widht: 24,
              height: 35
            }, // 마커이미지의 크기입니다
          }}
          title={item.workplacename} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        />
      ))}
    </Map>
   
      <Roadview // 로드뷰를 표시할 Container
        position={{ ...placePosition, radius: 50 }}
        style={{
          display: toggle === "roadview" ? "block" : "none",
          width: "100%",
          height: "100%",
        }}
      >
        <RoadviewMarker position={placePosition} />
        {toggle === "roadview" && (
          <input
            style={{
              position: "absolute",
              top: "5px",
              left: "5px",
              zIndex: 10,
            }}
            type="button"
            onClick={() => setToggle("map")}
            title="지도 보기"
            value="지도"
          />
        )}
      </Roadview>
      

    </div>
   </>
  )
  
}

export default Addr;