import { Mail } from "lucide-react"; // Import the email icon
import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <section id="contact">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32 text-center">
        <h3 className="text-4xl md:text-5xl font-bold">Contactează-ne</h3>
        <p className="text-xl text-muted-foreground mt-4 mb-8">
          Suntem aici pentru a vă ajuta. Nu ezitați să ne contactați!
        </p>

        <div className="flex flex-col items-center">
          <Button
            variant="link"
            className="text-xl flex items-center"
            onClick={() => window.open("mailto:andrei.dorin00@gmail.com")}
          >
            <Mail className="mr-2" />
            andrei.dorin00@gmail.com
          </Button>

        </div>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
