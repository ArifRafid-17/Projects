import React, { use, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { PlayerType } from "../types";
import AvailablePlayer from "./AvailablePlayer";
import SelectedPlayer from "./SelectedPlayer";

interface PlayerProps {
  playerPromise: Promise<PlayerType[]>;
  coin: number;
  setcoin: Dispatch<SetStateAction<number>>;
}

const Players = ({ playerPromise, coin, setcoin }: PlayerProps) => {
  const players = use(playerPromise);

  const [buttonType, setButtonType] = useState("Available");

  const selectButtonType = (type: "Available" | "Selected") => {
    setButtonType(type);
  };

  return (
    <div className="container mx-auto mt-15">
      <div className="flex justify-between items-center mb-8">
        <h3 className="font-bold text-2xl">
          {buttonType === "Available"
            ? "Available Players"
            : "Selected Players"}
        </h3>
        <div>
          <button
            onClick={() => selectButtonType("Available")
              
            }
            className={`btn rounded-r-none ${
              buttonType === "Available" ? "btn-warning" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => selectButtonType("Selected")}
            className={`btn rounded-l-none ${
              buttonType === "Selected" ? "btn-warning" : ""
            }`}
          >
            Selected
          </button>
        </div>
      </div>

      <div>
        {buttonType === "Available" ? (
          <AvailablePlayer players={players} coin = {coin} setcoin = {setcoin} />
        ) : (
          <SelectedPlayer />
        )}
      </div>
    </div>
  );
};

export default Players;
