import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

function App() {
  return (
    <section>
      <div>
        <Navbar />
        <Hero />
        <HowItWorks />
        <Service />
      </div>
    </section>
  );
}

export default App;
