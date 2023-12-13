import Maintext from "./component/kjw/Maintext";
import Festival_P from "./pages/Festival_P";
import {festivalObj , tourisObj} from "./js/commonData"


//bine 작업
import Hd from "./component/bine/Hd"



function App() {

  const wrap ={border:"1px solid red", boxSizing:"border-box",width:"1280px",margin:"0 auto"}

  return (


    <>
    <Hd></Hd>
   


    <div id="App" style={wrap}>
      <Festival_P
        commonData={festivalObj}
      ></Festival_P>
    </div>

    </>
  );
}

export default App;
