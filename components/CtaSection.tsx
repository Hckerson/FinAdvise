import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CtaSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export function CtaSection({ title, description, buttonText, buttonLink }: CtaSectionProps) {
  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">{title}</h2>
          <p className="text-xl opacity-90 max-w-2xl">{description}</p>
          <Button size="lg" variant="secondary" asChild>
            <Link href={buttonLink} className="mt-2">
              {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}