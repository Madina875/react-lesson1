import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero_bottom from "./components/hero-bottom/Hero-bottom";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <main>
          <Hero />
          <Hero_bottom />
          <Services />
          <Testimonials />
        </main>
        <Footer />
      </>
    </div>
  );
}

export default App;
