// module 
import { useState } from "react";
// 파일 import
import EventStyles from "../../scss/kjw/Event.module.scss";


function Event(Eventdata){

    const [isHovering, setIsHovering] = useState(0);
    const [mythis, setmyThis] = useState("");

    let colors =""
    if(isHovering == 1){
        colors = "3px solid #0675C1";
    }
    if(isHovering == 2){
        colors = "3px solid #D48121";
    }
    if(isHovering == 3){
        colors = "3px solid #EBEBEB";
    }
    if(isHovering == 4){
        colors = "3px solid #059B84";
    }

    console.log("이거야>>>>>",isHovering)



    return(
        <>

        <div className={EventStyles.eventWrap}>
             {
                Eventdata.Eventdata.Eventdata.map((el,idx) => {


                    return(
                    <div 
                    style={{border:`${colors}`}}
                    className={EventStyles.innerDiv}
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















