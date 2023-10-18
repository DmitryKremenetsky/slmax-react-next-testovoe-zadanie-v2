import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="header flex justify-between p-6 items-center bg">
        <h1 className="text-3xl text-gray-400">My Site</h1>
        <div className="header-search w-1/2">
          <label className="relative block">
            <span className="sr-only">Поиск</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <Image
                className="h-5 w-5"
                src="./search-icon.svg"
                width={20}
                height={20}
                alt="search-image"
              />
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search images ..."
              type="text"
              name="search"
            />
          </label>
        </div>
        <div className="header-item flex">
          <p className="text-lg text-gray-400 mr-4">About us</p>
          <p className="text-lg text-gray-400 mr-4">Images</p>
          <p className="text-lg text-gray-400">Log in</p>
        </div>
      </div>
    </>
  );
}
