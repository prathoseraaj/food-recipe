const Layout = ({ children }) => {
  return (
    <>
      <nav className="w-full h-[7vh] flex items-center pl-10 bg-white">
        <h1 className="font-bold text-[20px]">Food-Recipe</h1>
      </nav>

      <main className="flex-grow">{children}</main>

      <footer className="bg-black text-white w-full p-4">
        <h1>Food Recipe</h1>
      </footer>
    </>
  );
};

export default Layout;
