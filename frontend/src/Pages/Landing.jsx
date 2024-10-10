import Footer from "../Components/Footer";
import HeroHome from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Faq from "../Components/Faq";
import Testimonial from "../Components/Testimonial";
function Landing() {
  return (
    <div>
      <Navbar />
      <HeroHome />
      <Testimonial />
      <Faq />
      <Footer />
    </div>
  );
}

export default Landing;
