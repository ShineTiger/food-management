const Navbar = ({ title }) => {
  return (
    <>
      <div className="navbar bg-base-100 bg-amber-400">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">{title}</a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
