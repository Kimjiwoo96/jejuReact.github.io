
function ApplyForm() {
  return (
    <div className="formdiv position-absolute w-100">
    <div className="apply position-relative">
        <form>
            <h2>신청하기</h2>
            <p className="position-absolute">정보를 입력해주시면 추첨을 통해서<br /><strong>제주항공권 + 렌트카 or 숙소 할인쿠폰</strong>을 드립니다.</p>
            <div className="input-box mb-3">
                <label htmlFor="named">이름</label>
                <input type="text" className="form-control" id="named" placeholder="이름을 입력하세요" required />
            </div>

            <div className="input-box mb-3">
                <label htmlFor="replyTo">연락처</label>
                <input type="tel" className="form-control" id="replyTo" placeholder="연락처를 입력하세요" required />
            </div>

            <div className="input-box mb-3">
                <label htmlFor="email_id">이메일</label>
                <input type="email" className="form-control" id="email_id" placeholder="이메일 주소를 입력하세요" required />
            </div>

            <div className="agree form-check mb-3">
                <input type="checkbox" className="form-check-input" id="agreeCheck" />
                <label className="form-check-label" htmlFor="agreeCheck">개인정보수집 이용 동의</label>
            </div>
            <button type="submit" className="btn btn-primary">보내기</button>
        </form>
    </div>
</div>
 );

}

export default ApplyForm
