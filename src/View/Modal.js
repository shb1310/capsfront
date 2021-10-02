import React from 'react';
import "../css/modal.css";
import {Link} from 'react-router-dom';


const Modal = ( props ) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;
    function Share(){
        var shareBtn =document.getElementById("shareBtn");
      if(shareBtn){
        shareBtn.addEventListener("click",function(){
    
            var Title="공유하기";
            var Text="안심식당사이트입니다.";
            var shareURL=" "       
    
            if (navigator.share) {
                navigator.share({
                  title: Title,
                  text:Text,
                  url: shareURL,
                }).then(() => {
                  console.log('Sharing Success!!');
                })
                .catch((error)=>console.log('Error',error));
              } else {
                // fallback
                alert('공유가 실패되었습니다!');
              }
        })}
    }
    function copy() {
       
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value ="훼베트남쌀국수";
        
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        
        document.execCommand('copy');
        document.body.removeChild(selBox);
          }
    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <section>
                    <header>
                        {header}
                        <button className="share" onClick={Share}> &times; </button>
                        <button className="close" onClick={close}> &times; </button>
                    </header>
                    <main>
                        {props.children}
                    </main>
                    <footer>
                    <button className="share" onClick={()=>Share}> 공유하기 </button> &nbsp;
                        <button className="close" onClick={copy}> 복사하기 </button>

                    </footer>
                </section>
            ) : null }
        </div>
    )
}

export default Modal;
