import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

import "./carousel.css"

import img1 from "../../assets/images/1.png"
import img2 from "../../assets/images/2.png"
import img3 from "../../assets/images/3.png"

const slides = [
  {
    title: "Projeto 1",
    description: "Descrição breve do projeto",
    image: img1,
  },
  {
    title: "Projeto 2",
    description: "Descrição breve do projeto",
    image: img2,
  },
  {
    title: "Projeto 3",
    description: "Descrição breve do projeto",
    image: img3,
  },
]

export default function Carousel() {
  return (
    <div className="carousel_section">
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={40}
        speed={700}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { spaceBetween: 20 },
          768: { spaceBetween: 40 },
          1200: { spaceBetween: 60 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="project_card">
            <img src={slide.image} alt={slide.title} />

            <div className="card_content">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>

              <div className="card_buttons">
                <button>GitHub</button>
                <button>Demo</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}