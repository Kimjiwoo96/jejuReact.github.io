
function ApplyForm() {
  return (
    <div className="formdiv position-absolute max-w1280">
    <div className="apply position-relative">
        <form action="" method="">
            <h2>신청하기</h2>
            <p className="position-absolute">정보를 입력해주시면 추첨을 통해서<br />
            <strong>제주항공권 + 렌트카 or 숙소 할인쿠폰</strong>을 드립니다.</p>
            <div className="input-box">
                <label for="named">이름</label>
                <input type="text" id="named" placeholder="이름을 입력하세요" required />
            </div>

            <div className="input-box">
                <label for="replyTo">연락처</label>
                <input type="tel" id="replyTo" placeholder="연락처를 입력하세요" required />
            </div>

            <div className="input-box">
                <label for="email_id">이메일</label>
                <input type="email" id="email_id" placeholder="이메일 주소를 입력하세요" required />
            </div>

            <div className="agree">
                <label>
                    <input type="checkbox">개인정보수집 이용 동의</input>
                </label>
            </div>
            <button type="submit" className="send">보내기</button>
        </form>
    </div>
</div>
 );

}

export default ApplyForm
