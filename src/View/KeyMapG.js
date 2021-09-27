/*global kakao*/ 
import React,{useState,useEffect} from 'react';
import '../App.css';
import '../css/button.css';
import '../css/logoF.css';
import '../css/list.css';
import '../css/map.css';
import '../css/Loc.css'
import '../css/Search.css';
import { Map,MapMarker} from 'react-kakao-maps-sdk';


function KeyMapG(props) {
const [info, setInfo] = useState()
const [markers, setMarkers] = useState([])
const [map, setMap] = useState()
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

useEffect(() => {
  if (!map) return
  const ps = new kakao.maps.services.Places()

  ps.keywordSearch("안심식당", (data, status, _pagination) => {
    if (status === kakao.maps.services.Status.OK) {
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
      // LatLngBounds 객체에 좌표를 추가합니다
      const bounds = new kakao.maps.LatLngBounds()
      let markers = []

      for (var i = 0; i < data.length; i++) {
        // @ts-ignore
        markers.push({
          position: {
            lat: data[i].y,
            lng: data[i].x,
          },
          content: data[i].address_name ,
          name: data[i].place_name,
        })
        // @ts-ignore
        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
      }
      setMarkers(markers)

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      map.setBounds(bounds)
    }
  })
}, [map])

return (
  <Map // 로드뷰를 표시할 Container
    center={state.center}
    style={{
      width: "100%",
      height: "650px",
    }}
    level={2}
    onCreate={setMap}
  >
    {markers.map((marker) => (
      <MapMarker
        key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
        position={marker.position}
        onClick={() => setInfo(marker)}
      >
        {info &&info.content === marker.content && (
          <div style={{color:"#000", width:"350px",height:"30px"}}>{marker.name}:{marker.content}</div>
        )}
      </MapMarker>
    ))}
     {!state.isLoading && (
          <MapMarker position={state.center}  image={{
            src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
            size: {
              width: 64,
              height: 69,
            }, // 마커이미지의 크기입니다
            options: {
              offset: {
                x: 27,
                y: 69,
              }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
            },
          }}>
            <div style={{ padding: "5px", color: "#000" }}>
              {state.errMsg ? state.errMsg : "여기에 계신가요?!"}
            </div>
          </MapMarker>
           )}
  </Map>
  
)
        }
 export default KeyMapG;        