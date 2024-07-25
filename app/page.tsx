import AirPollition from "./components/Airpollition/AirPollition";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import FeelsLike from "./components/FeelsLike/FeelsLike";
import FiveDayForecast from "./components/FiveDayForecast/FiveDayForecast";
import Humidity from "./components/Humidity/Humidity";
import Mapbox from "./components/Mapbox/Mapbox";
import Navbar from "./components/navbar";
import Population from "./components/Population/Population";
import Pressure from "./components/Pressure/Pressure";
import Sunset from "./components/Sunset/Sunset";
import Temprature from "./components/Temprature/Temprature";
import UvIndex from "./components/uvIndex/UvIndex";
import Visibility from "./components/Visibility/Visibility";
import Wind from "./components/wind/Wind";
import defaultStates from "./utils/defaultStates";

export default function Home() {
  return (
    <main className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
      <Navbar />
      <div className="pb-4 flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]">
          <Temprature />
          <FiveDayForecast />
        </div>
        <div className="flex flex-col w-full">
          <div className="instruments grid h-full gap-4 col-span-full sm-2:col-span-2 lg:grid-cols-3 xl:grid-cols-4">
            <AirPollition />
            <Sunset />
            <Wind />
            <DailyForecast />
            <UvIndex />
            <Population />
            <FeelsLike />
            <Humidity />
            <Visibility />
            <Pressure />
          </div>
          <div className="mapbox-con mt-4 flex gap-4 ">
            <Mapbox />
            <div className="states flex flex-col gap-3 flex-1 ">
              <h2 className="flex items-center gap-2 font-medium">
                Top Large Cities
              </h2>
              <div className="flex flex-col gap-4">
                {defaultStates.map((city, index) => {
                  return (
                    <div
                      key={index}
                      className="border rounded-lg cursor-pointer dark:bg-dark-grey shadow-sm dark:shadow-none"
                    >
                      <p className="px-6 py-4">{city.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <footer className="flex justify-center pb-6">
        <p className=" footer-text text-sm flex items-center gap-1 ">
          Made by Nahid
        </p>
      </footer> */}
    </main>
  );
}
