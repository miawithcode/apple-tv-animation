import Container from "./components/Container";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <div>
          <Container>Hero Component</Container>
        </div>

        {/* usps */}
        <div>
          <Container> </Container>
        </div>

        {/* 3 cols layout */}
        <div>
          <Container> </Container>
        </div>

        {/* Carousel with posters */}
        <div>
          <Container> </Container>
        </div>
      </main>
    </>
  );
};
export default App;
