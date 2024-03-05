"client side";

import CountryLookup from "./CountryLookup";

export default function Footer() {
  return (
    <footer className=" absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full ">
      <div className="border-b px-8 py-3">
        <CountryLookup />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
        <ul className="flex item-center space-x-6">
          <li className="hoover:underline cursor-pointer">About</li>
          <li className="hoover:underline cursor-pointer">Advertising</li>
          <li className="hoover:underline cursor-pointer">Buisness</li>
          <li className="hoover:underline cursor-pointer">How Search works</li>
        </ul>
        <ul className="flex item-center space-x-6">
          <li className="hoover:underline cursor-pointer">Pivacy</li>
          <li className="hoover:underline cursor-pointer">Terms</li>
          <li className="hoover:underline cursor-pointer">Settings</li>
        </ul>
      </div>
      <p className="text-gray-500 bg[#f2f2f2]">© 2021 Google</p>
    </footer>
  );
}
