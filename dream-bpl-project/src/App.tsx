import Banner from "./components/banner";
import Nav from "./components/Nav";
import { Suspense, useState } from "react";
import Players from "./components/Players/Players";
import type { PlayerType } from "./components/types";

// Created once when the file loads
const fetchPlayers = async (): Promise<PlayerType[]> => {
  const res = await fetch("/data.json");
  const data = res.json();
  return data;
};

const playersPromise = fetchPlayers(); // playerspromise = data

function App() {
  const [coin, setcoin] = useState(2000);
  return (
    <>
      <div>
        <Nav coin = {coin}/>
        <Banner />
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl items-center size-max"></span>
          }
        >
          <Players playerPromise={playersPromise} coin = {coin} setcoin = {setcoin}/>
        </Suspense>
      </div>
    </>
  );
}

export default App;
