import bg from "../assets/bg-shadow.png";
import cric from "../assets/banner-main.png";

interface Props {
  onClaim: () => void;
  claimed: boolean;
}

export default function Banner({ onClaim, claimed }: Props) {
  return (
    <section className="container mx-auto px-4">
      <div
        className="flex flex-col items-center gap-4 rounded-3xl bg-black bg-cover bg-center px-6 py-14 text-center text-white"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <img src={cric} alt="Cricket" className="max-w-xs" />
        <h2 className="text-3xl font-bold md:text-[40px]">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>
        <p className="text-xl md:text-2xl">Beyond Boundaries Beyond Limits</p>
        <button
          type="button"
          onClick={onClaim}
          disabled={claimed}
          className="btn btn-outline btn-warning font-bold"
        >
          {claimed ? "Credit Claimed" : "Claim Free Credit"}
        </button>
      </div>
    </section>
  );
}
