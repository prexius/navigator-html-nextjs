

export default function Blog() {
    return (
        <>
            <section className="blog section" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title text-center">
                                <h4>Our untold story</h4>
                                <h2>Blog.</h2>
                                <span className="border" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque,
                                    obcaecati atque sit!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {/* single blog post */}
                        <article className="col-md-4 col-sm-6">
                            <div className="post-item">
                                <div className="post-thumb">
                                    <img className="img-fluid shadow rounded" src="/images/blog/post-1.jpg" alt="Generic placeholder image" />
                                </div>
                                <div className="post-title">
                                    <h3 className="mt-0"><a href>Ten things about Business</a></h3>
                                </div>
                                <div className="post-meta">
                                    <span>By</span> <a href className>Jonathon Ive</a>
                                </div>
                                <div className="post-content">
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                                        condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est voluptatem accusantium
                                        dolorum, maxime eos blanditiis sint enim necessitatibus placeat dolor.</p>
                                </div>
                                <a className="btn btn-main" href="#">Read more</a>
                            </div>
                        </article>
                        {/* /single blog post */}
                        {/* single blog post */}
                        <article className="col-md-4 col-sm-6">
                            <div className="post-item">
                                <div className="post-thumb">
                                    <img className="img-fluid shadow rounded" src="/images/blog/post-2.jpg" alt="Generic placeholder image" />
                                </div>
                                <div className="post-title">
                                    <h3 className="mt-0"><a href>Something I need to tell you</a></h3>
                                </div>
                                <div className="post-meta">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <span>By</span> <a href className>Jonathon Ive</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <span>By</span> <span> 15th December 2017</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="post-content">
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                                        condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est voluptatem accusantium
                                        dolorum, maxime eos blanditiis sint enim necessitatibus placeat dolor.</p>
                                </div>
                                <a className="btn btn-main" href="#">Read more</a>
                            </div>
                        </article>
                        {/* end single blog post */}
                        {/* single blog post */}
                        <article className="col-md-4 col-sm-6">
                            <div className="post-item">
                                <div className="post-thumb">
                                    <img className="img-fluid shadow rounded" src="/images/blog/post-3.jpg" alt="Generic placeholder image" />
                                </div>
                                <div className="post-title">
                                    <h3 className="mt-0"><a href>Are you doing the Right Way?</a></h3>
                                </div>
                                <div className="post-meta">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <span>By</span> <a href className>Jonathon Ive</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <span>By</span> <span> 15th December 2017</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="post-content">
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                                        condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est voluptatem accusantium
                                        dolorum, maxime eos blanditiis sint enim necessitatibus placeat dolor.</p>
                                </div>
                                <a className="btn btn-main" href="#">Read more</a>
                            </div>
                        </article>
                        {/* end single blog post */}
                    </div> {/* end row */}
                </div> {/* end container */}
            </section>

        </>
    )
}
