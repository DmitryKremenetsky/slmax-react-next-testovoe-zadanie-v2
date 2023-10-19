"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import mainBgSmall from "../../../public/bg-nature-small.jpg";

export default function Main() {
  const myKey = "-onPHIKkw_AifSgiAIUflPJ7_f4Zb7NWnmymR8kWnwA";
  const [photos, setPhotos] = useState<Photo[]>([]);

  interface Photo {
    id: string;
    urls: {
      regular: string;
    };
    description: string | null;
  }

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.unsplash.com/photos/?client_id=${myKey}`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error("Произошла ошибка при запросе к API:", error);
      }
    };

    fetchApi();
  }, []);

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
        <div className="flex flex-wrap justify-center m-40">
          {photos.map((photo) => (
            <div key={photo.id} className="image-item">
              <Image
                src={photo.urls.regular}
                alt={photo.description || "No description"}
                className=" w-auto h-96 object-cover m-4"
                unoptimized={true}
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
