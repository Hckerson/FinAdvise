"use client";

import { ArrowRight, Check, HelpCircle, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CtaSection } from "@/components/CtaSection";
import { Badge } from "@/components/ui/badge";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">(
    "monthly"
  );

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === "monthly" ? "annually" : "monthly");
  };

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Transparent Pricing Plans
            </h1>
            <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
              Choose the plan that fits your financial needs and goals. All
              plans include our expert guidance and personalized service.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-10 space-x-4">
            <span
              className={`text-sm font-medium ${
                billingCycle === "monthly"
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              Monthly Billing
            </span>
            <div className="flex items-center">
              <Switch
                checked={billingCycle === "annually"}
                onCheckedChange={toggleBillingCycle}
                id="billing-toggle"
              />
            </div>
            <div className="flex items-center">
              <span
                className={`text-sm font-medium ${
                  billingCycle === "annually"
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                Annual Billing
              </span>
              <Badge
                variant="outline"
                className="ml-2 bg-primary/10 text-primary border-primary/20"
              >
                Save 20%
              </Badge>
            </div>
          </div>

          {/* Individual Plans */}
          <Tabs defaultValue="individual" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="individual">For Individuals</TabsTrigger>
              <TabsTrigger value="business">For Businesses</TabsTrigger>
            </TabsList>
            <TabsContent value="individual" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Basic Plan */}
                <Card className="flex flex-col">
                  <CardHeader className="flex flex-col space-y-1.5 pb-6">
                    <CardTitle className="text-2xl">Essential</CardTitle>
                    <CardDescription>
                      Core financial planning for individuals
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <div className="text-3xl font-bold mb-2">
                      ${billingCycle === "monthly" ? "149" : "1,430"}
                      <span className="text-sm font-normal text-muted-foreground">
                        /{billingCycle === "monthly" ? "mo" : "yr"}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      Basic financial guidance for individuals with
                      straightforward needs.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Annual financial check-up</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Basic retirement planning</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Tax return preparation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Basic investment guidance</span>
                      </li>
                      <li className="flex items-start">
                        <X className="mr-2 h-4 w-4 text-muted-foreground mt-1" />
                        <span className="text-muted-foreground">
                          Estate planning
                        </span>
                      </li>
                      <li className="flex items-start">
                        <X className="mr-2 h-4 w-4 text-muted-foreground mt-1" />
                        <span className="text-muted-foreground">
                          Wealth management
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-0 mt-auto">
                    <Button className="w-full" variant="outline" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Pro Plan */}
                <Card className="flex flex-col border-2 border-primary relative">
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <Badge className="bg-primary text-primary-foreground">
                      Popular
                    </Badge>
                  </div>
                  <CardHeader className="flex flex-col space-y-1.5 pb-6">
                    <CardTitle className="text-2xl">Professional</CardTitle>
                    <CardDescription>
                      Comprehensive planning for growing wealth
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <div className="text-3xl font-bold mb-2">
                      ${billingCycle === "monthly" ? "299" : "2,870"}
                      <span className="text-sm font-normal text-muted-foreground">
                        /{billingCycle === "monthly" ? "mo" : "yr"}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      Ideal for professionals with more complex financial
                      situations.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Quarterly financial check-ups</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Comprehensive retirement planning</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Tax planning and preparation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Advanced investment strategies</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Basic estate planning</span>
                      </li>
                      <li className="flex items-start">
                        <X className="mr-2 h-4 w-4 text-muted-foreground mt-1" />
                        <span className="text-muted-foreground">
                          Advanced wealth management
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-0 mt-auto">
                    <Button className="w-full" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Premium Plan */}
                <Card className="flex flex-col">
                  <CardHeader className="flex flex-col space-y-1.5 pb-6">
                    <CardTitle className="text-2xl">Premium</CardTitle>
                    <CardDescription>
                      Elite service for high-net-worth individuals
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <div className="text-3xl font-bold mb-2">
                      ${billingCycle === "monthly" ? "599" : "5,750"}
                      <span className="text-sm font-normal text-muted-foreground">
                        /{billingCycle === "monthly" ? "mo" : "yr"}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      Comprehensive wealth management for high-net-worth
                      individuals.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Monthly financial check-ups</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Personalized retirement strategy</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Advanced tax strategy and preparation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Comprehensive investment management</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Advanced estate planning</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Priority wealth management</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-0 mt-auto">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="business" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Small Business Plan */}
                <Card className="flex flex-col">
                  <CardHeader className="flex flex-col space-y-1.5 pb-6">
                    <CardTitle className="text-2xl">Small Business</CardTitle>
                    <CardDescription>
                      Essential services for small businesses
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <div className="text-3xl font-bold mb-2">
                      ${billingCycle === "monthly" ? "299" : "2,870"}
                      <span className="text-sm font-normal text-muted-foreground">
                        /{billingCycle === "monthly" ? "mo" : "yr"}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      Core financial services for small businesses with up to 5
                      employees.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Monthly bookkeeping</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Quarterly financial statements</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Annual tax preparation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Basic business planning</span>
                      </li>
                      <li className="flex items-start">
                        <X className="mr-2 h-4 w-4 text-muted-foreground mt-1" />
                        <span className="text-muted-foreground">
                          Business valuation
                        </span>
                      </li>
                      <li className="flex items-start">
                        <X className="mr-2 h-4 w-4 text-muted-foreground mt-1" />
                        <span className="text-muted-foreground">
                          Succession planning
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-0 mt-auto">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Growing Business Plan */}
                <Card className="flex flex-col border-2 border-primary relative">
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <Badge className="bg-primary text-primary-foreground">
                      Popular
                    </Badge>
                  </div>
                  <CardHeader className="flex flex-col space-y-1.5 pb-6">
                    <CardTitle className="text-2xl">Growing Business</CardTitle>
                    <CardDescription>
                      Comprehensive services for expanding businesses
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <div className="text-3xl font-bold mb-2">
                      ${billingCycle === "monthly" ? "599" : "5,750"}
                      <span className="text-sm font-normal text-muted-foreground">
                        /{billingCycle === "monthly" ? "mo" : "yr"}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      Perfect for growing businesses with 6-25 employees.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Weekly bookkeeping</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Monthly financial statements</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Tax planning and preparation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Strategic business planning</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Basic business valuation</span>
                      </li>
                      <li className="flex items-start">
                        <X className="mr-2 h-4 w-4 text-muted-foreground mt-1" />
                        <span className="text-muted-foreground">
                          Advanced succession planning
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-0 mt-auto">
                    <Button className="w-full" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Enterprise Plan */}
                <Card className="flex flex-col">
                  <CardHeader className="flex flex-col space-y-1.5 pb-6">
                    <CardTitle className="text-2xl">Enterprise</CardTitle>
                    <CardDescription>
                      Advanced services for established businesses
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <div className="text-3xl font-bold mb-2">
                      ${billingCycle === "monthly" ? "999" : "9,590"}
                      <span className="text-sm font-normal text-muted-foreground">
                        /{billingCycle === "monthly" ? "mo" : "yr"}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      Comprehensive services for established businesses with 25+
                      employees.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Daily financial monitoring</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Weekly financial reporting</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Advanced tax strategy</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Comprehensive business planning</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Regular business valuation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                        <span>Complete succession planning</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-0 mt-auto">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Compare Plan Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {`Detailed breakdown of what's included in each plan`}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-4 px-6 text-left min-w-[200px]">Feature</th>
                  <th className="py-4 px-6 text-center">Essential</th>
                  <th className="py-4 px-6 text-center">Professional</th>
                  <th className="py-4 px-6 text-center">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center">
                      Financial Check-ups
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 ml-2 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              Regular comprehensive reviews of your financial
                              situation and progress toward goals.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">Annual</td>
                  <td className="py-4 px-6 text-center">Quarterly</td>
                  <td className="py-4 px-6 text-center">Monthly</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center">
                      Retirement Planning
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 ml-2 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              Strategy development for retirement savings and
                              income distribution.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">Basic</td>
                  <td className="py-4 px-6 text-center">Comprehensive</td>
                  <td className="py-4 px-6 text-center">Personalized</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center">
                      Tax Planning
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 ml-2 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              Strategies to minimize tax liability and maximize
                              after-tax returns.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">Tax Return Only</td>
                  <td className="py-4 px-6 text-center">Basic Strategies</td>
                  <td className="py-4 px-6 text-center">Advanced Strategies</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center">
                      Investment Management
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 ml-2 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              Portfolio design, asset allocation, and ongoing
                              management.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">Basic Guidance</td>
                  <td className="py-4 px-6 text-center">Active Management</td>
                  <td className="py-4 px-6 text-center">Comprehensive</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center">
                      Estate Planning
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 ml-2 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              Planning for the transfer of assets and wealth to
                              heirs or charitable organizations.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <X className="h-4 w-4 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-4 px-6 text-center">Basic</td>
                  <td className="py-4 px-6 text-center">Advanced</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center">
                      Financial Education
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 ml-2 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              Access to educational resources and workshops on
                              financial topics.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">Basic Resources</td>
                  <td className="py-4 px-6 text-center">
                    Workshops & Webinars
                  </td>
                  <td className="py-4 px-6 text-center">Private Sessions</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center">
                      Priority Support
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 ml-2 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              Expedited response times and access to advisors.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">Regular</td>
                  <td className="py-4 px-6 text-center">Enhanced</td>
                  <td className="py-4 px-6 text-center">24/7 Access</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Custom Plans */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer tailored financial services designed to meet your
              specific needs
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Custom Financial Services Package</CardTitle>
              <CardDescription>
                Perfect for clients with unique financial situations or
                specialized needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-muted-foreground">
                Our custom packages can include any combination of the following
                services, tailored to your specific needs:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary mt-1" />
                  <span>High-net-worth wealth management</span>
                </div>
                <div className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary mt-1" />
                  <span>International tax planning</span>
                </div>
                <div className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary mt-1" />
                  <span>Complex estate planning</span>
                </div>
                <div className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary mt-1" />
                  <span>Business succession planning</span>
                </div>
                <div className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary mt-1" />
                  <span>Specialized investment strategies</span>
                </div>
                <div className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary mt-1" />
                  <span>Family office services</span>
                </div>
                <div className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary mt-1" />
                  <span>Charitable giving strategies</span>
                </div>
                <div className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary mt-1" />
                  <span>Multi-generational wealth planning</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/contact">
                  Contact Us for a Custom Quote{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common questions about our pricing and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  Can I change plans later?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {`                  Yes, you can upgrade or downgrade your plan at any time. When
                  upgrading, we'll prorate the difference. When downgrading,
                  changes will take effect at the next billing cycle.`}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  Are there any hidden fees?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {`No, our pricing is transparent. The fee you see is what you
                  pay. For certain specialized services outside the scope of
                  your plan, we'll discuss any additional costs with you
                  beforehand.`}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  How do I know which plan is right for me?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We recommend scheduling a free consultation call with one of
                  our advisors who can assess your financial situation and
                  recommend the most appropriate plan for your needs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Do you offer refunds?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {`We offer a 30-day satisfaction guarantee for all new clients.
                  If you're not satisfied with our services within the first 30
                  days, we'll refund your payment in full.`}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Ready to Get Started?"
        description="Schedule a free consultation with one of our financial experts to discuss your needs and goals."
        buttonText="Contact Us Today"
        buttonLink="/contact"
      />
    </main>
  );
}
