import { Mail, Linkedin, Github } from "lucide-react"; // Import the icons
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

        {/* Flexbox to align the buttons in a row */}
        <div className="flex justify-center space-x-6">
          <Button
            variant="link"
            className="text-xl flex items-center"
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=andrei.dorin00@gmail.com"
              )
            }
          >
            <Mail className="mr-2" />
            andrei.dorin00@gmail.com
          </Button>

          <Button
            variant="link"
            className="text-xl flex items-center"
            onClick={() =>
              window.open("https://www.linkedin.com/in/andrei-mihaila-b75798211/")
            }
          >
            <Linkedin className="mr-2" />
            LinkedIn
          </Button>

          <Button
            variant="link"
            className="text-xl flex items-center"
            onClick={() => window.open("https://github.com/andreidorinm/invoice-app")}
          >
            <Github className="mr-2" />
            GitHub
          </Button>
        </div>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
