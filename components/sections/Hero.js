

export default function Hero() {
    return (
        <>
            <section className="hero-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="video-player">
                                <img className="img-fluid rounded w-100" src="/images/slider/video-player-thumb.jpg" alt />
                                <a className="play-icon" href="javascript:void(0)">
                                    <i className="tf-ion-play" data-video="https://www.youtube.com/embed/g3-VxLQO7do?autoplay=1" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="block">
                                <h2>We love to make brands grow</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quo dolor est incidunt suscipit
                                    minima, alias numquam voluptatum rerum porro. Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Labore at laboriosam unde repellat id expedita quae quisquam libero
                                    officia consequatur. </p>
                                <ul className="list-inline wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".7s">
                                    <li className="list-inline-item">
                                        <a href="https://themefisher.com/" target="_blank" className="btn btn-main">Download
                                            More</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
