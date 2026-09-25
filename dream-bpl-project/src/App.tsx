import Banner from "./components/banner";
import Nav from "./components/Nav";
import { Suspense } from "react";
import Players from "./components/Players/Players";

const playerPromise = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>

      <Suspense fallback="Loading...">
        <Players dataPromise={playerPromise()}></Players>
      </Suspense>
    </>
  );
}

export default App;
