import Layout from '@/components/layout/Layout'
import Link from 'next/link'

export default function Team() {
    return (
        <>
            <Layout breadcrumb="Team">
                <div>
                    <section className="about section-sm" id="about">
                        <div className="container">
                            <div className="row mb-5 justify-content-center">
                                <div className="col-md-5">
                                    <img src="/images/about/about-1.jpg" className="img-fluid rounded shadow w-100" alt="about-img" />
                                </div>
                                <div className="col-md-5">
                                    <div className="content">
                                        <h2>Creativity is in our <br /> blood</h2>
                                        <p>Curabitur felis nibh, imperdiet eu erat non, luctus cursus lectus. Donec maximus diam leo, sed fringilla nisl
                                            auctor eget. Donec dictum neque est, ac faucibus ex blandit a
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae quo minima ab aperiam molestiae natus
                                            repellendus neque culpa iure, nemo veritatis explicabo facilis, officia, saepe! Et corrupti odit, non deserunt.
                                        </p></div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-5 order-md-1 order-2">
                                    <div className="content">
                                        <h2>We think out of the <br /> Box</h2>
                                        <p>Curabitur felis nibh, imperdiet eu erat non, luctus cursus lectus. Donec maximus diam leo, sed fringilla nisl
                                            auctor eget. Donec dictum neque est, ac faucibus ex blandit a
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae quo minima ab aperiam molestiae natus
                                            repellendus neque culpa iure, nemo veritatis explicabo facilis, officia, saepe! Et corrupti odit, non deserunt.
                                        </p></div>
                                </div>
                                <div className="col-md-5 order-md-2 order-1">
                                    <img src="/images/about/about-2.jpg" className="img-fluid rounded shadow w-100" alt="" />
                                </div>
                            </div> {/* End row */}
                        </div> {/* End container */}
                    </section> {/* End section */}
                    {/* Start Our Team
=========================================== */}
                    <section className="team section bg-gray" id="team">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="title text-center">
                                        <h4>TEAM MEMBER</h4>
                                        <h2>Our Team.</h2>
                                        <span className="border" />
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque, obcaecati atque sit!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* team member */}
                                <div className="col-lg-3 col-sm-6">
                                    <div className="team-member text-center">
                                        <div className="member-photo">
                                            {/* member photo */}
                                            <img className="img-fluid" src="/images/team/member-1.jpg" alt="team people" />
                                            {/* /member photo */}
                                        </div>
                                        {/* member name & designation */}
                                        <div className="member-content">
                                            <h3>Shawshank Redemption</h3>
                                            <span>Head Of Marketing</span>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.</p>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <Link href="#">
                                                        <i className="tf-ion-social-facebook" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link href="#">
                                                        <i className="tf-ion-social-twitter" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link href="#">
                                                        <i className="tf-ion-social-google-outline" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link href="#">
                                                        <i className="tf-ion-social-dribbble" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* /member name & designation */}
                                    </div>
                                </div>
                                {/* end team member */}
                                {/* team member */}
                                <div className="col-lg-3 col-sm-6">
                                    <div className="team-member text-center">
                                        <div className="member-photo">
                                            {/* member photo */}
                                            <img className="img-fluid" src="/images/team/member-2.jpg" alt="team people" />
                                            {/* /member photo */}
                                        </div>
                                        {/* member name & designation */}
                                        <div className="member-content">
                                            <h3>Luis Anthon</h3>
                                            <span>Web Developer</span>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.</p>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <Link href="#">
                                                        <i className="tf-ion-social-facebook" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link href="#">
                                                        <i className="tf-ion-social-twitter" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link href="#">
                                                        <i className="tf-ion-social-google-outline" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link href="#">
                                                        <i className="tf-ion-social-dribbble" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* /member name & designation */}
                                    </div>
                                </div>
                                {/* end team member */}
                                {/* team member */}
                                <div className="col-lg-3 col-sm-6">
                                    <div className="team-member text-center">
                                        <div className="member-photo">
                                            {/* member photo */}
                                            <img className="img-fluid" src="/images/team/member-3.jpg" alt="team people" />
                                            {/* /member photo */}
                                        </div>
                                        {/* member name & designation */}
                                        <div className="member-content">
                                            <h3>Jonathon Andrew</h3>
                                            <span>Head Of Management</span>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.</p>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <Link href="#">
                                                        <i className="tf-ion-social-facebook" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link href="#">
                                                        <i className="tf-ion-social-twitter" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link href="#">
                                                        <i className="tf-ion-social-google-outline" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link href="#">
                                                        <i className="tf-ion-social-dribbble" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* /member name & designation */}
                                    </div>
                                </div>
                                {/* end team member */}
                                {/* team member */}
                                <div className="col-lg-3 col-sm-6">
                                    <div className="team-member text-center">
                                        <div className="member-photo">
                                            {/* member photo */}
                                            <img className="img-fluid" src="/images/team/member-4.jpg" alt="team people" />
                                            {/* /member photo */}
                                        </div>
                                        {/* member name & designation */}
                                        <div className="member-content">
                                            <h3>Michael Jonson</h3>
                                            <span>Head Of Management</span>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.</p>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <Link href="#">
                                                        <i className="tf-ion-social-facebook" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link href="#">
                                                        <i className="tf-ion-social-twitter" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link href="#">
                                                        <i className="tf-ion-social-google-outline" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link href="#">
                                                        <i className="tf-ion-social-dribbble" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* /member name & designation */}
                                    </div>
                                </div>
                                {/* end team member */}
                            </div>
                            {/* End row */}
                        </div>
                        {/* End container */}
                    </section>
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
