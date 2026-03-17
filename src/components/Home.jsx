// src/Home.jsx
import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function Home() {
  // --- Mobile Nav State ---
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- FAQ State & Data ---
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you ship internationally?",
      answer: "At the moment we only ship to the USA.",
    },
    {
      question: "Why do I need an account to view the site?",
      answer:
        "This is to help ensure that all researchers who are browsing on our site are authorized researchers. This helps us to maintain compliance.",
    },
    {
      question: "How long do orders take to arrive?",
      answer:
        "Orders typically ship the same day and take 3–5 business days to arrive, depending on the courier.",
    },
    {
      question:
        "I think my package may be lost, or I’m having an order issue, what should I do?",
      answer:
        "Please contact our service team at cs@modernaminos.com with your full name, order #, and issue with as much description as possible so that they may assist.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7f9] font-sans text-[#15202b] flex flex-col overflow-x-hidden">
      {/* Header Container (Relative for absolute mobile menu positioning) */}
      <div className="relative z-50">
        <header className="bg-white py-2 px-4 md:px-6 flex items-center justify-between border-b border-[#e8eef1]">
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            <img
              src="/logo-svg.svg"
              alt="Modern Aminos Logo"
              className="w-36 md:w-64 h-16 md:h-20 object-contain md:ml-10"
            />
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center md:mr-10 gap-6 text-[#4a5f73]"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "15px",
              fontWeight: 500,
              textTransform: "capitalize",
              lineHeight: "15px",
            }}
          >
            <a
              href="#"
              className="bg-[#e9f0f5] text-[#165d83] px-4 py-1.5 rounded-full"
            >
              Home
            </a>
            <a href="#" className="hover:text-[#165d83] transition-colors">
              Contact Us
            </a>
          </nav>

          {/* Right Side Icons (User + Mobile Menu Toggle) */}
          <div className="flex items-center gap-2">
            {/* User Icon */}
            <button className="text-[#165d83] hover:text-[#0e3b54] p-2 md:p-3 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 md:w-7 md:h-7"
              >
                <path d="M12 11.6C9.20002 11.6 6.90002 9.30002 6.90002 6.50002C6.90002 3.70002 9.20002 1.40002 12 1.40002C14.8 1.40002 17.1 3.70002 17.1 6.50002C17.1 9.30002 14.8 11.6 12 11.6ZM12 2.60002C9.80002 2.60002 8.10002 4.30002 8.10002 6.50002C8.10002 8.70002 9.80002 10.4 12 10.4C14.2 10.4 15.9 8.70002 15.9 6.50002C15.9 4.30002 14.2 2.60002 12 2.60002Z" />
                <path d="M19 22.6H5.00002C3.60002 22.6 2.40002 21.4 2.40002 20C2.40002 16.4 5.40002 13.4 9.00002 13.4H15C18.6 13.4 21.6 16.4 21.6 20C21.6 21.4 20.4 22.6 19 22.6ZM9.00002 14.6C6.00002 14.6 3.60002 17 3.60002 20C3.60002 20.8 4.20002 21.4 5.00002 21.4H19C19.8 21.4 20.4 20.8 20.4 20C20.4 17 18 14.6 15 14.6H9.00002Z" />
              </svg>
            </button>

            {/* Mobile Hamburger Icon */}
            <button
              className="md:hidden text-[#165d83] hover:text-[#0e3b54] p-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </header>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`md:hidden absolute w-full bg-white border-b border-[#e8eef1] shadow-lg transition-all duration-300 ease-in-out origin-top ${
            isMobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col p-4 gap-4 text-[#4a5f73] font-medium text-center">
            <a
              href="#"
              className="bg-[#e9f0f5] text-[#165d83] px-4 py-3 rounded-lg w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-[#165d83] px-4 py-3 transition-colors w-full border border-transparent hover:bg-gray-50 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>

      {/* Warning Banner */}
{/* Warning Banner */}
      <div
        className="bg-[#165d83] border-none text-center py-2 px-4 text-xs md:text-base"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 500,
          color: "#ffffff",
        }}
      >
        Login for the full experience. - For laboratory research use only. Not
        for human consumption.
      </div>

      {/* Hero / Login Section with Sticky Background */}
      <main className="text-white py-12 px-4 md:m-7 m-4 rounded-2xl lg:px-7 flex items-center justify-center relative overflow-hidden shadow-lg">
        {/* 1. The Fixed Background Image Layer */}
        <div
          className="absolute inset-0 w-full h-full z-0 bg-fixed"
          style={{
            backgroundImage: "url('/bg-2.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        ></div>

        {/* 2. The Color Overlay Layer */}
        <div className="absolute inset-0 bg-[#0c2230] opacity-85 z-0"></div>

        {/* 3. The Content Container */}
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-20">
          {/* Left Column - Information */}
          <div className="flex flex-col justify-center max-w-lg ">
            <h2
              className="text-3xl md:text-4xl lg:text-[45px] font-bold mb-6 leading-tight drop-shadow-sm"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                color: "#ffffff",
              }}
            >
              Thank you for Visiting
              <br />
              Modern Aminos
            </h2>

            <p className="text-[15px] text-[#ffffff] mb-6 leading-relaxed font-normal">
              At Modern Aminos, we are committed to maintaining a highly
              compliant and researcher-friendly experience. To support this
              commitment, we now require researchers to log in to their user
              account in order to view our full selection of research materials.
              If you do not have an existing account with us please register
              below.
            </p>

            <p className="text-[15px] text-[#ffffff] mb-8 leading-relaxed font-normal">
              <strong className="text-gray-200">Please be advised:</strong> All
              compounds and research materials provided by Modern Aminos are
              strictly for laboratory and research use only. They are not
              approved for human consumption by the Food and Drug Administration
              (FDA). These products should not be used for any form of in vivo
              experimentation or for any other non-laboratory purpose. By
              purchasing these products, you acknowledge that they will be used
              exclusively within a controlled and qualified research
              environment.
            </p>

            <div>
              <button
                className="px-6 py-2.5 border border-[#ffffff] text-white text-[16px] font-medium rounded-md hover:bg-white/10 transition-colors"
                style={{
                  fontFamily: "Helvetica, sans-serif",
                  fontWeight: 500,
                }}
              >
                Register Now
              </button>
            </div>
          </div>

          {/* Right Column - Login Form */}
          <div className="flex justify-center lg:justify-end ">
            <div className="w-full max-w-md border border-[#ffffff] bg-black/10 rounded-xl p-6 md:p-8 backdrop-blur-md shadow-xl">
              <h3
                className="text-2xl font-bold mb-6"
                style={{
                  fontFamily: "Poppins, Sans-serif",
                  fontSize: "25px",
                  fontWeight: 700,
                  lineHeight: "35px",
                  color: "#FFFFFF",
                }}
              >
                Login
              </h3>

              <form className="space-y-4">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-200 mb-1.5"
                    style={{
                      fontFamily: "Poppins, Sans-serif",
                      fontSize: "15px",
                      lineHeight: "21px",
                      color: "#FFFFFF",
                    }}
                  >
                    Username or email address *
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black/20 border border-[#ffffff] rounded-md px-3 py-2 text-white focus:outline-none focus:border-[#4ca1cf]"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-200 mb-1.5"
                    style={{
                      fontFamily: "Poppins, Sans-serif",
                      fontSize: "15px",
                      lineHeight: "21px",
                      color: "#FFFFFF",
                    }}
                  >
                    Password *
                  </label>
                  <input
                    type="password"
                    className="w-full bg-black/20 border border-[#ffffff] rounded-md px-3 py-2 text-white focus:outline-none focus:border-[#4ca1cf]"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 rounded bg-transparent border-[#304a5e] text-[#165d83] focus:ring-[#165d83] focus:ring-offset-[#0c2230]"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm text-gray-300"
                    style={{
                      fontFamily: "Poppins, Sans-serif",
                      fontSize: "15px",
                      lineHeight: "21px",
                      color: "#FFFFFF",
                    }}
                  >
                    Remember Me
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    className="bg-[#165d83] hover:bg-[#124b69] text-white px-8 py-2 rounded-full text-sm font-bold transition-colors"
                  >
                    Log in
                  </button>
                </div>
              </form>

              <div className="mt-6 text-sm flex items-center justify-center md:justify-start flex-wrap gap-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Lost your password?
                </a>
                <span className="hidden md:inline mx-2 text-gray-600">|</span>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Register
                </a>
              </div>

              {/* SSO Buttons */}
              <div className="mt-8 space-y-3">
                <div className="mt-8 space-y-3">
                  <button
                    className="w-1/2 md:w-60 flex items-center justify-center md:justify-start bg-white text-gray-800 border border-gray-300 rounded-md py-2 px-2 sm:px-4 hover:bg-gray-50 transition-colors text-xs sm:text-sm shadow-sm"
                    style={{
                      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                      fontWeight: 500, // Medium = 500
                    }}
                  >
                    <svg className="w-4 h-4 mr-2 shrink-0" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span className="truncate">
                      Continue with{" "}
                      <strong className="ml-1 font-bold text-gray-700">
                        Google
                      </strong>
                    </span>
                  </button>

                  <button
                    className="w-1/2 md:w-60 flex items-center justify-center md:justify-start bg-[#2f2f2f] text-white border border-[#3f3f3f] rounded-md py-2 px-2 sm:px-4 hover:bg-[#3f3f3f] transition-colors text-xs sm:text-sm shadow-sm"
                    style={{
                      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    <svg className="w-4 h-4 mr-2 shrink-0" viewBox="0 0 21 21">
                      <rect x="1" y="1" width="9" height="9" fill="#f25022" />
                      <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
                      <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
                      <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
                    </svg>
                    <span className="truncate">
                      Continue with{" "}
                      <strong className="ml-1 font-bold">Microsoft</strong>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* The Modern Aminos Guarantee */}
      <section className="py-16 px-4 md:px-12 lg:px-5 bg-[#f5f7f9]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0a2f42] mb-16">
            The Modern Aminos Guarantee
          </h2>

          <div className="flex flex-col gap-16 md:gap-24">
            {/* Guarantee Item 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="w-full lg:w-1/2">
                <img
                  src="/guarantee-1.webp"
                  alt="Scientist conducting research"
                  className="w-full h-auto rounded-2xl shadow-md object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col items-start">
                <h3 className="text-xl md:text-2xl font-bold text-[#0a2f42] mb-4">
                  3rd Party Multi Vial Batch Tested
                </h3>
                <p className="text-[#4a5f73] text-sm leading-relaxed mb-6">
                  At Modern Aminos, we prioritize the quality and authenticity
                  of every product we offer. Each product undergoes third-party,
                  multi-vial batch testing to verify purity, compound identity,
                  quantity, and endotoxin levels. In addition to this rigorous
                  testing process, every vial includes a unique batch number,
                  allowing you to directly match your product to its
                  corresponding laboratory testing report.
                </p>
                <p className="font-bold text-[#0a2f42] mb-4 text-sm">
                  Login for the full experience.
                </p>
                {/* Changed this button */}
                <button className="bg-[#165d83] hover:bg-[#124b69] text-white px-8 py-2 rounded-full text-sm font-medium transition-colors">
                  Login
                </button>
              </div>
            </div>

            {/* Guarantee Item 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <div className="w-full lg:w-1/2">
                <img
                  src="/guarantee-2.webp"
                  alt="Microscope in laboratory"
                  className="w-full h-auto rounded-2xl shadow-md object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col items-start">
                <h3 className="text-xl md:text-2xl font-bold text-[#0a2f42] mb-4">
                  Customer Service and Experience Always Comes First
                </h3>
                <p className="text-[#4a5f73] text-sm leading-relaxed mb-6">
                  We understand that even though high quality research materials
                  allows for the best most reliable results in laboratory
                  settings, things like slow shipping, and poor customer service
                  can make already tedious research more of a headache. That is
                  why here at Modern Aminos our customer service and shipping
                  teams work around the clock to ensure that you are getting
                  your material fast, and any shipping related inquiries
                  handled.
                </p>
                <p className="font-bold text-[#0a2f42] mb-4 text-sm">
                  Login for the full experience.
                </p>
                {/* Changed this button */}
                <button className="bg-[#165d83] hover:bg-[#124b69] text-white px-8 py-2 rounded-full text-sm font-medium transition-colors">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Features Cards --- */}
      <section className="py-12 px-4 md:px-12 lg:px-24 bg-[#f5f7f9]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {/* Card 1 */}
          <div className="col-span-1 bg-[#0c2230] border-[1.5px] border-[#165d83] rounded-xl md:rounded-[2rem] p-5 md:p-10 text-center flex flex-col items-center justify-center shadow-lg">
            <img
              src="/icon-shield.webp"
              alt="Third party tested"
              className="w-12 h-12 md:w-14 md:h-14 mb-3 md:mb-6 object-contain"
            />
            <h3 className="text-white text-[13px] sm:text-sm md:text-xl font-bold md:mb-4">
              Third party tested
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed hidden md:block">
              Third Party Multi Vial Batch Tested: Our products undergo rigorous
              third-party, multi-vial batch testing to ensure exceptional
              safety, purity, and quality. Batch testing also allows you to
              easily match each peptide to its corresponding Certificate of
              Analysis (COA).
            </p>
          </div>

          {/* Card 2 */}
          <div className="col-span-1 bg-[#0c2230] border-[1.5px] border-[#165d83] rounded-xl md:rounded-[2rem] p-5 md:p-10 text-center flex flex-col items-center justify-center shadow-lg">
            <img
              src="/icon-truck.webp"
              alt="Fast Shipping"
              className="w-12 h-12 md:w-14 md:h-14 mb-3 md:mb-6 object-contain"
            />
            <h3 className="text-white text-[13px] sm:text-sm md:text-xl font-bold md:mb-4">
              Fast Shipping
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed hidden md:block">
              Same-Day Shipping Monday through Friday when you order before 12
              PM CST! At Modern Aminos, we take pride in our fast, reliable
              shipping to ensure your order arrives without delay.
            </p>
          </div>

          {/* Card 3 (Spans 2 columns on mobile, 1 on desktop) */}
          <div className="col-span-2 md:col-span-1 bg-[#0c2230] border-[1.5px] border-[#165d83] rounded-xl md:rounded-[2rem] p-5 md:p-10 text-center flex flex-col items-center justify-center shadow-lg">
            <img
              src="/icon-headset.png"
              alt="24/7 Customer Support"
              className="w-12 h-12 md:w-14 md:h-14 mb-3 md:mb-6 object-contain"
            />
            <h3 className="text-white text-[13px] sm:text-sm md:text-xl font-bold md:mb-4">
              24/7 Customer Support{" "}
              <span className="md:hidden">
                <br />
              </span>
              <span className="hidden md:inline">
                <br />
              </span>
              (Monday-Friday)
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed hidden md:block">
              Our dedicated customer service team is available Monday through
              Friday, and for most of the day on weekends, to ensure your needs
              are handled quickly and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* --- Frequently Asked Questions --- */}
      <section className="py-20 px-4 md:px-12 lg:px-24 bg-[#f5f7f9] flex flex-col items-center">
        {/* Section Header */}
        <div
          className="bg-[#165d83] text-white px-5 py-1.5 rounded-full text-[15px] font-semibold tracking-wide mb-4 text-center"
          style={{
            fontFamily: "Helvetica, Sans-serif",
            fontWeight: 600,
          }}
        >
          Frequently Asked Questions
        </div>
        <h2
          className="text-3xl md:text-5xl font-bold text-[#002434] mb-12 text-center"
          style={{
            fontFamily: "Helvetica, Sans-serif",
            fontWeight: 600,
          }}
        >
          Need Help?
        </h2>

        {/* FAQ Container */}
        <div className="w-full max-w-4xl flex flex-col gap-3">
          <div className="bg-[#0c2230] text-white text-center py-4 rounded-t-2xl rounded-b-sm text-sm font-bold uppercase tracking-widest shadow-md">
            General Questions
          </div>

          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;

            return (
              <div
                key={index}
                className={`flex flex-col rounded-[2rem] overflow-hidden transition-colors duration-300 shadow-sm ${
                  isOpen
                    ? "bg-white text-[#0a2f42] shadow-md"
                    : "bg-[#0c2230] text-white"
                }`}
              >
                {/* Question Row */}
                <div
                  onClick={() => toggleFaq(index)}
                  className={`px-4 md:px-6 py-4 flex justify-between items-center cursor-pointer transition-colors duration-300 ${
                    isOpen ? "hover:bg-gray-50" : "hover:bg-[#123145]"
                  }`}
                >
                  <span className="text-sm font-medium pr-4">
                    {faq.question}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className={`w-5 h-5 flex-shrink-0 ml-2 md:ml-4 fill-current transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z" />
                  </svg>
                </div>

                {/* Answer Row with Grid Animation */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 md:px-6 pb-5 text-sm leading-relaxed text-[#4a5f73]">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- Quote Banner with Bulletproof Fixed Background --- */}
      <section className="relative py-24 md:py-32 mb-10 md:mb-27 px-4 md:px-6 text-center flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full z-0 bg-fixed"
          style={{
            backgroundImage: "url('/bg1.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        ></div>

        <div className="absolute inset-0 bg-[#082230] opacity-80 z-0"></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="bg-white rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-6 md:mb-8 shadow-lg">
            <svg
              className="w-8 h-8 md:w-10 md:h-10 text-[#0c2230] fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <h2
            className="text-2xl md:text-5xl lg:text-5xl font-extrabold text-white max-w-4xl leading-snug md:leading-tight drop-shadow-md"
            style={{
              fontFamily: "Helvetica, Sans-serif",
              fontWeight: 600,
            }}
          >
            Quality products and exceptional service are very important to us
          </h2>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-[#113B54] text-white pt-16 md:pt-20 pb-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 mb-16">
          {/* Column 1: Logo & Tagline */}
          <div>
            <img
              src="/logo-svg.svg"
              alt="Modern Aminos Logo"
              className="w-48 md:w-56 mb-6 brightness-0 invert object-contain"
            />
            <p className="text-sm text-white font-medium pr-4 leading-relaxed">
              Quality products and exceptional service are very important to us
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="flex flex-col gap-10">
            <div>
              <h4
                className="text-[17px] font-bold mb-4"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  color: "#FFFFFF",
                }}
              >
                Contact Us
              </h4>
              <a
                href="mailto:cs@modernaminos.com"
                className="text-sm text-white hover:text-gray-300 flex items-center gap-2 transition-colors break-all"
              >
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                cs@modernaminos.com
              </a>
            </div>
            <div>
              <h4 className="text-[17px] font-bold mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm text-white font-medium">
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h4 className="text-[17px] font-bold mb-4">
              Subscribe now to save 15%
            </h4>
            <p className="text-sm text-white mb-6 leading-relaxed font-medium">
              Subscribe and Get Exclusive Updates Straight to your Inbox for
              Free
            </p>
            <form className="flex w-full rounded-full overflow-hidden shadow-sm border border-[#ffffff]">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent px-4 py-2.5 w-full text-white text-sm focus:outline-none placeholder-gray-300 min-w-0"
              />
              <button
                type="submit"
                className="bg-white text-black px-4 md:px-6 py-2.5 font-bold text-sm flex items-center gap-2 hover:bg-gray-100 transition-colors whitespace-nowrap shrink-0"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Line & Disclaimer */}
        {/* Footer Bottom Line & Disclaimer */}
        <div className="max-w-7xl mx-auto border-t border-[#1e445e] pt-10">
          <p
            className="text-[11px] md:text-sm text-white font-medium md:font-normal text-center mb-8 md:mb-10 max-w-5xl mx-auto leading-relaxed"
            style={{
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Please be advised: All compounds and research materials provided by
            Modern Aminos are strictly for laboratory and research use only.
            They are not approved for human consumption by the Food and Drug
            Administration (FDA). These products should not be used for any form
            of in vivo experimentation or for any other non-laboratory purpose.
            By purchasing these products, you acknowledge that they will be used
            exclusively within a controlled and qualified research environment.
          </p>

          {/* Changed to flex-col-reverse so Copyright goes to the bottom on mobile */}
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center text-xs md:text-sm text-white font-medium md:font-normal gap-6 lg:gap-0 text-center lg:text-left">
            <p
              className="mt-2 lg:mt-0"
              style={{
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Copyright 2025, All Rights Reserved.
            </p>
            
            {/* Added gap-y-3 for better vertical spacing when the links wrap on tiny screens */}
            <div
              className="flex flex-wrap justify-center lg:justify-end gap-x-4 gap-y-3 md:gap-6"
              style={{
                fontFamily: "Helvetica, sans-serif",
                fontWeight: 500,
              }}
            >
              <a href="#" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Refund Policy
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Cart Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-[#165d83] hover:bg-[#124b69] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105 relative">
          <ShoppingCart size={24} />
          <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#0c2230]">
            0
          </span>
        </button>
      </div>
    </div>
  );
}