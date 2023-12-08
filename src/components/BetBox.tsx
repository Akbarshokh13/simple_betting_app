import React from "react";
import BetButton from "./BetButton";

type Props = {
  betDirection: string;
  setBetDirection: (arg0: string) => void;
  isLoading: boolean;
  won: boolean;
  valStored: number;
};

const BetBox = ({
  betDirection,
  setBetDirection,
  isLoading,
  valStored,
  won,
}: Props) => {
  return (
    <div className="mt-5">
      <div className="py-4 border bg bg-gray-800 text-white text-right pr-5">
        {isLoading ? "Loading..." : `Random number returned: ${valStored}`}
      </div>
      <div className=" flex flex-row justify-between py-2 border">
        <BetButton
          direction="down"
          betDirection={betDirection}
          setBetDirection={setBetDirection}
        />
        <BetButton
          direction="up"
          betDirection={betDirection}
          setBetDirection={setBetDirection}
        />
      </div>
      <div className="py-4 border bg-gray-200 text-center text-4xl font-bold">
        {valStored != 0 && (
          <div className={"" + (won ? "text-green-500" : "text-red-500")}>
            {won ? "WINNER" : "BAD LUCK"}{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default BetBox;
