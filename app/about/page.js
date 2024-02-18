
import Layout from "@/components/layout/Layout"


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
                                    <div className="commonTab">
                                        <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#philosophy" role="tab" aria-controls="philosophy" aria-selected="true">Our Philosophy</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#mission" role="tab" aria-controls="mission" aria-selected="false">mission</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#vision" role="tab" aria-controls="vision" aria-selected="false">vision</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="philosophy" role="tabpanel" aria-labelledby="home-tab">
                                                <div className="row">
                                                    <div className="col-md-6 align-self-center">
                                                        <h2>We Create Designs<br /> and technology</h2>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptate molestias, quaerat quo natus
                                                            dolor harum voluptatibus modi dicta ducimus.</p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quae officia earum dolore est quaerat
                                                            cupiditate voluptatibus id, magni alias veniam voluptate, libero explicabo, distinctio atque!</p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <img className="img-fluid rounded shadow " src="/images/company/company-image.jpg" alt />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="mission" role="tabpanel" aria-labelledby="profile-tab">
                                                <div className="row">
                                                    <div className="col-md-6 align-self-center">
                                                        <h2>Our Mission</h2>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptate molestias, quaerat quo natus
                                                            dolor harum voluptatibus modi dicta ducimus.</p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quae officia earum dolore est quaerat
                                                            cupiditate voluptatibus id, magni alias veniam voluptate, libero explicabo, distinctio atque!</p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <img className="img-fluid rounded shadow mt-20" src="/images/company/company-image-2.jpg" alt />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="vision" role="tabpanel" aria-labelledby="contact-tab">
                                                <div className="row">
                                                    <div className="col-md-6 align-self-center">
                                                        <h2>Our Vision</h2>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptate molestias, quaerat quo natus
                                                            dolor harum voluptatibus modi dicta ducimus.</p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quae officia earum dolore est quaerat
                                                            cupiditate voluptatibus id, magni alias veniam voluptate, libero explicabo, distinctio atque!</p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <img className="img-fluid rounded shadow mt-20" src="/images/company/company-image-3.jpg" alt />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                                                    <a href="#">
                                                        <i className="tf-ion-social-facebook" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#">
                                                        <i className="tf-ion-social-twitter" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#">
                                                        <i className="tf-ion-social-google-outline" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#">
                                                        <i className="tf-ion-social-dribbble" />
                                                    </a>
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
                                                    <a href="#">
                                                        <i className="tf-ion-social-facebook" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#">
                                                        <i className="tf-ion-social-twitter" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#">
                                                        <i className="tf-ion-social-google-outline" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#">
                                                        <i className="tf-ion-social-dribbble" />
                                                    </a>
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
                                                    <a href="#">
                                                        <i className="tf-ion-social-facebook" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#">
                                                        <i className="tf-ion-social-twitter" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#">
                                                        <i className="tf-ion-social-google-outline" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#">
                                                        <i className="tf-ion-social-dribbble" />
                                                    </a>
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
                                                    <a href="#">
                                                        <i className="tf-ion-social-facebook" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#">
                                                        <i className="tf-ion-social-twitter" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#">
                                                        <i className="tf-ion-social-google-outline" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#">
                                                        <i className="tf-ion-social-dribbble" />
                                                    </a>
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
                                    <a href="contact.html" className="btn btn-main">Contact Us</a>
                                </div>
                            </div> 		{/* End row */}
                        </div>   	{/* End container */}
                    </section>
                </div>

            </Layout>

        </>
    )
}
