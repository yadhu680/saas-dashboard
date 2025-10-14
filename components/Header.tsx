const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white p-4 shadow">
      <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
      <div className="flex items-center gap-4">
        <button className="bg-primary text-white px-3 py-1 rounded">Notifications</button>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;
