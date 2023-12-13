function Festival(commonData){
    return(
        <>
            {commonData.commonData.map((el, idx) => (
                <div key={`festival${idx}`}>
                    <img src={el.img} alt={`Festival ${idx}`}/>
                    <h5>{el.festivalNm}</h5>
                    <p>{el.festivalCon}</p>              
                    <span>{el.festivalDate}</span> ~ <span>{el.festivalTo}</span>
                </div>
            ))}
           
        </>
    );







}

export default Festival;