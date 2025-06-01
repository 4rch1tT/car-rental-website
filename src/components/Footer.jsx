import React from "react";
import { MapPinned, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-khaki text-white p-8">
      <nav className="mr-8">
        <h3 className="text-3xl font-libre-baskerville font-bold text-blue">
          Rentr
        </h3>
        <h6 className="footer-title font-poppins">Social</h6>
        <div className="flex flex-col gap-4">
          <a className="flex font-poppins gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
            Twitter
          </a>
          <a className="flex gap-3 font-poppins">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
            YouTube
          </a>
          <a className="flex gap-3 font-poppins">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
            Facebook
          </a>
        </div>
      </nav>
      <nav className="mr-8">
        <h6 className="footer-title font-poppins">Contact Information</h6>
        <div className="flex items-center gap-3 mb-2">
          <MapPinned />
          <span className="w-full max-w-xs font-poppins">
            Rentr 1234 Grand Avenue Suite 205, Midtown New York, NY 10001 United
            States
          </span>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <Mail />
          <span className="font-poppins">support@rentr.com</span>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <Phone />
          <span className="font-poppins">+1 (123) 456-7890</span>
        </div>
      </nav>
      <nav className="mr-8 font-poppins">
        <h6 className="footer-title">Home</h6>
        <a className="link link-hover ">About</a>
        <a className="link link-hover ">Fleet</a>
        <a className="link link-hover ">Contact Us</a>
      </nav>
      <nav className="mr-8 font-poppins">
        <h6 className="footer-title">Contact Us</h6>
        <p className="w-full max-w-xs mb-4">
          Have questions or need assistance? Reach out to us.
        </p>
        <label className="input validator bg-white text-midnight rounded-3xl border-midnight input-bordered w-full max-w-xs flex items-center gap-2">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input type="email" placeholder="mail@site.com" required />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>
      </nav>
    </footer>
  );
};

export default Footer;
