import Faqs from "./components/Fas";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Service from "./components/service";

import Whyus from "./components/Whyus";

function App() {
  return (
    <section>
      <div>
        <Navbar />
        <Hero />
        <HowItWorks />
        <Service />
        <Whyus />
        <Faqs />
        <Footer />
      </div>
    </section>
  );
}

export default App;
