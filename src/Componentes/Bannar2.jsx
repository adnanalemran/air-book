const Bannar2 = () => {
  return (
    <div className=" mx-auto ">
      <div
        className="hero  "
        style={{
          backgroundImage:
            "url(https://s3-alpha-sig.figma.com/img/7315/e13c/65f2285bce36a62e819a38d134b77bed?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dQir7yFPArvsL3RgHA9Uc9runNa-rNvn5eup6DTh-PVK1pMoM2AGNQ045X0qmzSalVb1s1HVh59zmRnl-EDb4-mn0xYMgi5LNjTv97GkwNeoUiP60bPxc1xu6cQ-NRzxIE5CLfUhHPQNZo~VbhSC3j6fgL07uNg~gA-7udoyKuKOK4H5P0Ao7tos6o10aMasQqL1mq4YoE2wCOVU03TS3xKSOnIv4wZ1DepEEi~gRCjWwspMunpBFALuoPHyGcXs8cR1QsToQ1OpA0mC~ukxqh02AqLRCj7KBPnJzCEKCYICUW2mPEvEB-e~87lt2fbEnumddDZL6y13XU8atSg4YA__)",
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-8xl   my-24">
            <h1 className="mb-5 text-2xl text-white text-left">
              Welcome to{" "}
              <span className="font-bold text-blue-600">AirBook </span>
            </h1>
            <div className=" bg-base-100 p-4 rounded-xl text-gray-900">
              <div className="flex py-3 justify-between">


                <div className="flex">

                  <button className="btn btn-sm font-light ">
                    <input type="radio" name="radio-1" className="radio" /> One
                    way
                  </button>
                  <button className="btn btn-sm bg-blue-600 font-light  text-white mx-2">
                    <input type="radio" name="radio-1" className="radio" /> One
                    way
                  </button>
                </div>
                <div className="flex gap-2">
                  <select className="select select-bordered select-sm w-full max-w-xs bg-blue-100 text-blue-600">
                    <option disabled selected>
                      Small
                    </option>
                    <option>Small Apple</option>
                    <option>Small Orange</option>
                    <option>Small Tomato</option>
                  </select>
                  <select className="select select-bordered select-sm w-full max-w-xs bg-blue-100 text-blue-600">
                    <option disabled selected>
                      Small
                    </option>
                    <option>Small Apple</option>
                    <option>Small Orange</option>
                    <option>Small Tomato</option>
                  </select>
                </div>
              </div>
              <div className="grid  gap-2 lg:flex ">
                <div className="flex border-1 border rounded-xl p-2 text-left gap-2">
                <div className="border-r-2 border-gray-300 text-xl p-2 font-semibold">DAK</div>
                  <div className="">
                  <p className="text-lg">Dhaka</p> 
                  <p className="text-sm block">Hazrat Shahjalal  </p> 
                  </div>
                  
                </div><div className="flex border-1 border rounded-xl p-2 text-left gap-2">
                <div className="border-r-2 border-gray-300 text-xl p-2 font-semibold">Cxe</div>
                  <div className="">
                  <p className="text-lg">Cox’s Bazar</p> 
                  <p className="text-sm">Hazrat Shahjalal </p> 
                  </div>
                  
                </div><div className="flex border-1 border rounded-xl p-2 text-left gap-2">
                <div className="border-r-2 border-gray-300 text-xl p-2 font-semibold">03</div>
                  <div className="">
                  <p className="text-lg">octobee</p> 
                  <p className="text-sm">Hazrat Shahjalal </p> 
                  </div>
                  
                </div><div className="flex border-1 border rounded-xl p-2 text-left gap-2">
                <div className="border-r-2 border-gray-300 text-xl p-2 font-semibold">05</div>
                  <div className="">
                  <p className="text-lg">october</p> 
                  <p className="text-sm">Hazrat Shahjalal </p> 
                  </div>
                  
                </div>
                <div className="flex border-1 border rounded-xl p-2 text-left   bg-warning w-20 items-center justify-center align-middle">
                <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.6503 21.2964L16.9804 15.5214C18.4382 13.8242 19.237 11.6888 19.237 9.46572C19.237 4.27178 14.922 0.0460205 9.61849 0.0460205C4.31494 0.0460205 0 4.27178 0 9.46572C0 14.6597 4.31494 18.8854 9.61849 18.8854C11.6095 18.8854 13.5069 18.2973 15.1291 17.1809L20.842 22.9998C21.0808 23.2426 21.402 23.3766 21.7462 23.3766C22.0719 23.3766 22.381 23.2549 22.6156 23.0338C23.1141 22.564 23.13 21.785 22.6503 21.2964ZM9.61849 2.50333C13.5387 2.50333 16.7278 5.62658 16.7278 9.46572C16.7278 13.3049 13.5387 16.4281 9.61849 16.4281C5.69833 16.4281 2.50917 13.3049 2.50917 9.46572C2.50917 5.62658 5.69833 2.50333 9.61849 2.50333Z" fill="white"/>
</svg>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar2;
