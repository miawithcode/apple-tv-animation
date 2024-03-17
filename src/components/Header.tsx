const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast flex min-h-11 items-center px-6 text-white">
        <a href="/" className="-ml-6 flex h-11 items-center px-6">
          <span className="sr-only">Back to homepage</span>
        </a>
      </header>
      <div className="bg-backgroundContrast sticky top-0 flex min-h-11 items-center px-6 text-white">
        Apple TV+
      </div>
    </>
  );
};
export default Header;
