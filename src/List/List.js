import React,{useState,useEffect} from 'react';
import '../App.css';
import '../css/button.css';
import '../css/logoF.css';
import '../css/list.css';
import '../css/map.css';
import '../css/Loc.css'
import '../css/Search.css';
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
	axios.get("http://testproj-env.eba-gzdtgprf.ap-northeast-2.elasticbeanstalk.com/testapp/ansimapi", {
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
    <ListButton/>
    <br /><br />
    <table class="result">
        <thead>
          <tr>
            <th>안심식당SEQ</th>
            <th class="name">식당명</th>
            <th class="address1">주소</th>  
            <th class="address2">주소 상세</th>  
            <th class="number">전화번호</th>  
          </tr>
        </thead>
        <tbody>
        <tr >
            <td>{0.}</td>
            <td class="name">key</td>
            <td class="address1">{key}</td>  
            <td class="address2"></td>  
            <td class="name"></td>
           
        </tr>
          {
          	info.map(item => {return(
          		<tr>
           			<td class="id">{item.ansimseq}</td>

          				<td class="name">{item.workplacename}</td>
           				<td class="address1">{item. address1}</td>
                   <td class="address2">{item. address2}</td>
                   <td class="number">{item.tel}</td>

          				<td class="name">{item.owner}</td>
           				<td class="address">{item.address1}</td>

          		</tr>)
          	})			
		}
        </tbody>
        </table>

</div>
  );
}

export default List;