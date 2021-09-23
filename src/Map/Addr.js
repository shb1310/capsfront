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
 
  if (props.location.state === undefined){ 	
		key = "unkey";

}
  else{
	key =  props.location.state['key'];
}

//  const request = axios
 	useEffect(()=>
//  const getData = ()=>
	{
   
	axios.get("http://testproj-env.eba-gzdtgprf.ap-northeast-2.elasticbeanstalk.com/testapp/ansimapi", {
	params: {
		prid: key,
		pname: 'pname'
	}
  
  })
  	.then(res => setInfo(res.data))
  	.catch(err => console.log(err))
  },[info]).bind(this);
  
  

  const [toggle, setToggle] = useState("map");

  const placePosition = {
    lat: 33.450701,
    lng: 126.570667,
  }

  return (
    <>
    <LocButton/>
    <div style={{ width: "100%", height: "300px", position: "relative" }}>
               
      <Map // 로드뷰를 표시할 Container
        center={placePosition}
        style={{
          display: toggle === "map" ? "block" : "none",
          width: "100%",
          height: "100%",
        }}
        level={3}
      >
          {
          	info.map(item => {return( 
        <MapMarker lat={item.lat} lng={item.lon} />
        
        )
      })			
}
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