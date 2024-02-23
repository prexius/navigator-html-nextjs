
export default function Footer() {
    return (
        <>
            <footer id="footer" className="bg-one">
                <div className="top-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                                <h3>About</h3>
                                <p>Integer posuere erat a ante venenati dapibus posuere velit aliquet. Fusce dapibus, tellus
                                    cursus commodo, tortor mauris sed posuere.</p>
                            </div>
                            {/* End of .col-sm-3 */}
                            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                                <h3>Our Services</h3>
                                <ul>
                                    <li><a href="#">Graphic Design</a></li>
                                    <li><a href="#">Web Design</a></li>
                                    <li><a href="#">Web Development</a></li>
                                </ul>
                            </div>
                            {/* End of .col-sm-3 */}
                            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><a href="#">Partners</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">FAQ’s</a></li>
                                    <li><a href="#">Badges</a></li>
                                </ul>
                            </div>
                            {/* End of .col-sm-3 */}
                            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                                <h3>Subscribe Now</h3>
                                <form className="subscribe-form">
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <button type="submit" className="btn btn-main-sm">Subscribe Now</button>
                                </form>
                            </div>
                            {/* End of .col-sm-3 */}
                        </div>
                    </div> {/* end container */}
                </div>
                <div className="footer-bottom">
                    <h5>Copyright {new Date().getFullYear()}. All rights reserved.</h5>
                    <h6>Design and Developed by <a href="/https://themefisher.com/" target="_blank">Themefisher</a>. Get more
                        bootstrap template form our <a href="/https://themefisher.com/free-bootstrap-templates/" target="_blank">Store</a></h6>
                </div>
            </footer>

        </>
    )
}
