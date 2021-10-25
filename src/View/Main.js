import React, {Component} from 'react';
import '../css/button.css';
import search from '../images/search.svg';
import parking from '../images/parking.png';
import {Link} from 'react-router-dom';
import '../App.css';
import '../css/button.css';
import '../css/logoF.css';
import '../css/list.css';
import '../css/Search.css';
import List from './List';
import Loc from './Loc';
import Nav from '../pages/Nav';
import axios from 'axios';
import Footer from '../pages/Footer';


class Main extends Component {
		
	constructor(props) {
		super(props);
	/*	// GeoLocation을 이용해서 접속 위치를 얻어옵니다
	navigator.geolocation.getCurrentPosition(function(position) {
		
	    const latitude = position.coords.latitude; // 위도
		const longitude = position.coords.longitude; // 경도
			
	  });*/
		this.state = {loc:false, parameters:{options:"dg",wardname:'',
		lat:'37.60372599769183',
		lon:'126.95473701584243', 
		range:0.05,}};
		this.setCd = this.setCd.bind(this);
		this.setLoc = this.setLoc.bind(this);
		this.getData = this.getData.bind(this);
		this.categoryOnClick = this.categoryOnClick.bind(this);
		this.event = false
		this.urls = ["http://test-proj-dev.ap-northeast-2.elasticbeanstalk.com/testapp/ansimapi",
		"http://test-proj-dev.ap-northeast-2.elasticbeanstalk.com/testapp/publicpapi"]
	}
	
	
	getData() {		
		if(this.isEvent()){
			this.getdata = axios.get(this.urls[0], {
    		params: this.state.parameters
  			})
  			.then(res => this.setState({info:res.data}))
  			.catch(err => console.log(err))
		this.setEvent()
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
		this.setCd(cd)
		this.setEvent()
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
          <Link to='/locp'> <img src={parking} className="parking" alt="parking" /> </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		  <button onClick = {() => this.setLoc()} 
		  style={{width:"100px", height:"50px", backgroundColor:"black",color:"white",fontSize:"20px", borderRadius:"20px", marginLeft:"-20px" }}>
			  {this.state.loc?"loc":"list"}</button>
          <input className="inputtxt" placeholder="검색어를 입력하세요"   />
        &nbsp;   &nbsp;
            <Link to='/search'> <img src={search} className="searchIcon" alt="search"/></Link> {/*검색->돋보기 모양 이미지->search 페이지로 연결 */}
           </div>
			<div id = "test">
			{this.getData()}
			{this.state.loc?<Loc state={this.state}/>:<List state={this.state}/>}
			</div>
			<Footer/>
        </div>


    );
	}
}
//		

export default Main;