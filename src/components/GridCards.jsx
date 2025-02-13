const GridCards = () => {
  return (
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-2 flex items-center gap-2">
        You&apos;re going to Cape Town <span>🏔️☀️</span>
      </h1>
      <p className="text-gray-500 mb-6 text-center">
        You&apos;re leaving next Saturday and your Airbnb is waiting for you.
        <br /> The weather forecast looks promising!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-5xl">
        {/* Flight Card */}
        <div className="bg-white p-4 rounded-2xl shadow-md border transform rotate-[-5deg]">
          <p className="text-green-500 font-semibold">On Time</p>
          <div className="mt-2">
            <p className="text-lg font-bold">BER</p>
            <p className="text-sm text-gray-500">Terminal A</p>
            <p className="text-lg font-bold mt-2">CPT</p>
            <p className="text-sm text-gray-500">Terminal 2</p>
          </div>
          <p className="text-gray-700 mt-2">
            Seat <span className="font-bold">24F</span> - Economy
          </p>
        </div>

        {/* To-do List Card */}
        <div className="bg-white p-4 rounded-2xl shadow-md border transform rotate-[3deg]">
          <h3 className="font-bold mb-2">Last things to do</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" /> Buy new
              suitcase
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" /> Bring cat to
              parents
            </li>
            <li className="flex items-center gap-2">Book museum tickets</li>
          </ul>
        </div>

        {/* Stay Card */}
        <div className="bg-white p-4 rounded-2xl shadow-md border transform rotate-[-1deg] relative">
          <p className="text-sm bg-gray-200 px-2 py-1 rounded-md inline-block">
            Guest Favorite
          </p>
          <h3 className="font-bold mt-2">Your stay: Historic apartment</h3>
          <p className="text-sm text-gray-500">Nights: 12.08 - 16.08</p>
          <p className="text-sm text-gray-500">Check-in: From 15:00</p>
        </div>

        {/* Map Card */}
        <div className="bg-white p-4 rounded-2xl shadow-md border transform rotate-[4deg] flex items-center justify-center">
          <p className="ml-2 font-bold">Map of Cape Town</p>
        </div>
      </div>
    </div>
  );
};

export default GridCards;
