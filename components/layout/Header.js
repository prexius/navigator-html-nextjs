import Link from "next/link"

export default function Header() {
    return (
        <>
            <section className="header navigation fixed-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <Link className="navbar-brand" href="/">
                                    <img src="/images/logo.png" alt="logo" />
                                </Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="tf-ion-android-menu" />
                                </button>
                                <div className="collapse navbar-collapse" id="navigation">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item dropdown active">
                                            <Link className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Home
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <Link className="dropdown-item" href="/">Homepage 1</Link>
                                                <Link className="dropdown-item" href="/index-2">Homepage 2</Link>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/about">About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/service">Service</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/portfolio">Portfolio</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/contact">Contact</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Pages
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <Link className="dropdown-item" href="/404">404 Page</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
