import React from 'react';
import "../css/modal.css";
import {Link} from 'react-router-dom';


const Modal = ( props ) => {
    const { open, close, header} = props;
   
    return (
      
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}> &times; </button>
                    </header>
                    <main>{/*안내 모달창 안에서 나올 경고 메시지 출력 */}
                    사용하기 버튼을 클릭할 시에는 IP에 따른  <br/>주소 위치 사용 동의로 간주합니다. <br/>
                     (나가기 버튼을 클릭할 시에는<br/> 서비스를 이용하지 못합니다.)
                    </main>
                    <footer>{/*사용하기 버튼: 서비스 이용, 나가기 버튼: 서비스 이용 불가 */}
                    <Link to="/main"><button className="agree" > 사용하기 </button></Link> &nbsp;
                       | <button className="close" onClick={close}> 나가기 </button>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}

export default Modal;
