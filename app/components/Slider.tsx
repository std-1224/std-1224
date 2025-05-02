import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                // autoplay={{
                //     delay: 3500,
                //     disableOnInteraction: false,
                // }}
                // loopAdditionalSlides={1}
                modules={[EffectFade, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="./bg-1.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./bg-2.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./bg-3.webp" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
