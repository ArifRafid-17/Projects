import Banner from "./components/banner";
import Nav from "./components/Nav";
import { Suspense } from "react";
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
  return (
    <>
      <div>
        <Nav />
        <Banner />
        <Suspense fallback={<div>Loading players...</div>}>
          <Players playerPromise={playersPromise} />
        </Suspense>
      </div>
    </>
  );
}

export default App;
