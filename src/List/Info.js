import React,{useState,useEffect} from 'react';
import "../css/Info.css";
import axios from 'axios';
import {Link} from 'react-router-dom';

const Modal = ( props ) => {
    console.log('Info');

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
  
      
    const { open, close, header , call,share} = props;
   
 function copy() {
  {
    info.map(item => {return(
    
        <React.Fragment>
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value ={item.address1};
        
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        
        document.execCommand('copy');
        document.body.removeChild(selBox);
        </React.Fragment>
                 )
            })		
      }   
    }
     /*function copy() {
  
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value ="Copy";
        
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        
        document.execCommand('copy');
        document.body.removeChild(selBox);
       
     } */
       
    return (

        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <section>
                    <header>
                        {header}
                        <button id="share" onClick={share}> &times; </button>
                        <button className="call" onClick={call}> &times; </button>
                        <button className="close" onClick={close}> &times; </button>
                    </header>
                    <main>
                        {props.children}
                    </main>
                    <footer>
                    <Link to='/share'> <button id="share"  style={{float:"left"}}> 공유하기 </button> </Link>
                    <button className="call" onClick={copy}> 번호 복사 </button>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}

export default Modal;
