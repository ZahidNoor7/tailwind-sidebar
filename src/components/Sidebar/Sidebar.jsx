import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { GoDependabot } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Sidebar() {
  const [ShowSideBar, setShowSideBar] = useState(true);

  return (
    <div className="sidebar">
      {ShowSideBar ? (
        <div className="fixed top-0 bottom-0 shadow-xl bg-background flex flex-col flex-wrap items-center justify-between py-2 px-1.5 z-10 min-h-full min-w-xs w-full max-w-sm">
          <div className="w-full py-md px-sm">
            <div className="logo">
              <ul className="min-w-full flex flex-col list-none gap-md">
                <a href="/">
                  <li className="flex items-center justify-center gap-xs border-0.5 border-borderColor bg-white rounded-md py-sm px-xs hover:cursor-pointer">
                    <GoDependabot color="#cc135d" />
                    <p className="text-h3 text-darkBlue font-bold">
                      Compliance<span className="text-background">Bot</span>
                    </p>
                  </li>
                </a>
              </ul>
            </div>

            <div className="nav mt-xl">
              <ul className="min-w-full flex flex-col list-none gap-md">
                <li
                  onClick={() => setShowSideBar(!ShowSideBar)}
                  className="flex items-center justify-between bg-list border-0.5 border-borderColor rounded-md py-sm px-xs hover:bg-hover cursor-pointer"
                >
                  <p className="text-h6 text-textColor font-bold">Policy</p>
                  <BsArrowRight color="white" />
                </li>
                <li
                  onClick={() => setShowSideBar(!ShowSideBar)}
                  className="flex items-center justify-between bg-list border-0.5 border-borderColor rounded-md py-sm px-xs hover:bg-hover cursor-pointer"
                >
                  <p className="text-h6 text-textColor font-bold">
                    Risk Assesment
                  </p>
                  <BsArrowRight color="white" />
                </li>
                <li
                  onClick={() => setShowSideBar(!ShowSideBar)}
                  className="flex items-center justify-between bg-list border-0.5 border-borderColor rounded-md py-sm px-xs hover:bg-hover cursor-pointer"
                >
                  <p className="text-h6 text-textColor font-bold basis-3/4 line-clamp-1">
                    COSHH Assesment
                  </p>
                  <BsArrowRight color="white" />
                </li>
                <li
                  onClick={() => setShowSideBar(!ShowSideBar)}
                  className="flex items-center justify-between bg-list border-0.5 border-borderColor rounded-md py-sm px-xs hover:bg-hover cursor-pointer"
                >
                  <p className="text-h6 text-textColor font-bold">
                    Instruction Bot
                  </p>
                  <BsArrowRight color="white" />
                </li>
                <li
                  onClick={() => setShowSideBar(!ShowSideBar)}
                  className="flex items-center justify-between bg-list border-0.5 border-borderColor rounded-md py-sm px-xs hover:bg-hover cursor-pointer"
                >
                  <p className="text-h6 text-textColor font-bold">
                    Toolbox Talk
                  </p>
                  <BsArrowRight color="white" />
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full flex flex-col gap-sm py-md px-sm">
            <button className="w-full primaryBtn bg-primaryBtn text-btnTextColor font-bold border-0.5 border-borderColor rounded-md py-sm px-xs hover:text-white hover:bg-hover">
              Profile
            </button>
            <button className="w-full primaryBtn bg-primaryBtn text-btnTextColor font-bold border-0.5 border-borderColor rounded-md py-sm px-xs hover:text-white hover:bg-hover">
              Logout
            </button>
          </div>
        </div>
      ) : null}

      <div className="p-md relative flex justify-end">
        <button
          onClick={() => setShowSideBar(!ShowSideBar)}
          className="flex items-center justify-center gap-sm"
        >
          <RxHamburgerMenu /> {ShowSideBar ? "Close" : "Open"} SideBar!
        </button>
      </div>
    </div>
  );
}
