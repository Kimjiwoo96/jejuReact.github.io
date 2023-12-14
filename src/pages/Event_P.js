// module

// import 파일
import Maintext from "../component/kjw/Maintext"
import MEvent from "../component/kjw/Event"


function Event_P(Eventdata){
    return(
        <>
            <Maintext
                title="이벤트"
                subTitle="진행중인 이벤트를 확인하고 무료체험 기회를 얻으세요!"
            ></Maintext>
            <MEvent
                Eventdata={Eventdata}
            ></MEvent>
        </>
    );
}

export default Event_P;