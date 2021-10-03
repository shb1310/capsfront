/*global kakao*/ 
import React,{useState,useEffect} from 'react';
import { Map,MapMarker} from 'react-kakao-maps-sdk';
import axios from 'axios';

function KeyMap(props) {
const [info, setInfo] = useState()
const [markers, setMarkers] = useState([])
const [map, setMap] = useState()
var key;

if (props.state === undefined){ 	
key = "unkey";
}
else{
key =  props.state['key'];
}
  
//  const request = axios
var urls = ["http://127.0.0.1:8000/testapp/ansimapi"
,"http://testproj-env.eba-gzdtgprf.ap-northeast-2.elasticbeanstalk.com/testapp/ansimapi"]


var parameterstest = {
options : 'dg',
lat:0,
lon:0,
range:0.05,
categorydetail: key
}
 useEffect(()=>
//  const getData = ()=>
{
 
  axios.get(urls[1], {
    params: parameterstest 
})
  .then(res => {setInfo(res.data);
  console.log(res);
  })
  .catch(err => console.log(err))
},[])


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
  id="Map"  
  center={{
      lat: 37.566826,
      lng: 126.9786567,
    }}
    style={{
      width: "100%",
      height: "650px",
    }}
    level={3}
    onCreate={setMap}
  >
    {markers.map((marker) => (
      <MapMarker
        key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
        position={marker.position}
        onClick={() => setInfo(marker)}
      >
        {info &&info.content === marker.content && (
          <div id="wrap" style={{color:"#000", width:"350px",height:"30px"}}>{marker.name}:{marker.content}</div>
        )}
      </MapMarker>
    ))}
  </Map>
  
)
        }
 export default KeyMap;        