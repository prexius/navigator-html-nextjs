import Link from "next/link"

export default function Breadcrumb({ breadcrumb }) {
    return (
        <>
            <section className="single-page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>{breadcrumb}</h2>
                            <nav aria-label="breadcrumb mx-auto" role="navigation">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">{breadcrumb}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
