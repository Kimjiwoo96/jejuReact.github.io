import React from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



export default () => {
  return (
    <div id='mainbanner'>

      <Swiper
        className='position-relative'
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        loop={true}
      >

        <SwiperSlide className='bg1'>
          <div className="content container position-absolute max-w1280">
            <h2>체험 여행</h2>
            <p>#액티비티 #테마공원 #레저/관광</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg2'>
          <div className="content container position-absolute max-w1280">
            <h2>로컬 여행</h2>
            <p>#착한가격업소 #마을관광 #공영관광지</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg3'>
          <div className="content container position-absolute max-w1280">
            <h2>힐링 여행</h2>
            <p>#포토스팟 #드라이브 #숲</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg4'>
          <div className="content container position-absolute max-w1280">
            <h2>문화 여행</h2>
            <p>#자연경관 #우수관광업체 #동굴</p>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="formdiv position-absolute max-w1280">
        <div className="container text-end">
          <div className="apply position-relative d-inline-block text-start">
            <form>
              <h2>신청하기</h2>
              <p className="position-absolute">정보를 입력해주시면 추첨을 통해서<br />
                <strong>제주항공권 + 렌트카 or 숙소 할인쿠폰</strong>을 드립니다.</p>
              <div className="input-box">
                <label htmlFor="named">이름</label>
                <input type="text" id="named" placeholder="이름을 입력하세요" required />
              </div>

              <div className="input-box">
                <label htmlFor="replyTo">연락처</label>
                <input type="tel" id="replyTo" placeholder="연락처를 입력하세요" required />
              </div>

              <div className="input-box">
                <label htmlFor="email_id">이메일</label>
                <input type="email" id="email_id" placeholder="이메일 주소를 입력하세요" required />
              </div>

              <div className="agree">
                <label>
                  <input type="checkbox" /> 개인정보수집 이용 동의
                </label>
              </div>
              <button type="submit" className="send">보내기</button>
            </form>
          </div>
        </div>

      </div>


    </div>
  );
};