import Layout from "@/components/layout/Layout"

import About from "@/components/sections/About"
import About2 from "@/components/sections/About2"
import Blog from "@/components/sections/Blog"
import Contact from "@/components/sections/Contact"
import Hero from "@/components/sections/Hero"
import Portfolio from "@/components/sections/Portfolio"
import Pricing from "@/components/sections/Pricing"
import Service2 from "@/components/sections/Service2"
import Services from "@/components/sections/Services"
import Team from "@/components/sections/Team"
import Testimonial from "@/components/sections/Testimonial"

export default function Home() {
    return (
        <>
            <Layout>
                <Hero />
                <About2 />
                <Services />
                <About />
                <Service2 />
                <Portfolio />
                <Team />
                <Pricing />
                <Testimonial />
                <Blog />
                <Contact />
            </Layout>

        </>
    )
}
