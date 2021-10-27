import React, {Component} from 'react';
import '../css/button.css';
import {Link} from 'react-router-dom';
import '../App.css';
import '../css/button.css';
import '../css/logoF.css';
import '../css/list.css';
import List from './List';
import Loc from './Loc';
import Nav from '../pages/Nav';
import axios from 'axios';
import Footer from '../pages/Footer';


class Main extends Component {
	
	componentDidMount(){
		if(this.key==='G'){
			navigator.geolocation.getCurrentPosition(
				(position)=>{
					this.setState(prevState =>({			
						parameters:{
						...prevState.parameters,
						lat:position.coords.latitude,
						lon:position.coords.longitude,
						range:0.05 },				
						})
					)
				}	
			)
			
			this.setOptions("g");
		}
	}
	constructor(props) {
		super(props);
		console.log(props.match.params.key);
		this.state = {loc:false, parameters:{options:'',wardname:'',key:this.key, range:0.1,
		}};
		this.setCd = this.setCd.bind(this);
		this.setLoc = this.setLoc.bind(this);
		this.getData = this.getData.bind(this);
		this.latitude=0.0;
		this.longitude=0.0;
		this.categoryOnClick = this.categoryOnClick.bind(this);
		this.key=props.match.params.key;
		this.event = false
		this.urls = ["http://test-proj-dev.ap-northeast-2.elasticbeanstalk.com/testapp/ansimapi",
		"http://test-proj-dev.ap-northeast-2.elasticbeanstalk.com/testapp/publicpapi"]
		
	}
/*	getGeo(){
	
	this.setGeo(this.state.lat,this.state.lon);
	}	
	setGeo(latG,lonG){
			this.setState(prevState =>({			
				parameters:{
					...prevState.parameters,
					lat:latG,
					lon:lonG,
					range:0.05
					},
				
				})
			)
			this.setOptions("dg");
		}*/
		
	getData() {		
		if(this.isEvent()){
			this.getdata = axios.get(this.urls[0], {
    		params: this.state.parameters
  			})
  			.then(res => this.setState({info:res.data}))
  			.catch(err => console.log(err));
			  this.getdata = axios.get(this.urls[1], {
				params: this.state.parameters
				  })
				  .then(res => this.setState({pinfo:res.data}))
				  .catch(err => console.log(err));
			  
		this.setEvent();
		}	

	}

	setOptions(op) {
		if (this.state.parameters.options === undefined){
			this.setState(prevState =>({			
				parameters:{
					...prevState.parameters,
					options:op
					},
				
				})
			)
		}
		else{
			this.setState(prevState =>({			
				parameters:{
					...prevState.parameters,
					options:this.state.parameters.options + op}
				})
			)
		}
		
	}

	setCd(cd) {		
		if (this.state.parameters.categorydetail === undefined){
			this.setOptions("d")
			
		}
		this.setState(prevState =>({			
			parameters:{
				...prevState.parameters,
				categorydetail:cd}
			})
		)			
	}
		
	setLoc() {
		this.setState(prevState =>({loc:!prevState.loc}))
		}

	
	isEvent() {		
		return this.event
	}
	
	setEvent() {
		this.event = !this.event
	}
	
	categoryOnClick(cd) {
		
		this.setCd(cd);
		this.setEvent();
	}
	
	render()
	{


    return(
              <div id="button">{/*버튼 전체에 대한 div*/}
              <Nav/>
			
           <div id="button1">{/*한식, 중식, 일식, 서양식에 대한 버튼 -> 각 페이지로 이동 */}
           <button id="한식" value="한식" onClick = {() => this.categoryOnClick("한식")}>한식</button>
           <button id="중식" value="중식" onClick = {() => this.categoryOnClick("중식")}>중식</button>
           <button id="일식" value="일식" onClick = {() => this.categoryOnClick("일식")}>일식</button>
           <button id="서양식" value="서양식" onClick = {() => this.categoryOnClick("서양식")}>서양식</button>
          </div> 
          
          <div id="button2"> {/*기타, 즐겨찾기, 공영주차장에 대한 버튼->각 페이지로 이동 (즐겨찾기 추후 삭제 예정) */} 
          <button id="기타외국식" value="기타외국식" onClick = {() => this.categoryOnClick("기타외국식")}> 기타외국식</button>
          <button id="기타_음식점업" value="기타 음식점업" onClick = {() => this.categoryOnClick("기타 음식점업")}>기타 음식점업</button>   
          </div>

          <div className="search">{/* 검색창에 대한 div*/}
		  <button id="choice" onClick = {() => this.setLoc()} 
		  style={{width:"200px", height:"50px", backgroundColor:"black",color:"white",fontSize:"20px", borderRadius:"20px", marginLeft:"-20px" }}>
			  {this.state.loc?"목록으로 보기":"지도로 보기"}</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		
        
           </div>
			<div id = "test">
			{this.getData()}
			{this.state.loc?<Loc state={this.state} type={this.key}/>:<List state={this.state}/>}
			</div>
			<Footer/>
        </div>


    );
	}
}
//		

export default Main;