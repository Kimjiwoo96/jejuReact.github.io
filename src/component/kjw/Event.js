import EventStyles from "../../scss/kjw/Event.module.scss";


function Event(Eventdata){
    return(
        <>

        <div className={EventStyles.eventWrap}>
        {
                Eventdata.Eventdata.Eventdata.map((el,idx) => {
                    return(
                    <div className={EventStyles.innerDiv} key={`event ${idx}`}>
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