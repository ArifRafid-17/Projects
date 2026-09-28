import { Suspense, useState } from "react";
import { toast } from "react-toastify";
import Banner from "./components/Banner";
import ErrorBoundary from "./components/ErrorBoundary";
import Nav from "./components/Nav";
import Players from "./components/Players/Players";
import type { PlayerType } from "./components/types";

const fetchPlayers = async (): Promise<PlayerType[]> => {
  const res = await fetch("/data.json");
  if (!res.ok) throw new Error(`Failed to load players (${res.status})`);
  return res.json();
};

// Created once when the file loads
const playersPromise = fetchPlayers();

const FREE_CREDIT = 2000;

function App() {
  const [coin, setCoin] = useState(2000);
  const [claimed, setClaimed] = useState(false);

  const claimCredit = () => {
    if (claimed) return;
    setCoin((c) => c + FREE_CREDIT);
    setClaimed(true);
    toast.success(`${FREE_CREDIT} free coins added!`);
  };

  return (
    <div>
      <Nav coin={coin} />
      <Banner onClaim={claimCredit} claimed={claimed} />
      <ErrorBoundary>
        <Suspense
          fallback={
            <div className="flex justify-center py-20">
              <span className="loading loading-spinner loading-xl" />
            </div>
          }
        >
          <Players playerPromise={playersPromise} coin={coin} setCoin={setCoin} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
