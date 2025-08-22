import { CiBrightnessUp } from "react-icons/ci"; // Make sure this import exists
import {
  MdKeyboardOptionKey,
  MdOutlineKeyboardCommandKey,
} from "react-icons/md";
import {
  FaCaretUp,
  FaCaretDown,
  FaCaretRight,
  FaCaretLeft,
} from "react-icons/fa";
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
      <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
        <div className="flex rounded-md bg-black h-16 w-16">
          <div className="flex flex-col w-full text-[14px] font-medium gap-2 pt-1.5 pr-1">
            <div className="flex justify-end items-end">
              <span className="text-sm ">
                <MdKeyboardOptionKey size={20} />
              </span>
            </div>
            <div className="flex justify-start items-end pl-1">
              <span className="text-sm">
                <h1>option</h1>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="rounded-md outline bg-white/3 shadow-md shadow-white/50 p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none transition-all duration-200">
          <div className="w-16 h-7 rounded-md bg-black flex items-center justify-center">
            <FaCaretUp size={21} />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="rounded-md outline bg-white/3 shadow-md shadow-white/50 p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none transition-all duration-200">
            <div className="w-16 h-7 rounded-md bg-black flex items-center justify-center">
              <FaCaretLeft size={21} />
            </div>
          </div>
          <div className="rounded-md outline bg-white/3 shadow-md shadow-white/50 p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none transition-all duration-200">
            <div className="w-16 h-7 rounded-md bg-black flex items-center justify-center">
              <FaCaretDown size={21} />
            </div>
          </div>
          <div className="rounded-md outline bg-white/3 shadow-md shadow-white/50 p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none transition-all duration-200">
            <div className="w-16 h-7 rounded-md bg-black flex items-center justify-center">
              <FaCaretRight size={21} />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200 cmd">
        <div className="flex rounded-md bg-black h-16 w-20">
          <div className="flex flex-col w-full text-[14px] font-medium gap-2 pt-1.5 pr-1">
            <div className="flex justify-end items-end">
              <span className="text-sm ">
                <MdOutlineKeyboardCommandKey size={20} />
              </span>
            </div>
            <div className="flex justify-start items-end pl-1">
              <span className="text-sm">
                <h1>command</h1>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
