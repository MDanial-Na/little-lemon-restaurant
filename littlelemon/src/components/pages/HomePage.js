import Heading from "../sections/HeadingPages/Heading";
import Specials from "../sections/HeadingPages/Specials";
import Testimonials from "../sections/HeadingPages/Testimonials";
import About from "../sections/HeadingPages/About";

function Homepage () {
    return (
    <>
    <Heading />
    <main>
        <Specials />
        <Testimonials />
        <About />
      </main>
    </>
    )
}

export default Homepage;