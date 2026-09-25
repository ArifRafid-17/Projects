import bg from "../assets/bg-shadow.png";
import cric from "../assets/banner-main.png";

export default function Banner() {
  return (
    <div>
      <img src={bg} alt="Background" className=" bg-black ml-29 rounded-4xl" />
      <div className="absolute top-0 left-0  flex items-center justify-center mt-50">
        <img src={cric} alt="Cricket" className="ml-162" />
      </div>

      <div className="absolute top-0 left-0 flex flex-col items-center justify-center ml-75 mt-100">
        <h2 className="text-white text-[40px] font-bold font-[Open_Sans] text-wrap text-center mt-5">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>
        <p className="text-white text-center text-[24px] font-[Open_Sans] mt-5">
          Beyond Boundaries Beyond Limits
        </p>
      </div>

      {/* <button className="absolute top-0 left-0 bg-[#E7FE29] text-black py-2 px-4 rounded-lg ml-175 mt-140 font-[Open_Sans] text-[16px] font-bold">
        Claim Free Credit
      </button> */}

      <button className="btn btn-outline btn-warning absolute top-0 left-0 ml-175 mt-140 font-[Open_Sans] text-[16px] font-bold">Claim Free Credit</button>
    </div>
  );
}
