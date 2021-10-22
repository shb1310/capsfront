import '../css/button.css';
import '../css/Search.css';
import React from 'react';
import {Link} from 'react-router-dom';


function List(props){	

console.log('List');
  return (
    
    <div id="List">
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
     
        <React.Fragment>
          {
		      	props.state.info === undefined?<br/>:
          	props.state.info.map(item => {return(
          		<tr> 
           			<td class="id" key={item.ansimseq}>{item.ansimseq}</td>
                 <td class="name"><Link to={{pathname:`/infopage/${item.workplacename}/${item.address1}/${item.address2}/${item.tel}/${item.lat}/${item.lon}`}}>{item.workplacename}</Link></td>
                 	<td class="address1">{item.address1}</td>
                   <td class="address2">{item.address2}</td>
                   <td class="number">{item.tel}</td>
               
                 </tr>
                    )
          	})			
		}
    </React.Fragment>
        </tbody>
        </table>

</div>
  );
}


export default List;