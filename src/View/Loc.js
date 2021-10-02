/*global kakao*/ 
import React,{useState,useEffect} from 'react';
import { Map,MapMarker} from 'react-kakao-maps-sdk';


function Loc(props) {

  console.log('LocButton');
  
  console.log(props);
  const [info, setInfo] = useState()
  const [markers, setMarkers] = useState([])
  const [map, setMap] = useState()
  var key;
  
  
  useEffect(()=>
  //  const getData = ()=>
  {
    {true&&
      props.state.info.data === undefined?<br/>:
            props.state.info.data.map((item) => {
    if (!map) return

    const ps = new kakao.maps.services.Places()
  
    ps.keywordSearch("안심식당", AnsimSearch)
    
    function AnsimSearch(data, status, _pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        let bounds = new kakao.maps.LatLngBounds()
        
        let markers = []
  
       
          // @ts-ignore
          markers.push({
            position: {
              lat: item.lat,
              lng: item.lon,
            },
            content: item.address1,
            name: item.workplacename,
          })
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(item.lon,item.lat))
       
        setMarkers(markers)
  
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds)
      }
    }
  })			
}
  }, [map])
  
  return (
    <div id="Loc">
    {/*<LocButton /> 버튼 불러오기 */}
      <br /><br />
 
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
    
      </div>
  )
           
 
}

export default Loc;
