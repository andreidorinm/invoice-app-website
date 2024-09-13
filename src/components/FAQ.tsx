import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "ClarFactura este gratuită pentru utilizare?",
    answer: "ClarFactura oferă o versiune de bază gratuită, cu opțiuni suplimentare disponibile prin abonamente plătite, pentru a se potrivi nevoilor diverse ale afacerilor.",
    value: "item-1",
  },
  {
    question: "Cum pot importa facturile în format XML în ClarFactura?",
    answer: "Pur și simplu încărcați fișierul XML în ClarFactura, și aplicația va extrage automat toate informațiile necesare, convertindu-le într-un format Excel gata de import în sistemul dumneavoastră.",
    value: "item-2",
  },
  {
    question: "ClarFactura oferă suport pentru mai multe formate de facturi?",
    answer: "Da, ClarFactura suportă o gamă largă de formate de facturi, facilitând conversia rapidă și eficientă din XML în Excel pentru diverse tipuri de documente.",
    value: "item-3",
  },
  {
    question: "Există o limită pentru numărul de facturi pe care le pot procesa?",
    answer: "Versiunea gratuită are o limită modestă, dar cu abonamentele noastre plătite, puteți procesa un număr nelimitat de facturi, asigurându-vă că afacerea dumneavoastră nu întâmpină întreruperi.",
    value: "item-4",
  },
  {
    question: "Cum asigură ClarFactura securitatea datelor mele?",
    answer: "ClarFactura utilizează criptare de ultimă generație și protocoale de securitate pentru a asigura că toate datele dumneavoastră sunt protejate în mod constant, oferindu-vă liniște sufletească.",
    value: "item-5",
  }
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
