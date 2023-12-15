import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function MainBanner(props) {

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
          props.datasrc.swiperMain.map((v, i) => {
            return (
              <SwiperSlide
                style={{ background: `url(${v.backgroundIamge})` }}
                key={i}>
                <div>
                  <h2>{v.h2}</h2>
                  <p>{v.p}</p>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}

export default MainBanner;