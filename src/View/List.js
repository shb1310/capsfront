import '../css/button.css';
import '../css/Search.css';
import React from 'react';
import {Link} from 'react-router-dom';
console.log('List');

function List(props){	


  return (
    
    <div id="List">
    <br /><br />
    <table className="result">
        <thead>
          <tr>
            <th>안심식당SEQ</th>
            <th className="name">식당명</th>
            <th className="address1">주소</th>  
            <th className="address2">주소 상세</th>  
            <th className="number">전화번호</th> 
          </tr>
        </thead>
        <tbody>
     
        <React.Fragment>
          {
		      	props.state.info === undefined?<br/>:
          	props.state.info.map(item => {return(
          		<tr> 
           			<td className="id" key={item.ansimseq}>{item.ansimseq}</td>
                 <td className="name"><Link to={{pathname:`/infopage/${item.workplacename}/${item.address1}/${item.address2}/${item.tel}/${item.lat}/${item.lon}`}}>{item.workplacename}</Link></td>
                 	<td className="address1">{item.address1}</td>
                   <td className="address2">{item.address2}</td>
                   <td className="number">{item.tel}</td>
               
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