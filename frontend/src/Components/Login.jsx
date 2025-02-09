import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { ethers } from "ethers";

function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ethereumAddress, setEthereumAddress] = useState(null);

  // Disable scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }
    return () => {
      document.body.style.overflow = "auto"; // Clean up
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Handle Ethereum wallet connection
  const handleEthereumLogin = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []); // Request access to MetaMask
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setEthereumAddress(address);
        console.log("Ethereum Address:", address);
      } catch (error) {
        console.error("Error connecting to Ethereum wallet:", error);
      }
    } else {
      alert("Please install MetaMask or another Ethereum wallet.");
    }
  };

  // Handle Email/Password submission
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // TODO: Add email/password authentication logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-1/3 z-50">
        <h2 className="text-xl font-semibold mb-4">Log in</h2>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          X
        </button>

        <div className="space-y-4">
          {/* Google Login */}
          <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
                // TODO: Handle Google login success
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </GoogleOAuthProvider>

          {/* Ethereum Wallet Login */}
          <button
            onClick={handleEthereumLogin}
            className="w-full py-2 bg-gray-500 text-white rounded-md"
          >
            {ethereumAddress
              ? `Connected: ${ethereumAddress}`
              : "Sign in with Ethereum"}
          </button>

          <hr className="my-4" />

          {/* Email/Password Login */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-md"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
LoginModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginModal;
