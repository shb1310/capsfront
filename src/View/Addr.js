import React,{useState,useEffect} from 'react';
import '../App.css';
import '../css/button.css';
import '../css/logoF.css';
import '../css/list.css';
import '../css/map.css';
import '../css/Loc.css'
import '../css/Search.css';
import { Map,MapMarker,RoadviewMarker,Roadview} from 'react-kakao-maps-sdk';
import axios from 'axios';
import LocButton from './LocButton';


function Addr(props) {


  console.log('Loc');
  
  console.log(props);
 
  var key;

  if (props.state === undefined){ 	
	key = "unkey";
}
  else{
	key =  props.state['key'];
}
//  var deps;
  const [info, setInfo] = useState([]);	  
//  const request = axios
var urls = ["http://127.0.0.1:8000/testapp/ansimapi"
,"http://testproj-env.eba-gzdtgprf.ap-northeast-2.elasticbeanstalk.com/testapp/ansimapi"]


const parameterstest = {
	options : 'dw',
	wardname: '',
	workplacename: null,
	categorydetail: key,
  lat:null,
  lon:null,
}
 	useEffect(()=>
//  const getData = ()=>
	{
    axios.get(urls[1], {
      params: parameterstest 
  })
  	.then(res => {setInfo(res.data); console.log(res.data)})
  	.catch(err => console.log(err))
  },{deps:[]})
  
  const [toggle, setToggle] = useState("map");

  const placePosition = {
    lat: 37.60338600012247, 
    lng: 126.9553807460394,
  }
  

  return (
    
    <div id="Loc">
      <LocButton />{/* 버튼 불러오기 */}
        <br /><br />
   
   <div style={{ width: "100%", height: "600px", position: "relative" }}>
              
     <Map // 로드뷰를 표시할 Container
       center={placePosition}
       style={{
         display: toggle === "map" ? "block" : "none",
         width: "100%",
         height: "100%",
       }}
       level={10}
     >
      
         
       <MapMarker position={placePosition} />
       
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
    </div>
  )
}

export default Addr;
