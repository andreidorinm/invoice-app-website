import { Button } from "@/components/ui/button";

export const HeroCards = () => {
  const videoUrl = "https://shadcdn.example.com/clarfactura_intro.mp4";
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[650px] h-[350px]">
      <div className="relative bg-black w-full max-w-4xl mx-auto rounded-lg overflow-hidden">
        <video
          className="w-full"
          controls
          poster="https://static-cse.canva.com/blob/1373815/1600w-wlXEWqHuexQ.jpg"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          aria-label="Play video"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
          </svg>
        </Button>
      </div>
    </div>
  );
};
