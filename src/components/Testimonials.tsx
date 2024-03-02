import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    "image": "https://github.com/shadcn.png",
    "name": "Andrei Popescu",
    "userName": "@Trilogy Optic",
    "comment": "ClarFactura este pur și simplu revoluționar! Am economisit ore întregi de muncă manuală."
  },
  {
    "image": "https://github.com/shadcn.png",
    "name": "Mariana Ionescu",
    "userName": "@Expert Contabil",
    "comment": "ClarFactura a transformat modul în care gestionăm facturile. Totul este atât de simplu și eficient acum!"
  },
  {
    "image": "https://github.com/shadcn.png",
    "name": "Ionel Dragomir",
    "userName": "@CarpatiAuto",
    "comment": "Interfața intuitivă și funcționalitățile avansate ale ClarFactura ne-au optimizat procesele contabile. Recomand cu căldură!"
  },
  {
    "image": "https://github.com/shadcn.png",
    "name": "Elena Voinescu",
    "userName": "@Wistrol",
    "comment": "ClarFactura ne-a ușurat incredibil de mult gestionarea documentelor. Este un tool esențial pentru orice afacere."
  },
  {
    "image": "https://github.com/shadcn.png",
    "name": "Cristian Neagu",
    "userName": "@EasyShop",
    "comment": "De când folosim ClarFactura, erorile de facturare au devenit o amintire. Eficiența și claritatea sunt cuvintele cheie!"
  }
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
       De ce
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          utilizatorii adoră{" "}
        </span>
        acest produs
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
      Află cum te ajutăm să economisești timp și să reduci erorile, oferindu-ți totodată o viziune de ansamblu asupra fluxului tău de lucru. Alătură-te comunității noastre și începe să experimentezi o gestionare eficientă a facturilor, fără bătăi de cap.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
