import Header from "./components/Header";
import Carousel from "./components/section/Carousel";
import Hero from "./components/section/Hero";
import Usps from "./components/section/Usps";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="bg-background relative z-10">
          <Hero />
          <Usps />
        </div>
        <Carousel />
      </main>
    </>
  );
};
export default App;
