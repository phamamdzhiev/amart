const Header = () => {
  const backgroundImage = {
    image:
      "url('https://shtheme.com/demosd/pixer/wp-content/uploads/2019/02/13.png')",
  };

  return (
    <header
      className="min-h-[50vh] bg-right-bottom bg-cover"
      style={{ backgroundImage: `${backgroundImage.image}` }}
    >
      <div className="container">
        <div className="flex justify-between items-center text-white mb-1 p-6">
          <div>
            <h1 className="text-2xl">AMART</h1>
          </div>
          <div className="w-10 h-10 flex justify-center items-start border border-white rounded">
            <i className="bi bi-list text-4xl inline-flex"></i>
          </div>
        </div>

        <div className="text-center text-white p-3">
          <h1 className="text-4xl font-bold">Creative to plan your business</h1>
          <h2 className="text-lg my-6">
            Increase productivity with simple to-do app. app to manage your
            personal budgets.
          </h2>
          <a href="/" className="btn-main">
            Getting Started Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
