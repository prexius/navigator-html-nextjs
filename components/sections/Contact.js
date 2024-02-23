import Link from "next/link"


export default function Contact() {
    return (
        <div>
            <section className="contact-us section bg-gray" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title text-center">
                                <h4>Drop us a note</h4>
                                <h2>Contact Us.</h2>
                                <span className="border" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque,
                                    obcaecati atque sit!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Contact Details */}
                        <div className="col-md-6">
                            <div className="map">
                                {/* <div id="map" /> */}
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={400} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
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
    )
}
