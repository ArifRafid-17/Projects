import React, { use } from "react";
import type { PlayerType } from "../types";
import AvailablePlayer from "./AvailablePlayer";

interface PlayerProps {
  playerPromise: Promise<PlayerType[]>;
}

const Players = ({ playerPromise }: PlayerProps) => {
  const players = use(playerPromise);

  return (
    <div className="container mx-auto mt-15">
      <div className="flex justify-between items-center mb-8">
        <h3 className="font-bold text-2xl">Available Players</h3>
        <div>
          <button className="btn btn-warning mr-2">Available</button>
          <button className="btn">Selected</button>
        </div>
      </div>

      <div>
        <AvailablePlayer players={players}></AvailablePlayer>
      </div>
    </div>
  );
};

export default Players;