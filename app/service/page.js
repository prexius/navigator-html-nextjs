

import Layout from "@/components/layout/Layout"
import Link from "next/link"


export default function Service() {
    return (
        <>
            <Layout breadcrumb="Service">
                <div>
                    <section className="service-list section bg-gray">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="title text-center">
                                        <h4>A List of services</h4>
                                        <h2>Our Service.</h2>
                                        <span className="border" />
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque, obcaecati atque sit!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-4 col-sm-6 text-center text-md-left mb-4 mb-md-0">
                                    <div className="block">
                                        <i className="tf-ion-ios-copy-outline" />
                                        <h3>Branding</h3>
                                        <ul>
                                            <li>Brand Strategy</li>
                                            <li>Advertising / Campaigns</li>
                                            <li>Product Design</li>
                                            <li>Video / Photography</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 text-center text-md-left mb-4 mb-md-0">
                                    <div className="block">
                                        <i className="tf-ion-ios-alarm-outline" />
                                        <h3>Web Design</h3>
                                        <ul>
                                            <li>UI Design</li>
                                            <li>E- Commerce Site Design</li>
                                            <li>App Development</li>
                                            <li>Mobile UI Design</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 text-center text-md-left mb-4 mb-md-0">
                                    <div className="block">
                                        <i className="tf-ion-ios-book-outline" />
                                        <h3>App Develop</h3>
                                        <ul>
                                            <li>Game Development</li>
                                            <li>Game Design</li>
                                            <li>Social Media Marketing</li>
                                            <li>Mobile UI Design</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 text-center mb-4 mb-md-0">
                                    <img className="img-fluid shadow rounded w-100" src="/images/about/about-1.jpg" alt="" />
                                </div>
                                <div className="col-md-6 align-self-center">
                                    <h2>We care about our work</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolorem, saepe ab, optio obcaecati id asperiores.
                                        Ab ullam qui architecto at eos distinctio debitis, libero reprehenderit excepturi rem ut odit est nam magni
                                        ratione necessitatibus, quod eaque, eius minima tempora deleniti illum aliquam! Perferendis optio dolorum
                                        blanditiis sapiente aperiam quaerat.</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ul className="color-gray">
                                                <li><i className="tf-ion-android-checkbox-outline" /> Creative Designers</li>
                                                <li><i className="tf-ion-android-checkbox-outline" /> Genius Developers</li>
                                                <li><i className="tf-ion-android-checkbox-outline" /> Growth Hackers</li>
                                                <li><i className="tf-ion-android-checkbox-outline" /> Marketing Masterminds</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul className="color-gray">
                                                <li><i className="tf-ion-android-checkbox-outline" /> Growth Hackers</li>
                                                <li><i className="tf-ion-android-checkbox-outline" /> Genius Developers</li>
                                                <li><i className="tf-ion-android-checkbox-outline" /> Marketing Masterminds</li>
                                                <li><i className="tf-ion-android-checkbox-outline" /> Creative Designers</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="clients-logo-slider">
                                        <img className="img-fluid" src="/images/client-logo/logo1.png" alt="client-logo" />
                                        <img className="img-fluid" src="/images/client-logo/logo-2.png" alt="client-logo" />
                                        <img className="img-fluid" src="/images/client-logo/logo-3.png" alt="client-logo" />
                                        <img className="img-fluid" src="/images/client-logo/logo-4.png" alt="client-logo" />
                                        <img className="img-fluid" src="/images/client-logo/logo-5.png" alt="client-logo" />
                                        <img className="img-fluid" src="/images/client-logo/logo1.png" alt="client-logo" />
                                        <img className="img-fluid" src="/images/client-logo/logo-2.png" alt="client-logo" />
                                        <img className="img-fluid" src="/images/client-logo/logo-3.png" alt="client-logo" />
                                        <img className="img-fluid" src="/images/client-logo/logo-4.png" alt="client-logo" />
                                        <img className="img-fluid" src="/images/client-logo/logo-5.png" alt="client-logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
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
