import React,{useState,useEffect} from 'react';
import './App.css';
import './css/button.css';
import './css/logoF.css';
import './css/list.css';
import './css/map.css';
import './css/Loc.css'
import './css/Search.css';
import ListButton from './ListButton';

import axios from 'axios';

function List(props) {
  console.log('List');

  var key;

  if (props.location.state === undefined){ 	
	key = "unkey";
}
  else{
	key =  props.location.state['key'];
}
//  var deps;
  const [info, setInfo] = useState([]);	  
//  const request = axios
 	useEffect(()=>
//  const getData = ()=>
	{
	axios.get("http://testproj-env.eba-gzdtgprf.ap-northeast-2.elasticbeanstalk.com/testapp/api", {
	params: {
		prid: key,
		pname: 'pname'
	}
  })
  	.then(res => setInfo(res.data))
  	.catch(err => console.log(err))
  },{deps:[]})

	

  return (
    <div id="List">
    <ListButton/>{/* 占쎈탶�⑤슣維볟뜝�럥愿� �뜝�럡猿��뜝�럥�맄�뜝�럩紐좑옙�쐻占쎈윪亦낅¨堉⑨옙癒��굲 */}
    <br /><br />
    <table class="result">
        <thead>
          <tr>
            <th>ID</th>
            <th class="name">name</th>
            <th class="address">content</th>  
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{0.}</td>
            <td class="name">key</td>
            <td class="address">{key}</td>  
          </tr>
          {
          	info.map(item => {return(
          		<tr>
           			<td class="id">{item.id}</td>
          				<td class="name">{item.name}</td>
           				<td class="address">{item.content}</td>
          		</tr>)
          	})			
		}
        </tbody>
        </table>

</div>
  );
}

export default List;
