/*geolocation으로 마커 표시하기 */
/*global kakao*/ 
import React, { useState,useEffect ,setCenter} from 'react';
import { Map,MapMarker,Roadview,RoadviewMarker} from 'react-kakao-maps-sdk';
import '../css/Loc.css'

const MapG=()=>{
    const [toggle, setToggle] = useState("map")

  const placePosition = {
    lat: 33.450701,
    lng: 126.570667,
  }
  const [position, setPosition] = useState()

    const [state, setState] = useState({
        center: {
          lat: 33.450701,
          lng: 126.570667,
        },
        errMsg: null,
        isLoading: true,
      })
    
      useEffect(() => {
        if (navigator.geolocation) {
          // GeoLocation을 이용해서 접속 위치를 얻어옵니다
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setState((prev) => ({
                ...prev,
                center: {
                  lat: position.coords.latitude, // 위도
                  lng: position.coords.longitude, // 경도
                },
                isLoading: false,
              }))
            },
            (err) => {
              setState((prev) => ({
                ...prev,
                errMsg: err.message,
                isLoading: false,
              }))
            }
          )
        } else {
          // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
          setState((prev) => ({
            ...prev,
            errMsg: "geolocation을 사용할수 없어요..",
            isLoading: false,
          }))
        }
      }, [])
    
      return (
        <div style={{ width: "100%", height: "300px", position: "relative" }}>
          <Map // 지도를 표시할 Container
            center={state.center}
            style={{
                display: toggle === "map" ? "block" : "none",
              // 지도의 크기
              width: "100%",
              height: "450px",
            }}
            level={3} // 지도의 확대 레벨
            onDragEnd={(map) => setPosition({
                lat: map.getCenter().getLat(),
                lng: map.getCenter().getLng(),
              })}
          >
            {!state.isLoading && (
              <MapMarker position={state.center}>
                <div style={{ padding: "5px", color: "#000" }}>
                  {state.errMsg ? state.errMsg : "여기에 계신가요?!"}
                </div>
              </MapMarker>
            )}
              {toggle === "map" && (
          <input
            style={{
              position: "absolute",
              top: "5px",
              left: "5px",
              zIndex: 10,
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
     onPositionChanged={(roadview) =>
        setState({
            center: { lat: 33.45058, lng: 126.574942 },
            isPanto: true,
          })}
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
      )
}

export default MapG;