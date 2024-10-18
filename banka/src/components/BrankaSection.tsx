export default function BrankaSection() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      
      {/* Background Image */}
      <img
        src="/src/assets/branka-bg.jpg"
        alt="Teal background with white arrows"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="flex flex-col md:flex-row items-center max-w-4xl">
          {/* Character Illustration */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="src/assets/branka.png"
              alt="Branka и Gordan"
              className="rounded-lg w-full h-auto"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 md:pl-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Запознај ги Бранка и Гордан – твоите водичи низ оваа платформа.
            </h2>
            <p>
              Тие ќе ти помогнат да го совладаш светот на финансиите на брз и
              лесен начин, и да го фатиш вајбот! Еве како изгледа процесот тука!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
