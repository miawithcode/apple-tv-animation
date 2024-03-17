import Button from "./Button";
import Container from "./Container";

const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast text-white">
        <Container className="flex min-h-11 items-center">
          <a
            href="/"
            className="-ml-6 flex h-11 items-center px-6 text-xl text-[#d0d0d0]"
          >
            <span className="sr-only">Back to homepage</span>
          </a>
        </Container>
      </header>

      <div className="bg-backgroundContrast sticky top-0  text-white">
        <Container className="flex min-h-[52px] items-center justify-between">
          <p>Apple TV+</p>
          <Button size="sm">Stream now</Button>
        </Container>
      </div>
    </>
  );
};
export default Header;
