export default function CardsHero() {
  return (
    <div className="w-full h-screen grid grid-cols-4 grid-rows-2 bg-[url('src/assets/bg-cards.jpg')] bg-cover bg-center">
      <div className="bg-purple-700 row-span-1 col-span-1 flex flex-col justify-between p-4"></div>
      <div className="bg-secondary row-span-1 col-span-1 flex flex-col justify-between p-4">
        <span className="text-white text-3xl font-bold">1.</span>
        <div>
          <h2 className="text-white text-xl font-semibold">
            Научи да раководиш со своите финансии
          </h2>
          <p className="text-white text-sm">
            Освој ги техниките за управување со твоите лични финансии.
          </p>
        </div>
      </div>
      <div className="bg-trasnparent row-span-1 col-span-2 flex flex-col justify-between p-4">
        <span className="text-blue-500 text-3xl font-bold">2.</span>
        <div>
          <h2 className="text-blue-500 text-xl font-semibold">
            Започни да го планираш својот бизнис
          </h2>
          <p className="text-gray-600 text-sm">
            Со овие знаења ќе се чувствуваш спремен
          </p>
        </div>
      </div>
      <div className="bg-transparent row-span-1 col-span-2 flex flex-col justify-between p-4">
        <span className="text-blue-500 text-3xl font-bold">4.</span>
        <div>
          <h2 className="text-blue-500 text-xl font-semibold">
            Изгради бизнис
          </h2>
          <p className="text-blue text-sm">
            Научи како да создадеш успешен бизнис
          </p>
        </div>
      </div>
      <div className="bg-yellow-400 row-span-1 col-span-1 flex flex-col justify-end p-4">
        <img src="/src/assets/clarity_arrow-line.png" alt="" />
      </div>
    </div>
  );
}
