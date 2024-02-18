import Breadcrumb from './Breadcrumb'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children, breadcrumb }) {
    return (
        <>
            <Header />
            {breadcrumb && <Breadcrumb breadcrumb={breadcrumb} />}

            {children}
            <Footer />
        </>
    )
}
