// module


// 파일 import
import {festivalObj , tourisObj ,eventObj} from "./js/commonData"
import Festival_P from "./pages/Festival_P";
import Event_P from "./pages/Event_P";
import Video_P from "./pages/Video_p"


function App() {

  const wrap ={border:"1px solid red", boxSizing:"border-box",width:"1280px",margin:"0 auto"}

  return (
    <div id="App" style={wrap}>
      <Festival_P
        commonData={festivalObj}
      ></Festival_P>
      <Video_P></Video_P>
      <Event_P
        Eventdata={eventObj}
      ></Event_P>
    </div>
  );
}

export default App;
