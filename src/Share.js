import shareImg from './images/share.svg';
import './css/share.css';

const Share = ( props ) => {
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
    return (
        <button id="shareBtn" onClick={Share} style={{marginTop:"300px",
          width:"600px",height:"200px",backgroundColor: "black",color:"white",
          fontFamily:"fantasy",fontSize:"50px",border: "solid 2px grey",
          borderRadius: "50px",zindex:"99"}}>
         {/*} <img id="shareImg" src={shareImg} />*/}공유하기</button>
    )
}

export default Share;
