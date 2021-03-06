import React, {Component} from 'react';
import '../css/button.css';
import '../css/list.css';
import List from './List';
import Loc from './Loc';
import Nav from '../pages/Nav';
import axios from 'axios';
import Footer from '../pages/Footer';


class Main extends Component {
	
	componentDidMount(){
		
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
	constructor(props) {
		super(props);
		console.log(props.match.params.key);
		this.state = {loc:false, parameters:{options:'',wardname:'', range:0.1,
		}};
		this.setCd = this.setCd.bind(this);
		this.setLoc = this.setLoc.bind(this);
		this.getData = this.getData.bind(this);
		this.latitude=0.0;
		this.longitude=0.0;
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
              <div id="button">{/*?????? ????????? ?????? div*/}
              <Nav/>
			
           <div id="button1">
           <button id="??????" value="??????" onClick = {() => this.categoryOnClick("??????")}>??????</button>
           <button id="??????" value="??????" onClick = {() => this.categoryOnClick("??????")}>??????</button>
           <button id="??????" value="??????" onClick = {() => this.categoryOnClick("??????")}>??????</button>
           <button id="?????????" value="?????????" onClick = {() => this.categoryOnClick("?????????")}>?????????</button>
          </div> 
          
          <div id="button2">
          <button id="???????????????" value="???????????????" onClick = {() => this.categoryOnClick("???????????????")}> ???????????????</button>
          <button id="??????_????????????" value="?????? ????????????" onClick = {() => this.categoryOnClick("?????? ????????????")}>?????? ????????????</button>   
          </div>
		  <br/>
          <div className="search">{/* ???????????? ?????? div*/}
		  <button className="choice" onClick = {() => this.setLoc()} 
		  style={{width:"300px", height:"50px", backgroundColor:"black",color:"white",fontSize:"20px", borderRadius:"20px", marginLeft:"-20px" }}>
			  {this.state.loc?"???????????? ????????????":"????????? ????????????"}</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        
           </div>
		   <br/>
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