import { ArrowRight, BarChart3, Calculator, DollarSign, Landmark, PieChart, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TestimonialCard from "@/components/TestimonialCard";
import { CtaSection } from "@/components/CtaSection";
import FeatureCard from "@/components/FeatureCard";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-background to-muted overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-10 text-center">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Smart Financial Solutions for Your Future
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px] mx-auto">
                Expert accounting services tailored to help you achieve financial success and peace of mind.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
            <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/7821517/pexels-photo-7821517.jpeg"
                alt="Professional financial advisors in meeting"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Comprehensive Financial Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide expert guidance on all your financial needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard 
              icon={<DollarSign className="w-10 h-10 text-primary" />}
              title="Tax Planning"
              description="Strategic tax planning to minimize liabilities and maximize returns for individuals and businesses."
            />
            <FeatureCard 
              icon={<Calculator className="w-10 h-10 text-primary" />}
              title="Financial Analysis"
              description="Comprehensive analysis of your financial situation with data-driven insights and recommendations."
            />
            <FeatureCard 
              icon={<BarChart3 className="w-10 h-10 text-primary" />}
              title="Investment Strategy"
              description="Customized investment strategies aligned with your financial goals and risk tolerance."
            />
            <FeatureCard 
              icon={<PieChart className="w-10 h-10 text-primary" />}
              title="Retirement Planning"
              description="Long-term planning to ensure financial security through your retirement years."
            />
            <FeatureCard 
              icon={<Landmark className="w-10 h-10 text-primary" />}
              title="Wealth Management"
              description="Comprehensive wealth management services to grow and protect your assets."
            />
            <FeatureCard 
              icon={<Shield className="w-10 h-10 text-primary" />}
              title="Risk Assessment"
              description="Identifying and mitigating financial risks to protect your wealth and investments."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold">$2.5B+</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Assets managed for our clients
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold">1,200+</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Satisfied clients nationwide
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold">25+ yrs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Industry experience and expertise
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Hear from some of our satisfied clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              quote="The financial guidance we've received has completely transformed our business planning. Highly recommended!"
              author="Sarah Johnson"
              position="CEO, Johnson Enterprises"
              image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
            />
            <TestimonialCard
              quote="Their tax planning strategies saved us thousands last year. Their team is professional, knowledgeable, and responsive."
              author="Michael Chen"
              position="Small Business Owner"
              image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            />
            <TestimonialCard
              quote="I've been working with them for my retirement planning for 5 years. My portfolio has consistently outperformed the market."
              author="Emma Thompson"
              position="Retired Executive"
              image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
            />
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" asChild>
              <Link href="/testimonials">View All Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Ready to Secure Your Financial Future?"
        description="Schedule a consultation with one of our financial experts today and take the first step toward financial freedom."
        buttonText="Contact Us Now"
        buttonLink="/contact"
      />
    </main>
  );
}