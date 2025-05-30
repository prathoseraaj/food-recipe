const Layout = ({ children }) => {
  return (
    <>
      <nav className="w-full h-[7vh] flex items-center pl-10 mb-5 text-white bg-black">
        <h1 className="font-bold text-[20px]">Food-Recipe</h1>
      </nav>

      <main className="flex-grow">{children}</main>

      <footer className="bg-black text-white w-full p-4 flex justify-center mt-20 ">
        <h1>©Food Recipe . All rights reserved</h1>
      </footer>
    </>
  );
};

export default Layout;
