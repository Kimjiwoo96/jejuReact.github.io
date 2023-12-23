import { useState } from "react"
import CommitStyle from "../../scss/kjw/Comment.module.scss"

function Comment(){

    const [nicknameValue,setNicknameValue] = useState("")
    const [commentConText,setcommentConText] = useState("")

    function commentRegistration(){
        console.log("이거를 DB로 넘겨주면 됨>>>>>>",nicknameValue)
        console.log("DB로 넘겨주면 됨>>>>>>",commentConText)
        alert("잘 나오나???")
        
    }

    const nicknameChange = (event) => {
        setNicknameValue(event.target.value);
        setcommentConText(event.target.value);
      }

      const commentConTextChange = (event) => {
        setcommentConText(event.target.value);
      }


    return(
        <>
            <div className={CommitStyle.Comment}>
                <form action="">
                    <div className={CommitStyle.CommentWrite1}>
                        <label for="nickname">이름/닉네임</label>
                        <input
                         type="text"
                         id="nickname"
                         name="nickname"
                         value={nicknameValue}
                         onChange={nicknameChange}
                         />
                    </div>
                    <div className={CommitStyle.CommentWrite2}>
                        <textarea
                        name=""
                        id=""
                        cols="30" rows="10"
                        placeholder="내용을 적어주세요"
                        onChange={commentConTextChange}
                        ></textarea>
                        <button
                            onClick={() => {
                                commentRegistration();
                            }}
                        >등록</button>
                    </div>
                </form>  
            </div>
        </>
    );
}

export default Comment