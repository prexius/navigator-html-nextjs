

export default function Portfolio() {
    return (
        <div>
            <section className="portfolio section" id="portfolio">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="title text-center">
                                <h4>RECENT WORK</h4>
                                <h2>WORK SHOWCASE.</h2>
                                <span className="border" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque,
                                    obcaecati atque sit!</p>
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
                                <img className="img-fluid" src="/images/portfolio/portfolio-1.jpg" alt />
                                <div className="caption">
                                    <a className="search-icon" href="images/portfolio/portfolio-1.jpg" data-lightbox="image-1">
                                        <i className="tf-ion-ios-search-strong" />
                                    </a>
                                    <h4><a href>AirBnB Postcard</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 p-0 filtr-item" data-category="design, ios">
                            <div className="portfolio-block ">
                                <img className="img-fluid" src="/images/portfolio/portfolio-2.jpg" alt />
                                <div className="caption">
                                    <a className="search-icon" href="images/portfolio/portfolio-1.jpg" data-lightbox="image-1">
                                        <i className="tf-ion-ios-search-strong" />
                                    </a>
                                    <h4><a href>AirBnB Postcard</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 p-0 filtr-item" data-category="photography, development">
                            <div className="portfolio-block">
                                <img className="img-fluid" src="/images/portfolio/portfolio-3.jpg" alt />
                                <div className="caption">
                                    <a className="search-icon" href="images/portfolio/portfolio-1.jpg" data-lightbox="image-1">
                                        <i className="tf-ion-ios-search-strong" />
                                    </a>
                                    <h4><a href>AirBnB Postcard</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 p-0 filtr-item" data-category="photography, ios">
                            <div className="portfolio-block">
                                <img className="img-fluid" src="/images/portfolio/portfolio-4.jpg" alt />
                                <div className="caption">
                                    <a className="search-icon" href="images/portfolio/portfolio-1.jpg" data-lightbox="image-1">
                                        <i className="tf-ion-ios-search-strong" />
                                    </a>
                                    <h4><a href>AirBnB Postcard</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 p-0 filtr-item" data-category="design">
                            <div className="portfolio-block">
                                <img className="img-fluid" src="/images/portfolio/portfolio-5.jpg" alt />
                                <div className="caption">
                                    <a className="search-icon" href="images/portfolio/portfolio-1.jpg" data-lightbox="image-1">
                                        <i className="tf-ion-ios-search-strong" />
                                    </a>
                                    <h4><a href>AirBnB Postcard</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 p-0 filtr-item" data-category="design, development">
                            <div className="portfolio-block">
                                <img className="img-fluid" src="/images/portfolio/portfolio-1.jpg" alt />
                                <div className="caption">
                                    <a className="search-icon" href="images/portfolio/portfolio-1.jpg" data-lightbox="image-1">
                                        <i className="tf-ion-ios-search-strong" />
                                    </a>
                                    <h4><a href>Photography Website</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* end row */}
            </section>

        </div>
    )
}
