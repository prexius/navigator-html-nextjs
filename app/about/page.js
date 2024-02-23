
import CommomTab from "@/components/elements/CommomTab"
import Layout from "@/components/layout/Layout"
import Link from "next/link"


export default function About() {
    return (
        <>
            <Layout breadcrumb="About Us">
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
                    <section className="about-mission-vision section">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="title">
                                        <h4>Little more brief</h4>
                                        <h2>About Us.</h2>
                                        <span className="border" />
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque, obcaecati atque sit!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <CommomTab />
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
                    {/*
Start Call To Action
==================================== */}
                    <section className="call-to-action section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h2>Let's Create Something Together</h2>
                                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin bibendum auctor, <br /> nisi elit consequat ipsum, nesagittis sem nid elit. Duis sed odio sitain elit.</p>
                                    <Link href="/contact.html" className="btn btn-main">Contact Us</Link>
                                </div>
                            </div> 		{/* End row */}
                        </div>   	{/* End container */}
                    </section>
                </div>

            </Layout>

        </>
    )
}
