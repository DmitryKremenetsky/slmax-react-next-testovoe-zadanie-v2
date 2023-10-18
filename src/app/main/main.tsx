import Image from "next/image";
import mainBgSmall from "../../../public/bg-nature-small.jpg";

export default function Main() {
  return (
    <>
      <div className="main">
        <div className="main-bg-small relative">
          <Image
            className="w-full h-[36rem] object-cover"
            src={mainBgSmall}
            alt="small-bg"
            quality={100}
          />
          <div className="absolute top-48 left-20">
            <h1 className=" text-slate-100 text-5xl mb-4">My Site</h1>
            <p className="text-2xl text-slate-100">
              Internet resource for searching images
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
