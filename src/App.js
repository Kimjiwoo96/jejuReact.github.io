// module


// 파일 import
import {festivalObj , tourisObj ,eventObj} from "./js/commonData";
import Festival_P from "./pages/Festival_P";
import Event_P from "./pages/Event_P";
import Video_P from "./pages/Video_p";
import Place_P from "./pages/Place_P"; 
import QuickBtn from "./component/kjw/QuickBtn";

//bine 작업
import 'bootstrap/dist/css/bootstrap.min.css';
import Hd from "./component/bine/Hd"
import MainBanner from "./component/bine/MainBanner"


function App() {

  const marginWrap ={border:"1px solid red", boxSizing:"border-box",width:"1380px",margin:"0 auto"}
  const marginBottom = {marginBottom: "50px"}

  return (
    <>

      <Hd></Hd>
      <MainBanner></MainBanner>
      <QuickBtn
        quickText = {"신청하기"}
      ></QuickBtn>
      <Festival_P 
        style={marginWrap}
        commonData={festivalObj}
      ></Festival_P>
      <Place_P></Place_P>
      <Video_P></Video_P>
      <Event_P
        Eventdata={eventObj}
      ></Event_P>

    </>

  );
}

export default App;
 