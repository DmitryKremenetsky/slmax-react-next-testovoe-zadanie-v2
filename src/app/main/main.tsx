import React, { useState, useEffect } from "react";
import Image from "next/image";
import mainBgSmall from "../../../public/bg-nature-small.jpg";

export default function Main() {
  const myKey = "-onPHIKkw_AifSgiAIUflPJ7_f4Zb7NWnmymR8kWnwA";
  const siteUrl = `https://api.unsplash.com/photos/?client_id=${myKey}`;

  const [photos, setPhotos] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(siteUrl);
        if (!response.ok) {
          throw new Error("Ошибка запроса к API");
        }
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [siteUrl]);

  return (
    <div>
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
        <div className="flex flex-wrap justify-center mt-20 mb-20">
          {photos.map((photo) => (
            <div key={photo.id}>
              <Image
                className="w-96 h-96 m-4"
                src={photo.urls.small}
                alt={photo.alt_description}
                width={400}
                height={400}
                unoptimized={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
