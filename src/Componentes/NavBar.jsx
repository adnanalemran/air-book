const NavBar = () => {
    return (
      <div>
        <div className="navbar bg-base-100  fixed   top-0  z-10  mx-auto px-16 mx-w ">
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Bloge</a>
                </li>
                <li>
                  <a>Offer</a>
                  
                </li>
                <li>
                  <a>Airlines</a>
                </li><li>
                  <a>About</a>
                </li>
              </ul>
            </div>
            <div className="btn btn-ghost text-xl">
            <svg
              width="36"
              height="37"
              viewBox="0 0 36 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.2526 25.65L2.8606 36.0421C3.51638 36.3559 4.24862 36.5369 5.0251 36.5369H19.0703L13.2526 25.65Z"
                fill="url(#paint0_linear_1122_94)"
              />
              <path
                d="M0 16.3602V29.4237L8.51319 20.9105L0 16.3602Z"
                fill="url(#paint1_linear_1122_94)"
              />
              <path
                d="M30.9709 0.528804H5.02503C2.24899 0.528804 0 2.7778 0 5.55384V11.3272L2.02772 11.5968L3.48815 10.1363C4.00313 9.62134 4.83996 9.62134 5.35896 10.1363C5.87394 10.6513 5.87394 11.4881 5.35896 12.0071L5.32678 12.0393L15.9642 13.4635L19.9191 9.50869C20.6835 8.74427 21.5284 8.08044 22.4336 7.53327C23.3388 6.98611 24.3044 6.54758 25.3022 6.24584C26.1632 5.98432 26.9517 6.2056 27.4546 6.71253C27.9616 7.21946 28.1828 8.00399 27.9213 8.86497C27.6156 9.86273 27.181 10.8283 26.6339 11.7335C26.0827 12.6388 25.4229 13.4877 24.6585 14.2481L20.7036 18.2029L22.1278 28.8404L22.16 28.8082C22.675 28.2932 23.5118 28.2932 24.0308 28.8082C24.5458 29.3232 24.5458 30.16 24.0308 30.679L22.5704 32.1394L23.1578 36.5409H30.975C33.751 36.5409 36 34.2919 36 31.5158V5.54981C36 2.77377 33.751 0.52478 30.975 0.52478L30.9709 0.528804Z"
                fill="url(#paint2_linear_1122_94)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1122_94"
                  x1="-7.49557"
                  y1="18.6335"
                  x2="2.32426"
                  y2="57.5203"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#006CE4" />
                  <stop offset="1" stopColor="#006CE4" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1122_94"
                  x1="-5.43898"
                  y1="7.94093"
                  x2="16.0469"
                  y2="45.1814"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#006CE4" />
                  <stop offset="1" stopColor="#006CE4" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1122_94"
                  x1="-23"
                  y1="-22.6873"
                  x2="22.0956"
                  y2="97.1986"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#006CE4" />
                  <stop offset="1" stopColor="#006CE4" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
              <div className="">
                
                <span className="font-extrabold text-[#FFB700]">Air</span>
                <span className="text-[#006CE4]">Book</span>
              </div>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>Offer</a>
                  
                </li>
                <li>
                  <a>Airlines</a>
                </li><li>
                  <a>About</a>
                </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn bg-[#006CE4] text-white  px-6 py-1">Signin </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default NavBar;
  