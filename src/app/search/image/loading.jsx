import React from "react";

export default function loading() {
  return (
    <div className="pt-10 mx-2 lg:pl-52 mx-w-6xl flex sm:space-x-4 flex-col sm:flex-row pb-42">
      <div className="animate-pulse">
        <div className="h-48 w-48 bg-gray-200 rounded-fmd mb-4"></div>
        <div className="h-2 w-48 bg-gray-200 rounded-fmd mb-2.5"></div>
        <div className="h-2 w-48 bg-gray-200 rounded-fmd mb-2.5"></div>
      </div>
      <div className="hiddensm:inline sm:space-x-4">
        <div className="animate-pulse">
          <div className="h-48 w-48 bg-gray-200 rounded-fmd mb-4"></div>
          <div className="h-2 w-48 bg-gray-200 rounded-fmd mb-2.5"></div>
          <div className="h-2 w-48 bg-gray-200 rounded-fmd mb-2.5"></div>
        </div>
      </div>
      <div className="hiddensm:inline sm:space-x-4">
        <div className="animate-pulse">
          <div className="h-48 w-48 bg-gray-200 rounded-fmd mb-4"></div>
          <div className="h-2 w-48 bg-gray-200 rounded-fmd mb-2.5"></div>
          <div className="h-2 w-48 bg-gray-200 rounded-fmd mb-2.5"></div>
        </div>
      </div>
    </div>
  );
}
