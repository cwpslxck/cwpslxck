import Header from "./parts/header";
import Hero from "./parts/Hero";
import Repoes from "./parts/Repoes";
import Footer from "./parts/Footer";
import Blur1 from "./parts/blur1";
import Prices from "./parts/Prices";
import Projects from "./parts/Projects";

function App() {
  return (
    <>
      <Blur1 />
      <Header />
      <Hero />
      <main className="w-full flex justify-center">
        <div className="w-full max-w-5xl px-4">
          <Projects />
          <Prices />
          <Repoes />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
