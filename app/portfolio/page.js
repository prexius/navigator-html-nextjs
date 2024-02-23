

import Layout from "@/components/layout/Layout"
import Link from "next/link"


export default function Portfolio() {
    return (
        <>
            <Layout breadcrumb="Portfolio">
                <div>
                    <section className="portfolio section" id="portfolio">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="title text-center">
                                        <h4>RECENT WORK</h4>
                                        <h2>WORK SHOWCASE.</h2>
                                        <span className="border" />
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque, obcaecati atque sit!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* /section title */}
                                    <div className="portfolio-filter">
                                        <button className="active" type="button" data-filter="all">All</button>
                                        <button type="button" data-filter="photography">Photography</button>
                                        <button type="button" data-filter="ios">IOS App</button>
                                        <button type="button" data-filter="development">Development</button>
                                        <button type="button" data-filter="design">Design</button>
                                    </div>
                                </div>
                            </div> {/* /end col-lg-12 */}
                            <div className="row filtr-container">
                                <div className="col-md-4 col-sm-6 p-0 filtr-item" data-category="design">
                                    <div className="portfolio-block">
                                        <img className="img-fluid" src="/images/portfolio/portfolio-1.jpg" alt="" />
                                        <div className="caption">
                                            <Link className="search-icon" href="/images/portfolio/portfolio-1.jpg" data-lightbox="image-1">
                                                <i className="tf-ion-ios-search-strong" />
                                            </Link>
                                            <h4><Link href="#">AirBnB Postcard</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 p-0 filtr-item" data-category="design, ios">
                                    <div className="portfolio-block ">
                                        <img className="img-fluid" src="/images/portfolio/portfolio-2.jpg" alt="" />
                                        <div className="caption">
                                            <Link className="search-icon" href="/images/portfolio/portfolio-1.jpg" data-lightbox="image-1">
                                                <i className="tf-ion-ios-search-strong" />
                                            </Link>
                                            <h4><Link href="#">AirBnB Postcard</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 p-0 filtr-item" data-category="photography, development">
                                    <div className="portfolio-block">
                                        <img className="img-fluid" src="/images/portfolio/portfolio-3.jpg" alt="" />
                                        <div className="caption">
                                            <Link className="search-icon" href="/images/portfolio/portfolio-1.jpg" data-lightbox="image-1">
                                                <i className="tf-ion-ios-search-strong" />
                                            </Link>
                                            <h4><Link href="#">AirBnB Postcard</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 p-0 filtr-item" data-category="photography, ios">
                                    <div className="portfolio-block">
                                        <img className="img-fluid" src="/images/portfolio/portfolio-4.jpg" alt="" />
                                        <div className="caption">
                                            <Link className="search-icon" href="/images/portfolio/portfolio-1.jpg" data-lightbox="image-1">
                                                <i className="tf-ion-ios-search-strong" />
                                            </Link>
                                            <h4><Link href="#">AirBnB Postcard</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 p-0 filtr-item" data-category="design">
                                    <div className="portfolio-block">
                                        <img className="img-fluid" src="/images/portfolio/portfolio-5.jpg" alt="" />
                                        <div className="caption">
                                            <Link className="search-icon" href="/images/portfolio/portfolio-1.jpg" data-lightbox="image-1">
                                                <i className="tf-ion-ios-search-strong" />
                                            </Link>
                                            <h4><Link href="#">AirBnB Postcard</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 p-0 filtr-item" data-category="design, development">
                                    <div className="portfolio-block">
                                        <img className="img-fluid" src="/images/portfolio/portfolio-1.jpg" alt="" />
                                        <div className="caption">
                                            <Link className="search-icon" href="/images/portfolio/portfolio-1.jpg" data-lightbox="image-1">
                                                <i className="tf-ion-ios-search-strong" />
                                            </Link>
                                            <h4><Link href="#">Photography Website</Link></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> {/* end row */}
                    </section>   {/* End section */}
                    {/*
Start About Section
==================================== */}
                    <section className="service-2 section bg-gray">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="title text-center">
                                        <h4>How We Works</h4>
                                        <h2>Our work process</h2>
                                        <span className="border" />
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque, obcaecati atque
                                            sit!</p>
                                    </div>
                                </div>
                                <div className="col-8 mx-auto">
                                    <div className="row">
                                        <div className="col-md-6 p-0">
                                            <div className="service-item text-center">
                                                <span className="count">1.</span>
                                                <i className="tf-ion-ios-briefcase-outline" />
                                                <h4>Project Analysis</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-0">
                                            <div className="service-item text-center">
                                                <span className="count">2.</span>
                                                <i className="tf-ion-ios-alarm-outline" />
                                                <h4>Time Management</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-0">
                                            <div className="service-item text-center">
                                                <span className="count">3.</span>
                                                <i className="tf-ion-ios-email-outline" />
                                                <h4>Mail Support</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-0">
                                            <div className="service-item text-center">
                                                <span className="count">4.</span>
                                                <i className="tf-ion-ios-locked-outline" />
                                                <h4>Secure System</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div></section>
                    {/* End section */}
                    {/* Start Testimonial
=========================================== */}
                    <section className="testimonial section" id="testimonial">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* testimonial wrapper */}
                                    <div className="testimonial-slider">
                                        {/* testimonial single */}
                                        <div className="item text-center">
                                            <i className="tf-ion-quote" />
                                            {/* client info */}
                                            <div className="client-details">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum. Eos earum, magni asperiores,
                                                    unde corporis labore, enim, voluptatum officiis voluptates alias natus. Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit. Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia?</p>
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
                                        </div>
                                        {/* /testimonial single */}
                                        {/* testimonial single */}
                                        <div className="item text-center">
                                            <i className="tf-ion-quote" />
                                            {/* client info */}
                                            <div className="client-details">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum. Eos earum, magni asperiores,
                                                    unde corporis labore, enim, voluptatum officiis voluptates alias natus. Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit. Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia?</p>
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
                                        </div>
                                        {/* /testimonial single */}
                                        {/* testimonial single */}
                                        <div className="item text-center">
                                            <i className="tf-ion-quote" />
                                            {/* client info */}
                                            <div className="client-details">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum. Eos earum, magni asperiores,
                                                    unde corporis labore, enim, voluptatum officiis voluptates alias natus. Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit. Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia?</p>
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
                                        </div>
                                        {/* /testimonial single */}
                                    </div>
                                </div>
                                {/* end col lg 12 */}
                            </div>
                            {/* End row */}
                        </div>
                        {/* End container */}
                    </section>
                </div>

            </Layout>

        </>
    )
}
