import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[200px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Despre{" "}
                </span>
                ClarFactura
              </h2>
              <p className="text-xl mt-4">
                Misiunea noastra este de a simplifica procesul de gestionare a facturilor pentru întreprinderile mici și mijlocii. Înțelegem cât de vitală este eficiența în acest domeniu, motiv pentru care am dezvoltat o soluție care transformă conversia și importul facturilor dintr-o bătaie de cap într-un proces simplu și rapid.
              </p>
            </div>
            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
