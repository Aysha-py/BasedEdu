import { useState } from "react";
import { Link } from "react-router-dom";
import Weboja from "../assets/Weboja.png";
import LoginModal from "../Components/Login"; // Import your modal component

function Landing() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <div>
      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />

      <header className="fixed inset-x-0 top-0 z-10 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a aria-current="page" className="flex items-center" href="/">
                <img className="h-7 w-auto" src={Weboja} alt="" />
                <p className="sr-only">Website Title</p>
              </a>
            </div>

            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <a
                aria-current="page"
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#"
              >
                About Us
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#"
              >
                Features
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#"
              >
                Products
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#"
              >
                Blog
              </a>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={openLoginModal}
                className="hidden border border-[#0244F1] items-center justify-center rounded-3xl bg-white px-7 py-2 text-sm font-semibold text-[#0244F1] shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
              >
                Log in
              </button>

              <Link
                to={"/signup"}
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Connect Wallet
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Landing;
