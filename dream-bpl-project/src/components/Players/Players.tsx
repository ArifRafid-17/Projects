import { use, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import type { PlayerType } from "../types";
import PlayerCard from "./PlayerCard";

const MAX_PLAYERS = 6;

interface Props {
  playerPromise: Promise<PlayerType[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

export default function Players({ playerPromise, coin, setCoin }: Props) {
  const players = use(playerPromise);
  const [view, setView] = useState<"available" | "selected">("available");
  const [selected, setSelected] = useState<PlayerType[]>([]);

  const isSelected = (p: PlayerType) =>
    selected.some((s) => s.playerName === p.playerName);

  const choose = (p: PlayerType) => {
    if (isSelected(p)) return toast.error("Player already selected");
    if (selected.length >= MAX_PLAYERS)
      return toast.error(`You can select at most ${MAX_PLAYERS} players`);
    if (coin < p.price) return toast.error("Not enough coins");

    setCoin((c) => c - p.price);
    setSelected((s) => [...s, p]);
    toast.success(`${p.playerName} added to your team`);
  };

  const remove = (p: PlayerType) => {
    setSelected((s) => s.filter((x) => x.playerName !== p.playerName));
    setCoin((c) => c + p.price); // refund
    toast.info(`${p.playerName} removed`);
  };

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl font-bold">
          {view === "available"
            ? "Available Players"
            : `Selected Players (${selected.length}/${MAX_PLAYERS})`}
        </h2>
        <div className="join">
          <button
            type="button"
            className={`btn join-item ${view === "available" ? "btn-warning" : ""}`}
            onClick={() => setView("available")}
          >
            Available
          </button>
          <button
            type="button"
            className={`btn join-item ${view === "selected" ? "btn-warning" : ""}`}
            onClick={() => setView("selected")}
          >
            Selected ({selected.length})
          </button>
        </div>
      </div>

      {view === "available" ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {players.map((p) => (
            <PlayerCard
              key={p.playerName}
              player={p}
              isSelected={isSelected(p)}
              onChoose={choose}
            />
          ))}
        </div>
      ) : selected.length === 0 ? (
        <p className="py-10 text-center text-gray-500">No players selected yet.</p>
      ) : (
        <ul className="space-y-3">
          {selected.map((p) => (
            <li
              key={p.playerName}
              className="flex items-center justify-between rounded-xl border border-gray-200 p-4"
            >
              <div>
                <p className="font-bold">{p.playerName}</p>
                <p className="text-sm text-gray-500">
                  {p.playerType} · {p.price} coin
                </p>
              </div>
              <button
                type="button"
                className="btn btn-sm btn-error btn-outline"
                onClick={() => remove(p)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
