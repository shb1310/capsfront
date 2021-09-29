import React from 'react';
import "../css/modal.css";
import {Link} from 'react-router-dom';


const Modal = ( props ) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header , share} = props;
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
                        <button className="share" onClick={share}> &times; </button>
                        <button className="close" onClick={close}> &times; </button>
                    </header>
                    <main>
                        {props.children}
                    </main>
                    <footer>
                    <Link to="/share"><button className="share" onClick={share}> 공유하기 </button></Link> &nbsp;
                        <button className="close" onClick={copy}> 복사하기 </button>

                    </footer>
                </section>
            ) : null }
        </div>
    )
}

export default Modal;
