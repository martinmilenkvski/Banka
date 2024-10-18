const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-[url('/src/assets/bg-hero.png')] bg-center text-white">
      {/* Left side: Text content */}
      <div className="lg:w-1/2 p-8 flex flex-col justify-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Развивај паметни финансиски вештини.
        </h1>
        <p className="mb-6">
          Прва и единствена платформа за финансиска едукација на млади на
          Sparkasse Bank.
        </p>
        <a href="#" className="btn btn-primary items-center text-white">
          Започни сега
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Right side: Image/Illustration */}
      <div className="lg:w-1/2 p-8 flex justify-center">
        <img
          src="src/assets/hero-image.png"
          alt="Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;
