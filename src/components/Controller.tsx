import React, { useState, useEffect } from "react";
import Button from "./Button";
import BetBox from "./BetBox";
import axios from "axios";

const Controller: React.FC = () => {
  const [betDirection, setBetDirection] = useState("up"); // Changed type to string
  const [won, setWon] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [valStored, setValStored] = useState(0);  

  const handlePlaceBet = async () => {
    setIsLoading(true);

    let isWinner = false;
    const url =
      "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new";
    await axios
      .get(url)
      .then((res) => {
        if (res.status == 200) {
          const val = res.data;
          setValStored(val); 
          console.log(val);
          if (val >= 50 && betDirection == "up") {
            isWinner = true;
          } else if (val < 50 && betDirection == "down") {
            isWinner = true;
          }
        } else {
          console.error("There was some kind of error getting the data");
        }
      })
      .catch((err) => {
        console.log(err.data, err.message);
      });

    setWon(isWinner);
    setIsLoading(false);
  };

  useEffect(() => {
    console.log(won);
  }, [won]);

  return (
    <div className=" w-full md:w-[850px] lg:w-[1200px] mx-auto py-6 px-5">
      {/* Pass the handlePlaceBet function to the Button component */}
      <Button onClick={handlePlaceBet} />
      <BetBox
        betDirection={betDirection}
        setBetDirection={setBetDirection}
        isLoading={isLoading}
        won={won}
        valStored={valStored} 
         
      />
    </div>
  );
};

export default Controller;
