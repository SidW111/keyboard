import { CiBrightnessUp } from "react-icons/ci"; // Make sure this import exists

export default function Button() {
  return (
    <div className="bg-black text-white h-screen flex items-center justify-center w-full gap-2">
      <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
        <div className="flex justify-center items-center rounded-md bg-black h-20 w-20">
          <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
            <CiBrightnessUp size={20} className="" />
            <span>esc</span>
          </div>
        </div>
      </div>
      <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
        <div className="flex justify-center items-center rounded-md bg-black h-20 w-20">
          <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
            <span>A</span>
          </div>
        </div>
      </div>
      <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
        <div className="flex justify-center items-center rounded-md bg-black h-20 w-20">
          <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
            <span>A</span>
          </div>
        </div>
      </div>
      <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all  duration-200">
        <div className="flex justify-start items-end rounded-md bg-black h-20 w-40 pb-2 pl-3">
          <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
            esc
          </div>
        </div>
      </div>
    </div>
  );
}
