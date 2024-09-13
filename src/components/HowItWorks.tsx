import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Accesibil",
    description:
      "Alege tipul de program de facturare",
  },
  {
    icon: <MapIcon />,
    title: "Precis",
    description:
      "Încarcă factură de la ANAF primită format XML sau factură în format PDF",
  },
  {
    icon: <PlaneIcon />,
    title: "Rapid",
    description:
      "Procesăm factură rapid și obții fișierul excel dorit",
  },
  {
    icon: <GiftIcon />,
    title: "Simplu",
    description:
      "Acum te poți folosi de fișierul excel în programul de facturare",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Cum{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          funcționează?{" "}
        </span>
        Ghidul pas cu pas
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Este simplu și clar
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
