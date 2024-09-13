import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              ClarFactura
            </span>{" "}
            evident
          </h1>{" "}
          ca totul e{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              clar
            </span>{" "}
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Transformă gestionarea facturilor dintr-o bătaie de cap într-un proces simplu și clar.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a href="https://clarfactura.b-cdn.net/ClarFactura%20in%20NIR-Windows.exe" download>
            <Button className="w-full md:w-1/3">Descarcă</Button>
          </a>
        </div>
      </div>

      <div className="z-10">
        <HeroCards />
      </div>

      <div className="shadow"></div>
    </section>
  );
};
