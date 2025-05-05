"use client";

import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, TooltipProps } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

export function FinancialCalculator() {
  // Compound Interest Calculator
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(7);
  const [time, setTime] = useState(10);
  const [contribution, setContribution] = useState(100);
  const [contributionFrequency, setContributionFrequency] = useState("monthly");
  const [compoundFrequency, setCompoundFrequency] = useState("annually");
  const [results, setResults] = useState<{ year: number; amount: number }[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [interestEarned, setInterestEarned] = useState(0);

  // Calculate compound interest
  useEffect(() => {
    const calculateCompoundInterest = () => {
      let compoundPerYear = 1;
      if (compoundFrequency === "semi-annually") compoundPerYear = 2;
      if (compoundFrequency === "quarterly") compoundPerYear = 4;
      if (compoundFrequency === "monthly") compoundPerYear = 12;
      if (compoundFrequency === "daily") compoundPerYear = 365;

      let contributionsPerYear = 0;
      if (contributionFrequency === "monthly") contributionsPerYear = 12;
      if (contributionFrequency === "quarterly") contributionsPerYear = 4;
      if (contributionFrequency === "annually") contributionsPerYear = 1;

      const yearlyData = [];
      let currentAmount = principal;
      let totalContributed = principal;

      for (let year = 0; year <= time; year++) {
        if (year > 0) {
          for (let i = 0; i < compoundPerYear; i++) {
            // Apply compound interest
            currentAmount *= (1 + (rate / 100) / compoundPerYear);
            
            // Add contributions based on frequency
            if (contributionFrequency === "monthly" && compoundFrequency === "monthly") {
              currentAmount += contribution;
              totalContributed += contribution;
            } else if (contributionFrequency === "quarterly" && (i % (compoundPerYear / 4) === 0)) {
              currentAmount += contribution;
              totalContributed += contribution;
            } else if (contributionFrequency === "annually" && i === 0) {
              currentAmount += contribution * 12; // Annual lump sum
              totalContributed += contribution * 12;
            }
          }
          
          // If compound frequency != contribution frequency, adjust
          if (contributionFrequency === "monthly" && compoundFrequency !== "monthly") {
            const monthlyContributions = contribution * 12;
            currentAmount += monthlyContributions;
            totalContributed += monthlyContributions;
          }
        }
        
        yearlyData.push({
          year,
          amount: Math.round(currentAmount * 100) / 100
        });
      }

      setResults(yearlyData);
      setTotalContributions(Math.round(totalContributed * 100) / 100);
      setInterestEarned(Math.round((yearlyData[yearlyData.length - 1].amount - totalContributed) * 100) / 100);
    };

    calculateCompoundInterest();
  }, [principal, rate, time, contribution, compoundFrequency, contributionFrequency]);

  // Custom tooltip for chart
  const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border rounded-md p-4 shadow-md">
          <p className="font-semibold">{`Year ${label}`}</p>
          <p className="text-primary">{`Total: $${payload[0].value?.toLocaleString()}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Tabs defaultValue="compound" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-8 max-w-md mx-auto">
        <TabsTrigger value="compound">Compound Interest</TabsTrigger>
        <TabsTrigger value="mortgage">Mortgage Calculator</TabsTrigger>
      </TabsList>
      
      <TabsContent value="compound">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Compound Interest Calculator</CardTitle>
              <CardDescription>
                Calculate how your investments will grow over time with compound interest.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="principal">Initial Investment</Label>
                    <span className="text-muted-foreground">${principal.toLocaleString()}</span>
                  </div>
                  <Slider
                    id="principal"
                    min={1000}
                    max={100000}
                    step={1000}
                    value={[principal]}
                    onValueChange={(value) => setPrincipal(value[0])}
                    className="mb-2"
                  />
                  <Input
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="contribution">Monthly Contribution</Label>
                    <span className="text-muted-foreground">${contribution}</span>
                  </div>
                  <Slider
                    id="contribution"
                    min={0}
                    max={1000}
                    step={50}
                    value={[contribution]}
                    onValueChange={(value) => setContribution(value[0])}
                    className="mb-2"
                  />
                  <Input
                    type="number"
                    value={contribution}
                    onChange={(e) => setContribution(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="rate">Annual Interest Rate (%)</Label>
                    <span className="text-muted-foreground">{rate}%</span>
                  </div>
                  <Slider
                    id="rate"
                    min={1}
                    max={15}
                    step={0.25}
                    value={[rate]}
                    onValueChange={(value) => setRate(value[0])}
                    className="mb-2"
                  />
                  <Input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full"
                    step="0.25"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="time">Time Period (Years)</Label>
                    <span className="text-muted-foreground">{time} years</span>
                  </div>
                  <Slider
                    id="time"
                    min={1}
                    max={40}
                    step={1}
                    value={[time]}
                    onValueChange={(value) => setTime(value[0])}
                    className="mb-2"
                  />
                  <Input
                    type="number"
                    value={time}
                    onChange={(e) => setTime(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="compoundFrequency">Compound Frequency</Label>
                    <select
                      id="compoundFrequency"
                      value={compoundFrequency}
                      onChange={(e) => setCompoundFrequency(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="annually">Annually</option>
                      <option value="semi-annually">Semi-Annually</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="monthly">Monthly</option>
                      <option value="daily">Daily</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contributionFrequency">Contribution Frequency</Label>
                    <select
                      id="contributionFrequency"
                      value={contributionFrequency}
                      onChange={(e) => setContributionFrequency(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="annually">Annually</option>
                    </select>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Final Balance</p>
                      <p className="text-2xl font-bold text-primary">${results[results.length - 1]?.amount.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Contributions</p>
                      <p className="text-xl font-semibold">${totalContributions.toLocaleString()}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Interest Earned</p>
                    <p className="text-xl font-semibold text-primary">${interestEarned.toLocaleString()}</p>
                  </div>
                </div>

                <Button className="w-full" onClick={() => window.print()}>
                  Download Results
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Growth Projection</CardTitle>
              <CardDescription>
                Visualize how your investment will grow over time with compound interest.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={results}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="year" 
                      label={{ value: 'Years', position: 'insideBottom', offset: -5 }} 
                    />
                    <YAxis 
                      tickFormatter={(value) => `$${value.toLocaleString()}`}
                      label={{ value: 'Amount ($)', angle: -90, position: 'insideLeft' }} 
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="amount" 
                      name="Balance" 
                      stroke="hsl(var(--chart-1))" 
                      strokeWidth={2} 
                      dot={{ r: 2 }} 
                      activeDot={{ r: 6 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Key Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>Time is your most powerful ally</li>
                      <li>Small increases in rate have massive impacts</li>
                      <li>Regular contributions amplify growth</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Tax Considerations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      This calculator shows pre-tax growth. Consider tax-advantaged accounts like IRAs or 401(k)s for maximum efficiency.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Next Steps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Ready to start investing? Contact us for personalized advice.
                    </p>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href="/contact">Schedule Consultation</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      
      <TabsContent value="mortgage">
        <Card>
          <CardHeader>
            <CardTitle>Mortgage Calculator</CardTitle>
            <CardDescription>
              Coming soon! Calculate your monthly mortgage payments based on loan amount, interest rate, and term.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center py-12">
            <div className="text-center max-w-md">
              <div className="mb-4 mx-auto bg-muted rounded-full w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M21 9V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3" />
                  <path d="M13 12a3 3 0 1 0 0-6H9v14" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{"We're enhancing our mortgage calculator"}</h3>
              <p className="text-muted-foreground mb-6">
                Our team is currently developing a comprehensive mortgage calculator with advanced features to help you make informed home-buying decisions.
              </p>
              <Button asChild>
                <a href="/contact">Get Mortgage Advice Now</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}