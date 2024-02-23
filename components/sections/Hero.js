import Link from "next/link"
import VideoPopup from "../elements/VideoPopup"


export default function Hero() {
    return (
        <>
            <section className="hero-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <VideoPopup />
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
                                        <Link href="/https://themefisher.com/" target="_blank" className="btn btn-main">Download
                                            More</Link>
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
