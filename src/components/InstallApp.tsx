import React from "react";
import {BiMobile} from "react-icons/bi"

const InstallApp = () => {
  return (
    <div className="bg-green-900 text-white p-2 fixed top-20 left-0 right-0 z-50 px-48">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex gap-1 items-center justify-center">
          {/* <p className="font-semibold">Install Our App</p> */}
          <BiMobile color="#fff" size={24}/>
          <p className="text-sm">Download our app and get exiting rewards</p>
        </div>
        <button
        //   onClick={handleDismiss}
          className="bg-white font-semibold ml-4 py-1 px-3 rounded-full text-green-900"
        >
          Install
        </button>
      </div>
    </div>
  );
};

export default InstallApp;
