
'use client'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

            breakpoints:{
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView:1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    }
};
export default function Testimonial() {
    return (
        <div>
            <section className="testimonial section" id="testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* testimonial wrapper */}
                            <Swiper {...swiperOptions} className="testimonial-slider">
                                {/* testimonial single */}
                                <SwiperSlide className="item text-center">
                                    <i className="tf-ion-quote" />
                                    {/* client info */}
                                    <div className="client-details">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum.
                                            Eos earum, magni asperiores,
                                            unde corporis labore, enim, voluptatum officiis voluptates alias natus. Lorem ipsum
                                            dolor sit amet, consectetur adipisicing
                                            elit. Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
                                            quia?</p>
                                    </div>
                                    {/* /client info */}
                                    {/* client photo */}
                                    <div className="client-thumb">
                                        <img src="/images/client-logo/clients-1.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="client-meta">
                                        <h4>Matt Cutts</h4>
                                        <span>CEO , Company Name</span>
                                    </div>
                                    {/* /client photo */}
                                </SwiperSlide>
                                {/* /testimonial single */}
                                {/* testimonial single */}
                                <SwiperSlide className="item text-center">
                                    <i className="tf-ion-quote" />
                                    {/* client info */}
                                    <div className="client-details">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum.
                                            Eos earum, magni asperiores,
                                            unde corporis labore, enim, voluptatum officiis voluptates alias natus. Lorem ipsum
                                            dolor sit amet, consectetur adipisicing
                                            elit. Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
                                            quia?</p>
                                    </div>
                                    {/* /client info */}
                                    {/* client photo */}
                                    <div className="client-thumb">
                                        <img src="/images/client-logo/clients-2.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="client-meta">
                                        <h4>Elon Musk</h4>
                                        <span>CEO , Company Name</span>
                                    </div>
                                    {/* /client photo */}
                                </SwiperSlide>
                                {/* /testimonial single */}
                                {/* testimonial single */}
                                <SwiperSlide className="item text-center">
                                    <i className="tf-ion-quote" />
                                    {/* client info */}
                                    <div className="client-details">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum.
                                            Eos earum, magni asperiores,
                                            unde corporis labore, enim, voluptatum officiis voluptates alias natus. Lorem ipsum
                                            dolor sit amet, consectetur adipisicing
                                            elit. Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
                                            quia?</p>
                                    </div>
                                    {/* /client info */}
                                    {/* client photo */}
                                    <div className="client-thumb">
                                        <img src="/images/client-logo/clients-1.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="client-meta">
                                        <h4>Jonathon Ive</h4>
                                        <span>CEO , Company Name</span>
                                    </div>
                                    {/* /client photo */}
                                </SwiperSlide>
                                {/* /testimonial single */}
                            </Swiper>
                        </div>
                        {/* end col lg 12 */}
                    </div>
                    {/* End row */}
                </div>
                {/* End container */}
            </section>

        </div>
    )
}
