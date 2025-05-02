import { ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TestimonialCard from "@/components/TestimonialCard";
import { CtaSection } from "@/components/CtaSection";

export const metadata = {
  title: "Client Testimonials | FinAdvise Financial Services",
  description: "Hear what our clients have to say about our financial services and expert guidance.",
};

export default function TestimonialsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Client Testimonials
            </h1>
            <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
              Read about the experiences of our clients and how our financial services have helped them achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Hear from some of our satisfied clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <Quote className="h-10 w-10 mb-4 opacity-80" />
                <CardTitle className="text-2xl">Financial Freedom</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="italic">
                  "Working with the team at FinAdvise was a game-changer for my retirement planning. Their personalized approach and deep expertise helped me create a financial plan that {"I'm"} confident will support me through retirement."
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                      alt="Michael Chen"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Michael Chen</h4>
                    <p className="text-sm opacity-80">Retired Executive</p>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <Card className="border-2 border-primary">
              <CardHeader>
                <Quote className="h-10 w-10 mb-4 text-primary" />
                <CardTitle className="text-2xl">Business Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="italic">
                  "The strategic tax planning advice we received saved our business thousands of dollars and helped us reinvest in growth. The team's proactive approach and clear communication make them essential partners."
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
                      alt="Sarah Johnson"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">CEO, Johnson Enterprises</p>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Quote className="h-10 w-10 mb-4 text-primary" />
                <CardTitle className="text-2xl">Investment Success</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="italic">
                  "I've been working with FinAdvise for over 5 years, and their investment advice has consistently outperformed the market. Their team truly understands my financial goals and risk tolerance."
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                      alt="Emma Thompson"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Emma Thompson</h4>
                    <p className="text-sm text-muted-foreground">Small Business Owner</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials by Service Type */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Client Stories by Service
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore testimonials related to specific financial services
            </p>
          </div>

          <Tabs defaultValue="retirement" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
              <TabsTrigger value="retirement">Retirement Planning</TabsTrigger>
              <TabsTrigger value="tax">Tax Services</TabsTrigger>
              <TabsTrigger value="investment">Investment Advisory</TabsTrigger>
              <TabsTrigger value="business">Business Services</TabsTrigger>
            </TabsList>
            <TabsContent value="retirement" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TestimonialCard
                  quote="Their retirement planning services have given me confidence that I'll have enough saved for a comfortable retirement. The detailed analysis and projections were eye-opening."
                  author="Robert Miller"
                  position="Engineer, 55"
                  image="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
                />
                <TestimonialCard
                  quote="The team helped me navigate complex retirement options and create a sustainable withdrawal strategy that minimizes taxes and maximizes my retirement income."
                  author="Jennifer Adams"
                  position="Retired Teacher"
                  image="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
                />
              </div>
            </TabsContent>
            <TabsContent value="tax" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TestimonialCard
                  quote="Their tax planning strategies saved our family over $12,000 last year alone. Their knowledge of tax law is impressive and they're always up-to-date on new regulations."
                  author="James Wilson"
                  position="Healthcare Executive"
                  image="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"
                />
                <TestimonialCard
                  quote="As someone with complex international tax situations, I've been amazed at how their team navigates multiple tax jurisdictions with ease and confidence."
                  author="Maria Rodriguez"
                  position="Multinational Employee"
                  image="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
                />
              </div>
            </TabsContent>
            <TabsContent value="investment" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TestimonialCard
                  quote="Their investment advice is sound, research-based, and always aligned with my goals. I appreciate their disciplined approach to portfolio management even in volatile markets."
                  author="David Chang"
                  position="Technology Director"
                  image="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
                />
                <TestimonialCard
                  quote="What sets them apart is how they explain complex investment concepts in understandable terms and never pressure me into investments I'm not comfortable with."
                  author="Patricia Lewis"
                  position="Healthcare Professional"
                  image="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
                />
              </div>
            </TabsContent>
            <TabsContent value="business" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TestimonialCard
                  quote="Their business accounting services have streamlined our operations and given us valuable insights into our cash flow and profitability drivers."
                  author="Thomas Wright"
                  position="Founder, Tech Startup"
                  image="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
                />
                <TestimonialCard
                  quote="As we prepared to sell our business, their valuation and exit planning services were invaluable in maximizing the sale price and minimizing tax implications."
                  author="Lauren Martinez"
                  position="Former Business Owner"
                  image="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Client Video Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch our clients share their experiences with our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden border bg-card text-card-foreground shadow-sm">
              <div className="relative aspect-video bg-muted flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary opacity-70">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">Business Growth Story</h3>
                <p className="text-sm text-muted-foreground">
                  Jonathan shares how our business accounting services helped his company grow by 40% in one year.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border bg-card text-card-foreground shadow-sm">
              <div className="relative aspect-video bg-muted flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary opacity-70">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">Early Retirement Success</h3>
                <p className="text-sm text-muted-foreground">
                  Katherine explains how our retirement planning services helped her retire 5 years earlier than expected.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border bg-card text-card-foreground shadow-sm">
              <div className="relative aspect-video bg-muted flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary opacity-70">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">Investment Portfolio Growth</h3>
                <p className="text-sm text-muted-foreground">
                  Mark discusses how our investment strategies helped him achieve 12% annual returns even during market downturns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Testimonials */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              quote="Their holistic approach to financial planning has changed the way I think about money. I now have clear goals and a roadmap to achieve them."
              author="William Parker"
              position="Marketing Director"
              image="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg"
            />
            <TestimonialCard
              quote="The team's expertise in estate planning gave our family peace of mind knowing that our assets will be protected and distributed according to our wishes."
              author="Sandra Mitchell"
              position="Healthcare Executive"
              image="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg"
            />
            <TestimonialCard
              quote="Their guidance during market volatility helped me stay the course with my investments, which has paid off tremendously in the long run."
              author="Richard Collins"
              position="IT Professional"
              image="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
            />
            <TestimonialCard
              quote="As a small business owner, their comprehensive financial services have been invaluable for both my business and personal finances."
              author="Olivia Henderson"
              position="Boutique Owner"
              image="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg"
            />
            <TestimonialCard
              quote="The college funding strategies they developed for my children were creative and effective, helping us save thousands in potential student loan interest."
              author="Daniel Carter"
              position="Professor"
              image="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg"
            />
            <TestimonialCard
              quote="Their ongoing support and regular check-ins ensure that my financial plan stays relevant as my life circumstances change."
              author="Lisa Washington"
              position="Non-profit Director"
              image="https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection 
        title="Ready to Join Our Satisfied Clients?"
        description="Schedule a consultation today and discover how our financial expertise can help you achieve your goals."
        buttonText="Contact Us Now"
        buttonLink="/contact"
      />
    </main>
  );
}