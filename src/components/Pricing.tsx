import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Abonament Anual",
    popular: PopularPlanType.NO,
    price: 200,
    description:
      "Aveți la dispoziție o perioadă de probă de o lună pentru a testa programul și a vedea cum funcționează.",
    buttonText: "Începe acum",
    benefitList: [
      "Acces complet la toate funcționalitățile",
      "Actualizări periodice",
      "Suport tehnic prioritar",
      "Tutoriale și documentație",
      "Garanție de satisfacție",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="preturi" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Aceasta
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          este oferta noastră{" "}
        </span>
        de preț
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Oferta este una clară, fără subscripții dificil de gestionat și scumpe
      </h3>
      <div className="flex justify-center">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {pricing.title}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">RON {pricing.price}</span>
                <span className="text-muted-foreground"> /an</span>
              </div>
              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button
                className="w-full"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {pricing.buttonText}
              </Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex">
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

