import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function SliderContainer(props) {

  return (
    <>
      <Swiper id='mainbanner'
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}

      >
        {
          props.info.swiperMain.map((v, i) => {
            return (
              <SwiperSlide key={i}>
                <div>
                  <h2></h2>
                  <p></p>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
