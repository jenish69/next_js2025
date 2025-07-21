"use client";

import { useEffect, useState } from "react";

const Randomejokes = () => {
  const [randomeJokes, setRandomeJokes] = useState({});
  const [showJokes, setShowJokes] = useState(true);

  const fetchRandomejoke = async () => {
    const URL = "https://official-joke-api.appspot.com/random_joke";
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);

    setRandomeJokes(data);
  };

  useEffect(() => {
    fetchRandomejoke();
  }, []);

  return (
    <div className="min-h-[673px] flex items-center justify-center p-4">
      <div
        className="relative bg-white rounded-xl p-[3px] max-w-md w-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-blue-600  before:absolute 
            before:inset-0 before:rounded-xl 
            before:blur-[12px] before:bg-gradient-to-tr 
            before:from-yellow-400 before:via-pink-500 before:to-blue-600 
            before:z-[-1]"
      >
        <div className="text-center rounded-[10px] bg-black w-full p-8">
          <div className="text-6xl mb-4">☕</div>
          <h2 className="text-2xl font-bold text-white mb-6">
            Random Jokes Generator
          </h2>

          <div className="space-y-4">
            <p className="text-lg text-gray-300 font-medium">
              {randomeJokes.setup}
              {/* {randomJokes.} */}
            </p>

            {showJokes ? (
              <button
                onClick={() => setShowJokes(false)}
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md cursor-pointer hover:shadow-lg"
              >
                Reveal Punchline
              </button>
            ) : (
              <div className="animate-fade-in">
                <p className="text-xl text-amber-700 font-bold bg-amber-50 p-4 rounded-lg border-2 border-amber-200 ">
                  {randomeJokes.punchline} 😄
                </p>
                <button
                  onClick={() => setShowJokes(true)}
                  className="mt-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer"
                >
                  Hide Punchline
                </button>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={fetchRandomejoke}
              className="text-l text-amber-700 font-bold bg-amber-50 px-4 mt-3 rounded-lg border-2 border-amber-200 cursor-pointer hover:shadow-lg"
            >
              Next
            </button>
            <div className="mt-6 text-sm text-gray-500">
              Joke ID: {randomeJokes.id}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Randomejokes;
