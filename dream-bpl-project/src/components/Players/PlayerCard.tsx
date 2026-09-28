import type { PlayerType } from "../types";

const FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='100%' height='100%' fill='#e5e7eb'/><text x='50%' y='50%' text-anchor='middle' fill='#9ca3af' font-family='sans-serif' font-size='20'>No image</text></svg>`,
  );

interface Props {
  player: PlayerType;
  isSelected: boolean;
  onChoose: (p: PlayerType) => void;
}

export default function PlayerCard({ player, isSelected, onChoose }: Props) {
  return (
    <div className="card border border-gray-200 bg-base-100 p-4 shadow-sm">
      <img
        src={player.playerImg}
        alt={player.playerName}
        referrerPolicy="no-referrer"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = FALLBACK;
        }}
        className="h-56 w-full rounded-xl object-cover"
      />
      <div className="mt-4 space-y-2">
        <h3 className="text-xl font-bold">{player.playerName}</h3>
        <div className="flex justify-between text-gray-500">
          <span>{player.origin}</span>
          <span className="badge badge-ghost">{player.playerType}</span>
        </div>
        <p className="text-sm">Batting: {player.battingStyle}</p>
        <p className="text-sm">Bowling: {player.bowlingStyle}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="font-bold">Price: {player.price}</span>
          <button
            type="button"
            className="btn btn-sm btn-outline"
            disabled={isSelected}
            onClick={() => onChoose(player)}
          >
            {isSelected ? "Chosen" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
}
