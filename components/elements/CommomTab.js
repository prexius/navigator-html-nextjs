
'use client'

import { useState } from "react"

export default function CommomTab() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleTab = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <div className="commonTab">
                <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                    <li className="nav-item" onClick={() => handleTab(1)}>
                        <a className={activeIndex === 1 ? "nav-link active" : "nav-link"}>Our Philosophy</a>
                    </li>
                    <li className="nav-item" onClick={() => handleTab(2)}>
                        <a className={activeIndex === 2 ? "nav-link active" : "nav-link"}>mission</a>
                    </li>
                    <li className="nav-item" onClick={() => handleTab(3)}>
                        <a className={activeIndex === 3 ? "nav-link active" : "nav-link"}>vision</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className={activeIndex === 1 ? "tab-pane fade  show active" : "tab-pane fade"}>
                        <div className="row">
                            <div className="col-md-6 align-self-center">
                                <h2>We Create Designs<br /> and technology</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptate molestias, quaerat quo natus
                                    dolor harum voluptatibus modi dicta ducimus.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quae officia earum dolore est quaerat
                                    cupiditate voluptatibus id, magni alias veniam voluptate, libero explicabo, distinctio atque!</p>
                            </div>
                            <div className="col-md-6">
                                <img className="img-fluid rounded shadow " src="/images/company/company-image.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={activeIndex === 2 ? "tab-pane fade  show active" : "tab-pane fade"}>
                        <div className="row">
                            <div className="col-md-6 align-self-center">
                                <h2>Our Mission</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptate molestias, quaerat quo natus
                                    dolor harum voluptatibus modi dicta ducimus.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quae officia earum dolore est quaerat
                                    cupiditate voluptatibus id, magni alias veniam voluptate, libero explicabo, distinctio atque!</p>
                            </div>
                            <div className="col-md-6">
                                <img className="img-fluid rounded shadow mt-20" src="/images/company/company-image-2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={activeIndex === 3 ? "tab-pane fade  show active" : "tab-pane fade"}>
                        <div className="row">
                            <div className="col-md-6 align-self-center">
                                <h2>Our Vision</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptate molestias, quaerat quo natus
                                    dolor harum voluptatibus modi dicta ducimus.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quae officia earum dolore est quaerat
                                    cupiditate voluptatibus id, magni alias veniam voluptate, libero explicabo, distinctio atque!</p>
                            </div>
                            <div className="col-md-6">
                                <img className="img-fluid rounded shadow mt-20" src="/images/company/company-image-3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
