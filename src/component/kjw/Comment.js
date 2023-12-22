import CommitStyle from "../../scss/kjw/Comment.module.scss"

function Comment(){
    return(
        <>
            <div className={CommitStyle.Comment}>
                <form action="">
                    <div className={CommitStyle.CommentWrite1}>
                        <label for="nickname">이름/닉네임</label>
                        <input type="text" id="nickname" name="nickname"/>
                    </div>
                    <div className={CommitStyle.CommentWrite2}>
                        <textarea name="" id="" cols="30" rows="10" placeholder="내용을 적어주세요"></textarea>
                        <button>등록</button>
                    </div>
                </form>
                
            </div>
        </>
    );
}

export default Comment