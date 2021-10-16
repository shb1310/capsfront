import React from 'react';
import InfoMap from "./InfoMap";


function InfoPage({match,history}){
    const goBack = () => {
        history.goBack();
      };
  //const { ansimseq } = props.params;
    return(
        <>
         <InfoMap/>
          
        <div>
         식당 이름: {match.params.workplace}<br/>
         식당 주소:{match.params.address1}{match.params.address2}<br/>
         식당 전화번호: {match.params.tel}</div>
     
  
     <button className="return" onClick={goBack} 
     style={{backgroundColor:"black", color:"white"}}>리스트로 돌아가기</button>
     

        </>
    )
}

export default InfoPage;