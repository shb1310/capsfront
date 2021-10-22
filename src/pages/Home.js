import React, {useState} from 'react';
import '../css/Home.css';
import logo from '../images/logo.svg';
import {Link} from 'react-router-dom';
import Modal from './Modal';

function Home() {
  const [ modalOpen, setModalOpen ] = useState(false);

  const openModal = () => {
      setModalOpen(true);
      console.log('메인화면으로 이동');
  }
  const closeModal = () => {
      setModalOpen(false);
      console.log('메인화면으로 이동 안함');
  }
  

  return (
    <div className="Home">
      <div className="Homelogo">{/*로고가 나오는 부분 <이미지+안심식당> */}
      <br/> <br/> <br/> <br/><br/> <br/>
      <img src={logo} className="Home_logo" alt="logo"/>{/* 로고 이미지 */}
    <h1 id="title"> 안심식당</h1>{/* 안심식당 로고 글자*/}
    </div>
    <br/> <br/> <br/> <br/> <br/>
    <div className="caution">IP에 따른 주소 위치 사용 동의</div><br /> <br/>{/*동의/동의안함 버튼 위의 안내 글자 */}
    <Link style={{color:'white'}} to='/main'><button className="button_agree">동의</button></Link><br /><br />
    {/* 동의 버튼을 누르면 바로 /loc 화면으로 이동 됨 */}
    <React.Fragment>
     <button className="button_Nagree" onClick={ openModal }>동의안함</button>
     {/*header 부분에 텍스트를 입력한다.*/}
     <Modal open={ modalOpen } close={ closeModal } header="경고">

       {/* Modal.js <main> { props.children } </main>에 내용이 입력된다. */}
       IP에 따른 주소 위치 사용 미동의 시 위치 기반 서비스를 이용할 수 없습니다.
     </Modal>
      </React.Fragment>
   {/* 동의 안함 버튼을 누르면 button_Nevent 함수로 이동되는데, 아직 구현 못함(7/29)-> 위의 함수 수정 예정
      (08/01) modal을 사용해서 페이지 이동 성공*/}
  </div>
   
  );
}

export default Home;
