import { CiBrightnessDown, CiBrightnessUp } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { TbMicrophone } from "react-icons/tb";
import { IoMoonOutline } from "react-icons/io5";
import { IoPlayBackOutline } from "react-icons/io5";
import { IoPlayForwardOutline } from "react-icons/io5";
import { IoPlaySkipForwardOutline } from "react-icons/io5";
import { GoMute } from "react-icons/go";
import { IoVolumeLowOutline } from "react-icons/io5";
import { IoVolumeHighOutline } from "react-icons/io5";
import { MdKeyboardOptionKey } from "react-icons/md";
import { MdOutlineWindow } from "react-icons/md";
import { TbBrightnessUp } from "react-icons/tb";
import { TbBrightnessUpFilled } from "react-icons/tb";


import { CiGlobe } from "react-icons/ci";
import { MdOutlineKeyboardControlKey } from "react-icons/md";
import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import {
  FaCaretUp,
  FaCaretDown,
  FaCaretRight,
  FaCaretLeft,
} from "react-icons/fa";

export default function Home() {
  return (
    //container f-screen
    <div className="h-screen  mx-auto bg-black ">
      {/* center container */}
      <div className="flex items-center justify-center h-screen">
        {/* main div */}
        <div className="text-white w-fit h-fit gap-1 bg-white/20 max-w-full shadow-sm shadow-white/80 rounded-md p-2">
          {/* 6 divs of keyboard */}

          {/* 1st line */}
          <div className="flex mb-2 gap-1 justify-center items-center">
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all  duration-200">
              <div className="flex justify-start items-end rounded-md bg-black h-16 w-30 pb-2 pl-3">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  esc
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1.5 justify-center text-[10px] font-medium text-center">
                  <TbBrightnessUp size={17} className="" />
                  <span>F1</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1.5 justify-center text-[10px] font-medium text-center">
                  <TbBrightnessUpFilled size={17} className="" />
                  <span>F2</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1.5 justify-center text-[10px] font-medium text-center">
                  <MdOutlineWindow size={17} className="" />
                  <span>F3</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1.5 justify-center text-[10px] font-medium text-center">
                  <IoSearch size={17} className="" />
                  <span>F4</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1.5 justify-center text-[10px] font-medium text-center">
                  <TbMicrophone size={17} className="" />
                  <span>F5</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1.5 justify-center text-[10px] font-medium text-center">
                  <IoMoonOutline size={17} className="" />
                  <span>F6</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1.5 justify-center text-[10px] font-medium text-center">
                  <IoPlayBackOutline size={17} className="" />
                  <span>F7</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1.5 justify-center text-[10px] font-medium text-center">
                  <IoPlaySkipForwardOutline size={17} className="" />
                  <span>F8</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1.5 justify-center text-[10px] font-medium text-center">
                  <IoPlayForwardOutline size={17} className="" />
                  <span>F9</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1.5 justify-center text-[10px] font-medium text-center">
                  <GoMute size={17} className="" />
                  <span>F10</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1.5 justify-center text-[10px] font-medium text-center">
                  <IoVolumeLowOutline size={17} className="" />
                  <span>F11</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1.5 justify-center text-[10px] font-medium text-center">
                  <IoVolumeHighOutline size={17} className="" />
                  <span>F12</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1.5 justify-center text-[10px] font-medium text-center">
                  <div className="w-10 h-10 rounded-full shadow-sm bg-black shadow-white/20"></div>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd line */}
          <div className="flex mb-2 gap-1 justify-center items-center">
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap- justify-center text-[10px] font-medium text-center">
                  <span className="text-lg">
                    <h1>~</h1>
                  </span>
                  <span className="text-lg">
                    <h1>`</h1>
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center justify-center text-[14px] font-medium text-center">
                  <span className="text-md">
                    <h1>!</h1>
                  </span>
                  <span className="text-md">
                    <h1>1</h1>
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center justify-center text-[14px] font-medium text-center">
                  <span className="text-md">
                    <h1>@</h1>
                  </span>
                  <span className="text-md">
                    <h1>2</h1>
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center justify-center text-[14px] font-medium text-center">
                  <span className="text-md">
                    <h1>#</h1>
                  </span>
                  <span className="text-md">
                    <h1>3</h1>
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center justify-center text-[14px] font-medium text-center">
                  <span className="text-md">
                    <h1>$</h1>
                  </span>
                  <span className="text-md">
                    <h1>4</h1>
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center justify-center text-[14px] font-medium text-center">
                  <span className="text-md">
                    <h1>%</h1>
                  </span>
                  <span className="text-md">
                    <h1>5</h1>
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center justify-center text-[14px] font-medium text-center">
                  <span className="text-md">
                    <h1>^</h1>
                  </span>
                  <span className="text-md">
                    <h1>6</h1>
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center justify-center text-[14px] font-medium text-center">
                  <span className="text-md">
                    <h1>&</h1>
                  </span>
                  <span className="text-md">
                    <h1>7</h1>
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center -gap-1 justify-center text-[14px] font-medium text-center">
                  <span className="text-md">
                    <h1>*</h1>
                  </span>
                  <span className="text-md">
                    <h1>8</h1>
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center justify-center text-[14px] font-medium text-center">
                  <span className="text-md">
                    <h1>(</h1>
                  </span>
                  <span className="text-md">
                    <h1>9</h1>
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center justify-center text-[14px] font-medium text-center">
                  <span className="text-md">
                    <h1>)</h1>
                  </span>
                  <span className="text-md">
                    <h1>0</h1>
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center justify-center text-[14px] font-medium text-center">
                  <span className="text-md">
                    <h1>__</h1>
                  </span>
                  <span className="text-md">
                    <h1>-</h1>
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center justify-center text-[14px] font-medium text-center">
                  <span className="text-md">
                    <h1>+</h1>
                  </span>
                  <span className="text-md">
                    <h1>=</h1>
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all  duration-200">
              <div className="flex justify-end items-end rounded-md bg-black h-16 w-30 pb-2 pr-3">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  delete
                </div>
              </div>
            </div>
          </div>
          {/* 3rd line */}
          <div className="flex mb-2 gap-1 justify-center items-center">
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all  duration-200">
              <div className="flex justify-start items-end rounded-md bg-black h-16 w-30 pb-2 pl-3">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  tab
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  <span>Q</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  <span>W</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  <span>E</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  <span>R</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  <span>T</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  <span>Y</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  <span>U</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  <span>I</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  <span>O</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  <span>P</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center justify-center text-[14px] font-medium text-center">
                  <span className="text-sm">
                    <h1>&#123;</h1>
                  </span>
                  <span className="text-sm">
                    <h1>[</h1>
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center justify-center text-[14px] font-medium text-center">
                  <span className="text-sm">
                    <h1>&#125;</h1>
                  </span>
                  <span className="text-sm">
                    <h1>]</h1>
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap- justify-center text-[10px] font-medium text-center">
                  <span className="text-sm">
                    <h1>|</h1>
                  </span>
                  <span className="text-sm">
                    <h1>\</h1>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* 4th line */}
          <div className="flex mb-2 gap-1 justify-center items-center">
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all  duration-200">
              <div className="flex justify-start items-end rounded-md bg-black h-16 w-32 pb-2 pl-3">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  caps lock
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  <span>A</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  <span>S</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  <span>D</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  <span>F</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  <span>G</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  <span>H</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  <span>J</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  <span>K</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  <span>L</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center justify-center text-[14px] font-medium text-center">
                  <span className="text-sm">
                    <h1>:</h1>
                  </span>
                  <span className="text-sm">
                    <h1>;</h1>
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center justify-center text-[14px] font-medium text-center">
                  <span className="text-sm">
                    <h1>"</h1>
                  </span>
                  <span className="text-sm">
                    <h1>'</h1>
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all  duration-200">
              <div className="flex justify-end items-end rounded-md bg-black h-16 w-32 pb-2 pr-3">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  return
                </div>
              </div>
            </div>
          </div>
          {/* 5th line */}
          <div className="flex mb-2 gap-1 justify-center items-center">
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all  duration-200">
              <div className="flex justify-start items-end rounded-md bg-black h-16 w-40.5 pb-2 pl-3">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  shift
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  <span>Z</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  <span>X</span>
                </div>
              </div>
            </div>
            <div className=" rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200 ">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  <span>C</span>
                </div>
              </div>
            </div>
            <div className=" rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  <span>V</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  <span>B</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  <span>N</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-95 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  <span>M</span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center justify-center text-[14px] font-medium text-center">
                  <span className="text-sm">
                    <h1>&lt;</h1>
                  </span>
                  <span className="text-sm">
                    <h1>,</h1>
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center justify-center text-[14px] font-medium text-center">
                  <span className="text-sm">
                    <h1>&gt;</h1>
                  </span>
                  <span className="text-sm">
                    <h1>.</h1>
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex justify-center items-center rounded-md bg-black h-16 w-16">
                <div className="flex flex-col items-center justify-center text-[14px] font-medium text-center">
                  <span className="text-sm">
                    <h1>?</h1>
                  </span>
                  <span className="text-sm">
                    <h1>/</h1>
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all  duration-200">
              <div className="flex justify-end items-end rounded-md bg-black h-16 w-40.5 pb-2 pr-3">
                <div className="flex flex-col items-center gap-1 justify-center text-[14px] font-medium text-center">
                  shift
                </div>
              </div>
            </div>
          </div>
          {/* 6th line */}
          <div className="flex  gap-1 justify-center items-center">
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex rounded-md bg-black h-16 w-16">
                <div className="flex flex-col w-full text-[14px] font-medium gap-2 pt-1.5 pr-1.5">
                  <div className="flex justify-end items-end">
                    <span className="text-sm ">
                      <h1>fn</h1>
                    </span>
                  </div>
                  <div className="flex justify-start items-end pl-1">
                    <span className="text-sm">
                      <CiGlobe size={21} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex rounded-md bg-black h-16 w-16">
                <div className="flex flex-col w-full text-[14px] font-medium gap-2 pt-1.5 pr-1">
                  <div className="flex justify-end items-end">
                    <span className="text-sm ">
                      <MdOutlineKeyboardControlKey size={20} />
                    </span>
                  </div>
                  <div className="flex justify-start items-end pl-1.5">
                    <span className="text-sm">
                      <h1>control</h1>
                    </span>
                  </div>
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
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200 ">
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
            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
              <div className="flex rounded-md bg-black h-16 w-90">
                <div className="flex flex-col w-full text-[14px] font-medium gap-2 pt-1.5 pr-1"></div>
              </div>
            </div>

            <div className="rounded-md bg-white/3 outline shadow-md p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none shadow-white/50 transition-all duration-200">
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
            <div>
              <div className="flex flex-col items-center justify-center gap-1.5">
                <div className="rounded-md outline bg-white/3 shadow-md shadow-white/50 p-[0.5px] hover:cursor-pointer hover:scale-96 hover:shadow-none transition-all duration-200">
                  <div className="w-16 h-7 rounded-md bg-black flex items-center justify-center">
                    <FaCaretUp size={21} />
                  </div>
                </div>
                <div className="flex gap-1.5 items-center justify-center">
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
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </div>
  );
}
