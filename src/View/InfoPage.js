import InfoMap from "./InfoMap";

function InfoPage(){

    return(
        <>
         <InfoMap/>
           <React.Fragment>
          {
		      	props.state.info === undefined?<br/>:
          	props.state.info.map(item => {return(
       
        <div>{item.workplace}<br/>
        {item.address1}{item.address2}<br/>
        {item.tel}</div>
        )
    })			
    }
    </React.Fragment>
        </>
    )
}