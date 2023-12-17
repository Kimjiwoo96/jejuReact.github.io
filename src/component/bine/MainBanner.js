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
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
      >

        <SwiperSlide className='bg1'>
          <div class="content position-absolute w1280">
            <h2>체험 여행</h2>
            <p>#액티비티 #테마공원 #레저/관광</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg2'>
          <div class="content position-absolute max-w1280">
            <h2>로컬 여행</h2>
            <p>#착한가격업소 #마을관광 #공영관광지</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg3'>
          <div class="content position-absolute max-w1280">
            <h2>힐링 여행</h2>
            <p>#포토스팟 #드라이브 #숲</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg4'>
          <div class="content position-absolute max-w1280">
            <h2>문화 여행</h2>
            <p>#자연경관 #우수관광업체 #동굴</p>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  );
};