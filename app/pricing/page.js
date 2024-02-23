import Layout from '@/components/layout/Layout'
import Link from 'next/link'

export default function Pricing() {
    return (
        <>
            <Layout breadcrumb="Pricing">
                <div>
                    <section className="about-2 section bg-gray" id="about">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-5">
                                    <h2>We have explored the digital landscape with passion for a long time</h2>
                                </div>
                                <div className="col-12 col-md-7">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae deleniti ipsa labore necessitatibus culpa veritatis quo accusantium, neque enim ea ad eaque iure, quas tempore velit, quibusdam dolor illo! Explicabo.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quisquam maiores iste soluta, nihil dolorem?</p>
                                </div>
                            </div> 		{/* End row */}
                        </div>   	{/* End container */}
                    </section>   {/* End section */}
                    {/* Start Pricing section
		=========================================== */}
                    <section className="pricing-table  section" id="pricing">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="title text-center">
                                        <h4>Easy Pricing</h4>
                                        <h2>Pricing.</h2>
                                        <span className="border" />
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque, obcaecati atque sit!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                {/* single pricing table */}
                                <div className="col-md-4 col-sm-6">
                                    <div className="pricing-item">
                                        {/* plan name & value */}
                                        <div className="price-title bg-pricing">
                                            <h3>Basic</h3>
                                            <strong className="value">$99</strong>
                                            <p>Perfect for single freelancers who work by themselves</p>
                                        </div>
                                        {/* /plan name & value */}
                                        {/* plan description */}
                                        <ul>
                                            <li>1GB Disk Space</li>
                                            <li>10 Email Account</li>
                                            <li>Script Installer</li>
                                            <li>1 GB Storage</li>
                                            <li>10 GB Bandwidth</li>
                                            <li>24/7 Tech Support</li>
                                        </ul>
                                        {/* /plan description */}
                                        {/* signup button */}
                                        <Link className="btn btn-main" href="#">Signup</Link>
                                        {/* /signup button */}
                                    </div>
                                </div>
                                {/* end single pricing table */}
                                {/* single pricing table */}
                                <div className="col-md-4 col-sm-6">
                                    <div className="pricing-item">
                                        {/* plan name & value */}
                                        <div className="price-title  bg-pricing">
                                            <h3>Advance</h3>
                                            <strong className="value">$199</strong>
                                            <p>Suitable for small businesses with up to 5 employees</p>
                                        </div>
                                        {/* /plan name & value */}
                                        {/* plan description */}
                                        <ul>
                                            <li>1GB Disk Space</li>
                                            <li>10 Email Account</li>
                                            <li>Script Installer</li>
                                            <li>1 GB Storage</li>
                                            <li>10 GB Bandwidth</li>
                                            <li>24/7 Tech Support</li>
                                        </ul>
                                        {/* /plan description */}
                                        {/* signup button */}
                                        <Link className="btn btn-main" href="#">Signup</Link>
                                        {/* /signup button */}
                                    </div>
                                </div>
                                {/* end single pricing table */}
                                {/* single pricing table */}
                                <div className="col-md-4 col-sm-6 mx-auto">
                                    <div className="pricing-item ">
                                        {/* plan name & value */}
                                        <div className="price-title bg-pricing">
                                            <h3>Professional</h3>
                                            <strong className="value">$299</strong>
                                            <p>Great for large businesses with more than 5 employees</p>
                                        </div>
                                        {/* /plan name & value */}
                                        {/* plan description */}
                                        <ul>
                                            <li>1GB Disk Space</li>
                                            <li>10 Email Account</li>
                                            <li>Script Installer</li>
                                            <li>1 GB Storage</li>
                                            <li>10 GB Bandwidth</li>
                                            <li>24/7 Tech Support</li>
                                        </ul>
                                        {/* /plan description */}
                                        {/* signup button */}
                                        <Link className="btn btn-main" href="#">Signup</Link>
                                        {/* /signup button */}
                                    </div>
                                </div>
                                {/* end single pricing table */}
                            </div>
                            {/* End row */}
                        </div>
                        {/* End container */}
                    </section>
                    {/* End section */}
                    {/* Srart Contact Us
		=========================================== */}
                    <section className="contact-us section bg-gray" id="contact">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="title text-center">
                                        <h4>Drop us a note</h4>
                                        <h2>Contact Us.</h2>
                                        <span className="border" />
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque, obcaecati atque sit!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* Contact Details */}
                                <div className="col-md-6">
                                    <div className="map">
                                        <div id="map" />
                                    </div>
                                </div>
                                {/* / End Contact Details */}
                                {/* Contact Form */}
                                <div className="contact-form col-md-6 ">
                                    <form id="contact-form" method="post" action="sendmail.php" role="form">
                                        <div className="form-group">
                                            <input type="text" placeholder="Your Name" className="form-control" name="name" id="name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" placeholder="Your Email" className="form-control" name="email" id="email" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" placeholder="Subject" className="form-control" name="subject" id="subject" />
                                        </div>
                                        <div className="form-group">
                                            <textarea rows={6} placeholder="Message" className="form-control" name="message" id="message" />
                                        </div>
                                        <div id="success" className="success">
                                            Thank you. The Mailman is on His Way :)
                                        </div>
                                        <div id="error" className="error">
                                            Sorry, don't know what happened. Try later :(
                                        </div>
                                        <div id="cf-submit">
                                            <input type="submit" id="contact-submit" className="btn btn-transparent" />
                                        </div>
                                    </form>
                                </div>
                                {/* ./End Contact Form */}
                            </div> {/* end row */}
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="address-block contact-meta-block">
                                        <i className="tf-ion-android-pin" />
                                        <h4>Our Location</h4>
                                        <p>
                                            14/05, Stockhome <br />
                                            Victori Palace , United States <br />
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="phone-block contact-meta-block">
                                        <i className="tf-ion-ios-telephone" />
                                        <h4>Call Us</h4>
                                        <p>
                                            Office: (03) 9283 2617 <br />
                                            Fax: +61 3827 3590
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="social-icons-block contact-meta-block">
                                        <i className="tf-ion-ios-contact" />
                                        <h4>We are social</h4>
                                        <ul className="list-inline social-icon">
                                            <li className="list-inline-item"><Link href="#"><i className="tf-ion-social-facebook" /></Link></li>
                                            <li className="list-inline-item"><Link href="#"><i className="tf-ion-social-twitter" /></Link></li>
                                            <li className="list-inline-item"><Link href="#"><i className="tf-ion-social-linkedin" /></Link></li>
                                            <li className="list-inline-item"><Link href="#"><i className="tf-ion-social-dribbble" /></Link></li>
                                            <li className="list-inline-item"><Link href="#"><i className="tf-ion-social-instagram" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> {/* end container */}
                    </section>
                </div>

            </Layout>
        </>
    )
}
