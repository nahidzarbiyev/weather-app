"use client";

import { useGlobalContext } from "@/app/context/globalContext";
import { wind } from "@/app/utils/icons";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Compass from "@/public/compass_body.svg";
import CompassArrow from "@/public/compass_arrow.svg";
const Wind = () => {
  const { forecast } = useGlobalContext();
  const windSpeed = forecast?.wind?.speed;
  const windDir = forecast?.wind?.deg;
  if (!windSpeed || !windDir) {
    return <Skeleton className="h-[12rem] w-full" />;
  }

  return (
    <div className="pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex flex-col gap-8 dark:bg-dark-grey shadow-sm dark:shadow-none">
      <h2 className="flex items-center gap-3 font-medium"> {wind} wind</h2>
      <div className="compass relative flex items-center justify-center">
        <div className="image relative">
          <Image src={Compass} alt="compass" width={110} height={11} />
          <Image
            src={CompassArrow}
            alt="compass"
            style={{
              transform: `rotate(${windDir}deg) translateX(-50%) `,
              height: "100%",
            }}
            width={11}
            height={11}
            className="absolute top-0 left-[50%] transition-all duration-500 ease-in-out dark:invert "
          />
        </div>
        <p className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          {Math.round(windSpeed)} m/s
        </p>
      </div>
    </div>
  );
};

export default Wind;
