import Maintext from "./component/kjw/Maintext";
import Festival_P from "./pages/Festival_P";
import { festivalObj, tourisObj } from "./js/commonData"


//bine 작업
import 'bootstrap/dist/css/bootstrap.min.css';
import Hd from "./component/bine/Hd"
import MainBanner from "./component/bine/MainBanner"
import Apply from "./component/bine/ApplyForm"

function App() {

  const wrap = { border: "1px solid red", boxSizing: "border-box", width: "1280px", margin: "0 auto" }

  return (


    <>
      <Hd></Hd>
      <MainBanner>
        <Apply></Apply>
      </MainBanner>


      <div id="App" style={wrap}>
        <Festival_P
          commonData={festivalObj}
        ></Festival_P>
      </div>

    </>
  );
}

export default App;
