import { useState } from "react";
import { Button } from "@/components/ui/button";
import ClarFactura from "../assets/images/clarfactura.png";

export const HeroCards = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/pSwSb4VQj3E";

  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[650px] h-[350px]">
      <div className="relative bg-black w-full max-w-4xl mx-auto rounded-lg overflow-hidden">
        {isPlaying ? (
          <iframe
            className="w-full h-full"
            src={`${videoUrl}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <img src={ClarFactura} alt="Video Thumbnail" className="w-full" />
            <Button
              onClick={() => setIsPlaying(true)}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              aria-label="Play video"
            >
              {/* Play Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
