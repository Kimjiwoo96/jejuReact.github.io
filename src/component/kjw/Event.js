// module 
import { useState } from "react";
// 파일 import
import eventStyles from "../../scss/kjw/event.module.scss";


function Event(Eventdata){

    const [isHovering, setIsHovering] = useState(0);
    // console.log("이거야>>>>>",isHovering)



    return(
        <>

        <div className={eventStyles.eventWrap}>
             {
                Eventdata.Eventdata.Eventdata.map((el,idx) => {
                    return(
                    <div 
                    className={`${eventStyles.innerDiv} hoverStyle${idx+1}`}
                    key={`event ${idx}`}
                    onMouseOver={() => setIsHovering(idx+1)}
                    onMouseOut={() => setIsHovering(0)}
                    >
                        <p><span>item0{idx + 1}</span></p>
                        <h4>{el.subTitle}</h4>
                        <h2>{el.mainTitle}</h2>
                        <img src={el.href} alt={idx}/>
                    </div>
                    )
                })
            }       
        </div>
           
        </>
    );
}

export default Event;















