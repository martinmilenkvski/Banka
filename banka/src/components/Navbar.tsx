const Navbar = () => {
  return (
    <div className="navbar bg-primary text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-primary rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Почетна</a>
            </li>
            <li>
              <a>Курсеви</a>
              <ul className="p-2">
                <li>
                  <a>Подкатегорија 1</a>
                </li>
                <li>
                  <a>Подкатегорија 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Контакт</a>
            </li>
            <li>
              <a>VibeOn Edu</a>
            </li>
            <li>
              <a>Шпаркасе Банка</a>
            </li>
          </ul>
        </div>

        <img src="/src/assets/Logo.png" className="h-10 w-auto pl-5 pr-5" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Почетна</a>
          </li>
          <li>
            <a>Курсеви</a>
          </li>
          <li>
            <a>VibeOn Edu</a>
          </li>
          <li>
            <a>Шпаркасе Банка</a>
          </li>
          <li>
            <a>Контакт</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-accent text-white">
          Регистрација
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a className="btn bg-accent text-white ml-3">
          Најава
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
