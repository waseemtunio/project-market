//import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
export function ClientTestimonial() {
  return (
    <div className="client-testimonial">
      <Swiper
        slidesPerView={3.5}
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        navigation={true}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 320px (mobile)
          320: {
            slidesPerView: 1.1,
            spaceBetween: 20
          },
          // when window width is >= 768px (tablet)
          768: {
            slidesPerView: 2.5,
            spaceBetween: 25
          },
          // when window width is >= 1024px (desktop)
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 30
          }
        }}
      >
        <SwiperSlide>
          <div className="item">
            <Image src="/images/quote.svg" alt="icon" width={80} height={59} />
            <p>
              We had a fantastic experience partnering with Trionn for our website. The communication and collaboration were excellent, resulting in a top-notch design and functionality. We highly
              recommend Trionn to businesses in the service sector or anyone in need of a web design &amp; development solution.
            </p>
            <div className="client-info">
              <Image src="/images/avata.webp" alt="avata" width={70} height={70} />
              <p className="name">Albert Mizuno</p>
              <p className="position">Founder of The Mizuno</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <Image src="/images/quote.svg" alt="icon" width={80} height={59} />
            <p>
              We had a fantastic experience partnering with Trionn for our website. The communication and collaboration were excellent, resulting in a top-notch design and functionality. We highly
              recommend Trionn to businesses in the service sector or anyone in need of a web design &amp; development solution.
            </p>
            <div className="client-info">
              <Image src="/images/avata.webp" alt="avata" width={70} height={70} />
              <p className="name">Albert Mizuno</p>
              <p className="position">Founder of The Mizuno</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <Image src="/images/quote.svg" alt="icon" width={80} height={59} />
            <p>
              We had a fantastic experience partnering with Trionn for our website. The communication and collaboration were excellent, resulting in a top-notch design and functionality. We highly
              recommend Trionn to businesses in the service sector or anyone in need of a web design &amp; development solution.
            </p>
            <div className="client-info">
              <Image src="/images/avata.webp" alt="avata" width={70} height={70} />
              <p className="name">Albert Mizuno</p>
              <p className="position">Founder of The Mizuno</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <Image src="/images/quote.svg" alt="icon" width={80} height={59} />
            <p>
              We had a fantastic experience partnering with Trionn for our website. The communication and collaboration were excellent, resulting in a top-notch design and functionality. We highly
              recommend Trionn to businesses in the service sector or anyone in need of a web design &amp; development solution.
            </p>
            <div className="client-info">
              <Image src="/images/avata.webp" alt="avata" width={70} height={70} />
              <p className="name">Albert Mizuno</p>
              <p className="position">Founder of The Mizuno</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <Image src="/images/quote.svg" alt="icon" width={80} height={59} />
            <p>
              We had a fantastic experience partnering with Trionn for our website. The communication and collaboration were excellent, resulting in a top-notch design and functionality. We highly
              recommend Trionn to businesses in the service sector or anyone in need of a web design &amp; development solution.
            </p>
            <div className="client-info">
              <Image src="/images/avata.webp" alt="avata" width={70} height={70} />
              <p className="name">Albert Mizuno</p>
              <p className="position">Founder of The Mizuno</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <Image src="/images/quote.svg" alt="icon" width={80} height={59} />
            <p>
              We had a fantastic experience partnering with Trionn for our website. The communication and collaboration were excellent, resulting in a top-notch design and functionality. We highly
              recommend Trionn to businesses in the service sector or anyone in need of a web design &amp; development solution.
            </p>
            <div className="client-info">
              <Image src="/images/avata.webp" alt="avata" width={70} height={70} />
              <p className="name">Albert Mizuno</p>
              <p className="position">Founder of The Mizuno</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <Image src="/images/quote.svg" alt="icon" width={80} height={59} />
            <p>
              We had a fantastic experience partnering with Trionn for our website. The communication and collaboration were excellent, resulting in a top-notch design and functionality. We highly
              recommend Trionn to businesses in the service sector or anyone in need of a web design &amp; development solution.
            </p>
            <div className="client-info">
              <Image src="/images/avata.webp" alt="avata" width={70} height={70} />
              <p className="name">Albert Mizuno</p>
              <p className="position">Founder of The Mizuno</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <Image src="/images/quote.svg" alt="icon" width={80} height={59} />
            <p>
              We had a fantastic experience partnering with Trionn for our website. The communication and collaboration were excellent, resulting in a top-notch design and functionality. We highly
              recommend Trionn to businesses in the service sector or anyone in need of a web design &amp; development solution.
            </p>
            <div className="client-info">
              <Image src="/images/avata.webp" alt="avata" width={70} height={70} />
              <p className="name">Albert Mizuno</p>
              <p className="position">Founder of The Mizuno</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <Image src="/images/quote.svg" alt="icon" width={80} height={59} />
            <p>
              We had a fantastic experience partnering with Trionn for our website. The communication and collaboration were excellent, resulting in a top-notch design and functionality. We highly
              recommend Trionn to businesses in the service sector or anyone in need of a web design &amp; development solution.
            </p>
            <div className="client-info">
              <Image src="/images/avata.webp" alt="avata" width={70} height={70} />
              <p className="name">Albert Mizuno</p>
              <p className="position">Founder of The Mizuno</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
