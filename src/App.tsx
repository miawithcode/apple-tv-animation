import Header from "./components/Header";
import Hero from "./components/section/Hero";
import Usps from "./components/section/Usps";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="bg-background">
          <Hero />
          <Usps />
        </div>
      </main>
    </>
  );
};
export default App;
