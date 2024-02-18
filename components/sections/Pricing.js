

export default function Pricing() {
    return (
        <div>
            <section className="pricing-table  section" id="pricing">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title text-center">
                                <h4>Easy Pricing</h4>
                                <h2>Pricing.</h2>
                                <span className="border" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque,
                                    obcaecati atque sit!</p>
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
                                <a className="btn btn-main" href="#">Signup</a>
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
                                <a className="btn btn-main" href="#">Signup</a>
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
                                <a className="btn btn-main" href="#">Signup</a>
                                {/* /signup button */}
                            </div>
                        </div>
                        {/* end single pricing table */}
                    </div>
                    {/* End row */}
                </div>
                {/* End container */}
            </section>

        </div>
    )
}
