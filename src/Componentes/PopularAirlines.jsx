import { useEffect } from "react";
import { useState } from "react";

const PopularAirlines = () => {
  const [Airlines, setAirlines] = useState([]);

  useEffect(() => {
    fetch("/Airlines.json")
      .then((res) => res.json())
      .then((data) => setAirlines(data));
  }, []);

  return (
    <div className=" py-8 container mx-auto px-8  ">
      <h2 className="text-2xl font-semibold text-gray-950">Popular Airlines</h2>

      <div className="grid grid-cols-4 gap-5  w-full py-12  ">
        {Airlines.map((airline) => (
          <div
            key={airline.id}
            className="flex gap-4 items-center   justify-center w-full max-w-sm relative "
          >
            <figure className="w-1/4">
              <img
                src={airline?.logo}
                alt="Logo "
                className="rounded-xl h-full"
              />
            </figure>

            <div className="w-3/4 pb-5 flex items-center justify-center">
              <div className="pl-3">
                <h2 className="font-bold text-sm text-blue-500">
                  {airline.name}
                </h2>
                <div className="rating rating-sm gap-2">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <div className="flex gap-1 items-center">
                    <p className="font-bold">{airline.rating}</p>
                    <p className="text-xs">({airline.reviews} reviews)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularAirlines;
