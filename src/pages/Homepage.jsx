import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Service from "../components/service";
import Whyus from "../components/Whyus";
import Faqs from "../components/Fas";

function Homepage() {
  return (
    <section>
      <Hero />
      <HowItWorks />
      <Service />
      <Whyus />
      <Faqs />
    </section>
  );
}

export default Homepage;
