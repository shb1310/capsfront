/*global kakao*/ 
import React,{useState} from 'react';
import { Map,MapMarker,Roadview,RoadviewMarker} from 'react-kakao-maps-sdk';
import '../css/overlay.css';

const MapView=(props)=>{
  const [toggle, setToggle] = useState("map")

  const placePosition = {
    lat: 33.450701,
    lng: 126.570667,
  }

  
  return (
    <div style={{position: "absolute", left: "250px",top: "500px", width: "1200px", height: "600px" }}>
      <Map // 로드뷰를 표시할 Container
        center={placePosition}
        style={{
          display: toggle === "map" ? "block" : "none",
          width: "100%",
          height: "100%",
        }}
        level={3}
      >
        <MapMarker position={placePosition} />
        {toggle === "map" && (
          <input
            style={{
              position: "absolute",
              top: "5px",
              left: "5px",
              zIndex: 10,
              backgroundColor:'white',
              color:'black',
              width:'100px',
              height:'50px',
            }}
            type="button"
            onClick={() => setToggle("roadview")}
            title="로드뷰 보기"
            value="로드뷰"
          />
        )}
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
              backgroundColor:'white',
              color:'black',
              width:'100px',
              height:'50px',
            }}
            type="button"
            onClick={() => setToggle("map")}
            title="지도 보기"
            value="지도"
          />
        )}
      </Roadview>
    </div>
  )
        }
export default MapView;