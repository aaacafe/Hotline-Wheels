import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { default as React, useRef } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import render from '../app'

interface ISlider {
  slides?: any[]
}

const Carousel = (props: ISlider) => {
  const { slides } = props
  const swiperRef = useRef(null)
  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
    },
  }

  return (
      <Swiper
        ref={swiperRef}
        loop
        breakpoints={breakpoints}
        navigation
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
      >
        {slides ? (
          slides?.map((slide, index) => {
            return (
              <SwiperSlide
                key={`slide_${index}`}
              >
                {slide && (
                  <img
                    className='object-cover'
                    src={slide}
                  />
                )}
              </SwiperSlide>
            )
          })
        ) : (
          <SwiperSlide></SwiperSlide>
        )}
      </Swiper>
  )
}

render(Carousel);
