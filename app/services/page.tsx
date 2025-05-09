"use client";
import { ArrowRight, BarChart3, Calculator, CreditCard, DollarSign, FileText, PieChart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FinancialCalculator } from "@/components/IndustrySpecific/FinancialCalculator";
import { CtaSection } from "@/components/CtaSection";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive financial solutions designed to help you achieve your goals. From tax planning to wealth management, we provide expert guidance tailored to your unique needs.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-video">
              <Image
                src="https://images.pexels.com/photos/6774950/pexels-photo-6774950.jpeg"
                alt="Financial advisor working with clients"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert financial services for individuals and businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard 
              icon={<Calculator className="w-12 h-12 text-primary" />}
              title="Tax Planning & Preparation"
              description="Strategic tax planning and preparation services for individuals and businesses to minimize tax liability and ensure compliance."
            />
            <ServiceCard 
              icon={<BarChart3 className="w-12 h-12 text-primary" />}
              title="Financial Reporting & Analysis"
              description="Comprehensive financial reporting and analysis to provide insights into your financial health and inform strategic decisions."
            />
            <ServiceCard 
              icon={<PieChart className="w-12 h-12 text-primary" />}
              title="Retirement Planning"
              description="Personalized retirement planning to help you achieve your long-term financial goals and maintain your desired lifestyle."
            />
            <ServiceCard 
              icon={<DollarSign className="w-12 h-12 text-primary" />}
              title="Investment Advisory"
              description="Expert investment advice to grow your wealth strategically while managing risk according to your goals and timeline."
            />
            <ServiceCard 
              icon={<FileText className="w-12 h-12 text-primary" />}
              title="Estate Planning"
              description="Comprehensive estate planning services to protect your assets and ensure they are distributed according to your wishes."
            />
            <ServiceCard 
              icon={<CreditCard className="w-12 h-12 text-primary" />}
              title="Business Accounting"
              description="Full-service accounting solutions for businesses of all sizes, from startups to established enterprises."
            />
          </div>
        </div>
      </section>

      {/* Service Packages Tab Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Our Service Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored solutions for different client needs
            </p>
          </div>
          <Tabs defaultValue="individual" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="individual">For Individuals</TabsTrigger>
              <TabsTrigger value="business">For Businesses</TabsTrigger>
              <TabsTrigger value="wealth">Wealth Management</TabsTrigger>
            </TabsList>
            <TabsContent value="individual" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Financial Planning</CardTitle>
                  <CardDescription>
                    Comprehensive financial planning for individuals and families
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Personalized financial goal setting and planning</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Retirement planning and income strategies</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Tax planning and optimization</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Estate planning and wealth transfer strategies</span>
                    </li>
                  </ul>
                  <Button className="mt-6" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="business" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Business Financial Services</CardTitle>
                  <CardDescription>
                    Comprehensive financial solutions for businesses of all sizes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Business accounting and bookkeeping</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Corporate tax planning and preparation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Financial forecasting and budgeting</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Business succession planning</span>
                    </li>
                  </ul>
                  <Button className="mt-6" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="wealth" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Wealth Management Services</CardTitle>
                  <CardDescription>
                    Comprehensive wealth management for high-net-worth individuals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Comprehensive investment management</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Advanced tax strategy and optimization</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Estate and legacy planning</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Family office services</span>
                    </li>
                  </ul>
                  <Button className="mt-6" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Financial Calculator Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Financial Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Try our interactive calculators to help plan your financial future
            </p>
          </div>
          <FinancialCalculator />
        </div>
      </section>

      {/* Downloadable Reports */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Financial Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Download our free financial guides and reports
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>2025 Tax Planning Guide</CardTitle>
                <CardDescription>
                  Comprehensive guide to tax planning strategies for the 2025 tax year
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">
                  Learn about the latest tax law changes and strategies to minimize your tax burden in the coming year.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="#">Download PDF</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Retirement Readiness Checklist</CardTitle>
                <CardDescription>
                  Essential steps to prepare for a comfortable retirement
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">
                  A comprehensive checklist to help you assess your retirement readiness and identify areas that need attention.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="#">Download PDF</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Investment Strategy Guide</CardTitle>
                <CardDescription>
                  Building a diversified investment portfolio for long-term growth
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">
                  Learn about different investment strategies and how to build a portfolio that aligns with your risk tolerance and goals.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="#">Download PDF</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection 
        title="Ready to Elevate Your Financial Strategy?"
        description="Schedule a consultation with one of our expert advisors to discuss your specific needs and goals."
        buttonText="Contact Us Today"
        buttonLink="/contact"
      />
    </main>
  );
}