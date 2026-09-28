import { CiDollar } from "react-icons/ci";
import Logo from "../assets/logo.png";

interface Props {
  coin: number;
}

const links = ["Home", "Fixture", "Team", "Schedule"];

export default function Nav({ coin }: Props) {
  return (
    <nav className="container mx-auto flex items-center justify-between gap-4 px-4 py-6">
      <img src={Logo} alt="Logo" className="h-14 w-14 object-contain" />

      <ul className="hidden items-center gap-10 text-lg text-gray-500 md:flex">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="hover:text-black">
              {l}
            </a>
          </li>
        ))}
      </ul>

      <div className="btn btn-lg border-2 border-gray-300 font-bold">
        <CiDollar className="text-2xl" />
        {coin} coin
      </div>
    </nav>
  );
}
