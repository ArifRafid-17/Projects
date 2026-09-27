import React from "react";
import type { PlayerType } from "../types";

interface Props {
  player: PlayerType;
}

const PlayerCard = ({ player }: Props) => {
  return (
    <div className="card bg-base-100 w-full border border-gray-200 rounded-2xl p-4 shadow-sm">
      {/* Player Image */}
      <figure className="w-full h-56 rounded-xl overflow-hidden mb-4">
        <img
          src={player.playerImg || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
          alt={player.playerName || "Player Image"}
          className="w-full h-full object-cover object-top"
        />
      </figure>

      {/* Player Name */}
      <div className="flex items-center gap-3 mb-3">
        {/* User Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-gray-700"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
            clipRule="evenodd"
          />
        </svg>
        <h3 className="text-xl font-bold text-gray-900">
          {player.playerName}
        </h3>
      </div>

      {/* Country & Role Badge */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          {/* Flag Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 014.33.25l4.82 1.446a8.25 8.25 0 003.67-.213l2.096-.524a.75.75 0 01.926.728v9.75a.75.75 0 01-.568.728l-2.096.524a9.75 9.75 0 01-4.33-.25l-4.82-1.446a8.25 8.25 0 00-3.67.213L3.75 14.54V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z"
              clipRule="evenodd"
            />
          </svg>
          <span>{player.origin}</span>
        </div>
        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg font-medium">
          {player.playerType || "All-Rounder"}
        </span>
      </div>

      {/* Details & Actions */}
      <div className="pt-3 flex flex-col gap-2.5">
        <span className="font-bold text-sm text-gray-900">Rating</span>

        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-gray-900">
            {player.battingStyle}
          </span>
          <span className="text-gray-500">
            {player.bowlingStyle}
          </span>
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="font-semibold text-gray-900 text-sm">
            Price: ${player.price}
          </span>
          <button className="btn btn-sm btn-outline border-gray-300 text-gray-700 font-normal hover:bg-warning hover:border-warning hover:text-black rounded-lg">
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;