import '../css/button.css';
import '../css/Search.css';
import React,{useState,useEffect,Component} from 'react';
import axios from 'axios';
import InfoMap from './InfoMap';
import Modal  from './Modal';



function List(props){	
//	<h1>cd:{this.state.parameters.categorydetail=== undefined?"undefined":this.state.parameters.categorydetail}</h1>
console.log('List');
console.log('List');
  const [ modalOpen, setModalOpen ] = useState(false);
  
  const openModal = () => {
      setModalOpen(true);
      
  }
  const closeModal = () => {
      setModalOpen(false);
      
  }

  var key;

  if (props.state === undefined){ 	
	key = '일식';
}
  else{
	key =  props.state.parameters.categorydetail;
}

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
        <tr >
            <td>{0.}</td>
            <td class="name">key</td>
            <td class="address1">{key}</td>  
            <td class="address2"></td>  
            <td class="name"></td>
        </tr>
        <React.Fragment>
          {
		      	props.state.info.data === undefined?<br/>:
          	props.state.info.data.map(item => {return(
          		<tr> 
           			<td class="id" key={item.ansimseq}>{item.ansimseq}</td>
          				<td class="name"><div onClick={openModal}>{item.workplacename}</div></td>
                 	<td class="address1">{item. address1}</td>
                   <td class="address2">{item. address2}</td>
                   <td class="number">{item.tel}</td>
                   <Modal id={item.ansimseq} open={ modalOpen } close={ closeModal } header="정보">
                   <InfoMap/>
                  이름:{item.workplacename}<br/>
                  주소:{item.address1} {item.address2}<br/>
                  전화번호:{item.tel}
                </Modal>
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