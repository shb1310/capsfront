import React, {useState} from 'react';
import '../css/Home.css';
import logo from '../images/logo.svg';
import Modal from './Modal';

function Home() {
  const [ modalOpen, setModalOpen ] = useState(false);

  const openModal = () => {
      setModalOpen(true);
      console.log('서비스 사용');
  }
  const closeModal = () => {
      setModalOpen(false);
      console.log('서비스 사용안함');
  }
  
    return (
    <div className="Home">
      <div className="Homelogo">{/*로고가 나오는 부분 <이미지+안심식당> */}
      <br/> <br/> <br/> <br/><br/> <br/>
      <img src={logo} className="Home_logo" alt="logo"/>{/* 로고 이미지 */}
    <h1 id="title"> 안심식당</h1>{/* 안심식당 로고 글자*/}
    </div>
    <br/> <br/> <br/> 
    <React.Fragment>
      {/*입장 버튼 누르면 모달 창 뜬다. */}
     <button className="button_agree" onClick={ openModal} >입&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;장</button>
     <Modal open={ modalOpen } close={ closeModal } header="안&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;내" />
      
      </React.Fragment>
  </div>
   
  );
}

export default Home;
