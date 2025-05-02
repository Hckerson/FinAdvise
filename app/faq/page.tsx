import { Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { CtaSection } from "@/components/CtaSection";

export const metadata = {
  title: "Frequently Asked Questions | FinAdvise Financial Services",
  description:
    "Find answers to common questions about our financial services, processes, and how we can help you achieve your financial goals.",
};

export default function FaqPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
              Find answers to common questions about our financial services and
              how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-10">
              {/* General Questions */}
              <div>
                <h2 className="text-2xl font-bold mb-6">General Questions</h2>
                <Accordion
                  type="single"
                  collapsible
                  className="border rounded-lg"
                >
                  <AccordionItem value="what-services">
                    <AccordionTrigger className="px-4">
                      What financial services do you offer?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <p>
                        We offer a comprehensive range of financial services,
                        including:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Tax planning and preparation</li>
                        <li>Retirement planning</li>
                        <li>Investment advisory services</li>
                        <li>Estate planning</li>
                        <li>Business accounting and financial services</li>
                        <li>Wealth management</li>
                        <li>Financial education and workshops</li>
                      </ul>
                      <p className="mt-2">
                        Each service can be customized to meet your specific
                        needs and financial goals.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="qualifications">
                    <AccordionTrigger className="px-4">
                      What qualifications do your financial advisors have?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <p>
                        Our team consists of highly qualified professionals with
                        various certifications relevant to their areas of
                        expertise:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Certified Financial Planners (CFP®)</li>
                        <li>Certified Public Accountants (CPA)</li>
                        <li>Chartered Financial Analysts (CFA)</li>
                        <li>Chartered Financial Consultants (ChFC)</li>
                        <li>Enrolled Agents (EA)</li>
                      </ul>
                      <p className="mt-2">
                        Additionally, our advisors maintain their expertise
                        through continuing education and staying current with
                        industry trends and regulatory changes.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="first-meeting">
                    <AccordionTrigger className="px-4">
                      What should I bring to my first meeting?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <p>
                        To make the most of your initial consultation, we
                        recommend bringing:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          Recent financial statements (bank, investment,
                          retirement accounts)
                        </li>
                        <li>Most recent tax returns</li>
                        <li>Information about any outstanding debts</li>
                        <li>
                          Insurance policies (life, health, property, etc.)
                        </li>
                        <li>Estate planning documents, if any</li>
                        <li>A list of your financial goals and concerns</li>
                        <li>
                          Any questions you have about your financial situation
                        </li>
                      </ul>
                      <p className="mt-2">
                        This information helps us understand your current
                        financial situation and develop personalized
                        recommendations.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="virtual-meetings">
                    <AccordionTrigger className="px-4">
                      Do you offer virtual meetings?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <p>
                        Yes, we offer virtual consultations via secure video
                        conferencing platforms. Virtual meetings provide the
                        same level of service and personalized attention as
                        in-person meetings, with the added convenience of
                        connecting from anywhere. We use secure, HIPAA-compliant
                        platforms to ensure the confidentiality of your
                        information.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Services and Fees */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Services and Fees</h2>
                <Accordion
                  type="single"
                  collapsible
                  className="border rounded-lg"
                >
                  <AccordionItem value="fee-structure">
                    <AccordionTrigger className="px-4">
                      How do you charge for your services?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <p>
                        Our fee structure varies depending on the services
                        provided:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          <strong>Financial Planning:</strong> Fixed fee or
                          monthly/annual subscription
                        </li>
                        <li>
                          <strong>Investment Management:</strong> Percentage of
                          assets under management (typically 0.5% - 1.25%
                          annually, depending on portfolio size)
                        </li>
                        <li>
                          <strong>Tax Preparation:</strong> Fixed fee based on
                          complexity
                        </li>
                        <li>
                          <strong>Business Services:</strong> Monthly retainer
                          or project-based fees
                        </li>
                      </ul>
                      <p className="mt-2">
                        {
                          "We provide transparent pricing with no hidden fees. During our initial consultation, we'll discuss which fee structure best suits your needs and provide a clear quote before any work begins."
                        }
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="minimum-investment">
                    <AccordionTrigger className="px-4">
                      Is there a minimum investment requirement?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <p>
                        For our wealth management services, we typically require
                        a minimum investment of $250,000. However, we understand
                        that everyone starts somewhere, and we offer financial
                        planning and investment guidance services with no
                        minimum requirements.
                      </p>
                      <p className="mt-2">
                        Our goal is to help clients at various stages of their
                        financial journey, and we can recommend appropriate
                        services based on your current situation and future
                        goals.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="frequency-of-meetings">
                    <AccordionTrigger className="px-4">
                      How often will we meet to discuss my financial plan?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <p>
                        The frequency of meetings depends on your selected
                        service package and individual needs:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          <strong>Essential Plan:</strong> Annual review
                        </li>
                        <li>
                          <strong>Professional Plan:</strong> Quarterly reviews
                        </li>
                        <li>
                          <strong>Premium Plan:</strong> Monthly check-ins
                        </li>
                      </ul>
                      <p className="mt-2">
                        Additionally, we schedule ad-hoc meetings when
                        significant life events occur (marriage, new job,
                        inheritance, etc.) or when market conditions warrant a
                        discussion about strategy adjustments.
                      </p>
                      <p className="mt-2">
                        Between scheduled meetings, our team is always available
                        by phone or email to address questions or concerns.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="cancel-service">
                    <AccordionTrigger className="px-4">
                      Can I cancel my service at any time?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <p>
                        Yes, you can cancel subscription-based services at any
                        time with 30 days' notice. For annual pre-paid services,
                        we offer a prorated refund for the unused portion.
                      </p>
                      <p className="mt-2">
                        For investment management services, you maintain full
                        control of your accounts and can terminate our
                        management services with written notice. There are no
                        termination fees or penalties for ending our
                        relationship.
                      </p>
                      <p className="mt-2">
                        We strive to earn your business through excellent
                        service rather than contractual obligations.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Financial Planning */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Financial Planning</h2>
                <Accordion
                  type="single"
                  collapsible
                  className="border rounded-lg"
                >
                  <AccordionItem value="retirement-planning">
                    <AccordionTrigger className="px-4">
                      How do you approach retirement planning?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <p>
                        Our retirement planning process is comprehensive and
                        personalized:
                      </p>
                      <ol className="list-decimal pl-5 mt-2 space-y-1">
                        <li>
                          <strong>{"Assessment:"}</strong> We analyze your
                          current financial situation, including assets,
                          liabilities, income, and expenses.
                        </li>
                        <li>
                          <strong>Goal Setting:</strong> We help you define
                          clear retirement goals, including desired lifestyle,
                          retirement age, and legacy plans.
                        </li>
                        <li>
                          <strong>Gap Analysis:</strong> We calculate the
                          difference between your current trajectory and your
                          retirement goals.
                        </li>
                        <li>
                          <strong>Strategy Development:</strong> We create a
                          customized strategy that includes retirement account
                          optimization, investment recommendations, tax
                          planning, and withdrawal strategies.
                        </li>
                        <li>
                          <strong>Implementation:</strong> We help you execute
                          the plan, including account setup, asset allocation,
                          and required actions.
                        </li>
                        <li>
                          <strong>{"Ongoing Management:"}</strong> We regularly
                          review and adjust your plan as your life circumstances
                          change and as you progress toward your goals.
                        </li>
                      </ol>
                      <p className="mt-2">
                        Our approach integrates all aspects of your financial
                        life to create a coherent strategy that maximizes the
                        probability of achieving your retirement objectives.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="risk-assessment">
                    <AccordionTrigger className="px-4">
                      How do you assess my risk tolerance for investments?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <p>
                        We assess your risk tolerance through a multi-faceted
                        approach:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          <strong>Quantitative Assessment:</strong> We use
                          validated risk tolerance questionnaires that measure
                          your comfort with various investment scenarios.
                        </li>
                        <li>
                          <strong>Qualitative Discussion:</strong> We have
                          in-depth conversations about your past investment
                          experiences, reactions to market volatility, and
                          emotional relationship with money.
                        </li>
                        <li>
                          <strong>Financial Capacity for Risk:</strong> We
                          analyze your overall financial situation to determine
                          how much risk you can objectively afford to take based
                          on your time horizon and financial goals.
                        </li>
                        <li>
                          <strong>Education:</strong> We ensure you understand
                          the relationship between risk and return, helping you
                          make informed decisions about risk tradeoffs.
                        </li>
                      </ul>
                      <p className="mt-2">
                        The result is a risk profile that balances your
                        emotional comfort with risk against your financial goals
                        and time horizon, leading to an investment strategy you
                        can confidently maintain through market cycles.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="estate-planning">
                    <AccordionTrigger className="px-4">
                      What does estate planning include?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <p>{"Our estate planning services include:"}</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          <strong>{"Will and Trust Planning:"}</strong>{" "}
                          Developing appropriate legal documents to ensure your
                          assets are distributed according to your wishes.
                        </li>
                        <li>
                          <strong>{"Beneficiary Designations:"}</strong>{" "}
                          Reviewing and updating beneficiary designations on
                          retirement accounts, insurance policies, and other
                          assets.
                        </li>
                        <li>
                          <strong>{"Power of Attorney:"}</strong> Establishing
                          financial and healthcare powers of attorney to ensure
                          your affairs are managed if you become incapacitated.
                        </li>
                        <li>
                          <strong>{"Tax Planning:"}</strong> Strategies to
                          minimize estate and inheritance taxes for your
                          beneficiaries.
                        </li>
                        <li>
                          <strong>{"Asset Protection:"}</strong> Implementing
                          structures to protect assets from creditors and legal
                          claims.
                        </li>
                        <li>
                          <strong>{"Business Succession:"}</strong> Planning for
                          the smooth transition of business ownership and
                          management.
                        </li>
                        <li>
                          <strong>{"Charitable Giving:"}</strong> Incorporating
                          philanthropic goals into your estate plan.
                        </li>
                      </ul>
                      <p className="mt-2">
                        We work in collaboration with estate attorneys to ensure
                        all legal documents properly reflect your goals while
                        optimizing tax implications and asset protection.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="tax-planning">
                    <AccordionTrigger className="px-4">
                      What tax planning strategies do you implement?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <p>
                        Our tax planning strategies are proactive and
                        comprehensive, including:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          <strong>Income Timing{":"}</strong> Strategic timing
                          of income recognition to manage tax brackets.
                        </li>
                        <li>
                          <strong>Tax-Loss Harvesting{":"}</strong> Realizing
                          investment losses to offset capital gains.
                        </li>
                        <li>
                          <strong>Retirement Account Optimization{":"}</strong>{" "}
                          Balancing traditional and Roth accounts for tax
                          diversification.
                        </li>
                        <li>
                          <strong>Strategic Roth Conversions{":"}</strong>{" "}
                          Converting traditional retirement accounts to Roth
                          accounts in tax-advantageous years.
                        </li>
                        <li>
                          <strong>{"Charitable Giving:"}</strong> Optimizing
                          charitable contributions through bunching,
                          donor-advised funds, or qualified charitable
                          distributions.
                        </li>
                        <li>
                          <strong>{"Business Structure Planning:"}</strong>{" "}
                          Selecting and optimizing business entities for tax
                          efficiency.
                        </li>
                        <li>
                          <strong>
                            {"Tax-Efficient Investment Strategies:"}
                          </strong>{" "}
                          Placing investments in the most tax-advantageous
                          accounts.
                        </li>
                        <li>
                          <strong>Estate Tax Planning{":"}</strong> Implementing
                          strategies to minimize estate and inheritance taxes.
                        </li>
                      </ul>
                      <p className="mt-2">
                        We take a multi-year perspective on tax planning,
                        looking beyond the current year to optimize your tax
                        situation over your lifetime and for future generations.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Investment Management */}
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Investment Management
                </h2>
                <Accordion
                  type="single"
                  collapsible
                  className="border rounded-lg"
                >
                  <AccordionItem value="investment-philosophy">
                    <AccordionTrigger className="px-4">
                      What is your investment philosophy?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <p>
                        Our investment philosophy is guided by these core
                        principles:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          <strong>Long-Term Focus:</strong> We build portfolios
                          designed for long-term growth rather than short-term
                          speculation.
                        </li>
                        <li>
                          <strong>Diversification:</strong> We spread
                          investments across multiple asset classes, sectors,
                          and geographies to manage risk.
                        </li>
                        <li>
                          <strong>Evidence-Based:</strong> Our strategies are
                          based on academic research and empirical evidence
                          rather than market predictions or timing.
                        </li>
                        <li>
                          <strong>Cost-Efficiency:</strong> We minimize
                          investment costs to maximize net returns.
                        </li>
                        <li>
                          <strong>Tax-Awareness:</strong> We implement
                          tax-efficient strategies to enhance after-tax returns.
                        </li>
                        <li>
                          <strong>Risk Management:</strong> We design portfolios
                          aligned with your risk tolerance and financial goals.
                        </li>
                        <li>
                          <strong>Disciplined Rebalancing:</strong> We maintain
                          target allocations through systematic rebalancing.
                        </li>
                      </ul>
                      <p className="mt-2">
                        This philosophy helps our clients achieve their
                        financial goals while navigating market volatility with
                        confidence.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="investment-options">
                    <AccordionTrigger className="px-4">
                      What types of investments do you recommend?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <p>
                        Our investment recommendations are tailored to each
                        client's goals, but typically include a mix of:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          <strong>Exchange-Traded Funds (ETFs):</strong>{" "}
                          Low-cost funds that track market indices.
                        </li>
                        <li>
                          <strong>Mutual Funds:</strong> Actively managed or
                          index funds for specific sectors or strategies.
                        </li>
                        <li>
                          <strong>Individual Stocks:</strong> For larger
                          portfolios or specific investment objectives.
                        </li>
                        <li>
                          <strong>Bonds:</strong> Government, municipal, and
                          corporate bonds for income and stability.
                        </li>
                        <li>
                          <strong>Real Estate:</strong> REITs or private real
                          estate investments for diversification.
                        </li>
                        <li>
                          <strong>Alternative Investments:</strong> For
                          qualified investors seeking additional
                          diversification.
                        </li>
                      </ul>
                      <p className="mt-2">
                        We focus on creating diversified portfolios with
                        appropriate asset allocation based on your risk
                        tolerance, time horizon, and financial goals. Our
                        recommendations prioritize transparency, liquidity, and
                        cost-efficiency.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="market-volatility">
                    <AccordionTrigger className="px-4">
                      How do you handle market volatility?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <p>
                        Our approach to market volatility includes several key
                        strategies:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          <strong>Proactive Communication:</strong> During
                          volatile periods, we increase client communications to
                          provide context and perspective.
                        </li>
                        <li>
                          <strong>Strategic Rebalancing:</strong> We use market
                          volatility as an opportunity to rebalance portfolios
                          at advantageous prices.
                        </li>
                        <li>
                          <strong>Focus on Fundamentals:</strong> We emphasize
                          long-term economic fundamentals rather than short-term
                          market movements.
                        </li>
                        <li>
                          <strong>Behavioral Coaching:</strong> We help clients
                          avoid emotional decisions that can damage long-term
                          performance.
                        </li>
                        <li>
                          <strong>Tactical Adjustments:</strong> When
                          appropriate, we make modest tactical adjustments to
                          portfolios while maintaining the strategic allocation.
                        </li>
                      </ul>
                      <p className="mt-2">
                        Our historical data shows that maintaining discipline
                        during volatile markets has been a key factor in
                        long-term investment success. We've helped clients
                        navigate multiple market cycles, including the 2008
                        financial crisis, the 2020 pandemic decline, and other
                        significant market events.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="performance-reports">
                    <AccordionTrigger className="px-4">
                      How do you report investment performance?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <p>
                        We provide comprehensive performance reporting through:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          <strong>Quarterly Performance Reports:</strong>{" "}
                          Detailed analysis of your portfolio performance,
                          including returns, asset allocation, and comparisons
                          to relevant benchmarks.
                        </li>
                        <li>
                          <strong>Online Dashboard:</strong> Secure 24/7 access
                          to your accounts with up-to-date performance
                          information.
                        </li>
                        <li>
                          <strong>Annual Review Meetings:</strong> In-depth
                          discussions of your investment performance in the
                          context of your overall financial plan.
                        </li>
                        <li>
                          <strong>Tax Documents:</strong> Annual tax reporting
                          documents for investment accounts.
                        </li>
                      </ul>
                      <p className="mt-2">
                        Our reporting focuses not just on raw returns but on
                        performance relative to your financial goals and risk
                        tolerance. We emphasize transparency and provide context
                        to help you understand how your investments are
                        performing in relation to your overall financial plan.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Business Services */}
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Business Financial Services
                </h2>
                <Accordion
                  type="single"
                  collapsible
                  className="border rounded-lg"
                >
                  <AccordionItem value="business-services">
                    <AccordionTrigger className="px-4">
                      What business financial services do you offer?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <p>Our business financial services include:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          <strong>Bookkeeping and Accounting:</strong> Regular
                          financial record-keeping and reporting.
                        </li>
                        <li>
                          <strong>Tax Planning and Preparation:</strong>{" "}
                          Strategic tax planning and filing for businesses of
                          all types.
                        </li>
                        <li>
                          <strong>Business Valuation:</strong> Professional
                          assessment of business value for various purposes.
                        </li>
                        <li>
                          <strong>Cash Flow Management:</strong> Strategies to
                          optimize cash flow and working capital.
                        </li>
                        <li>
                          <strong>Financial Forecasting:</strong> Projections
                          and budgeting for business planning.
                        </li>
                        <li>
                          <strong>Business Structure Optimization:</strong>{" "}
                          Selecting and implementing the most advantageous legal
                          structure.
                        </li>
                        <li>
                          <strong>Succession Planning:</strong> Developing and
                          implementing strategies for business transition.
                        </li>
                        <li>
                          <strong>Retirement Plans:</strong> Designing and
                          administering business retirement plans.
                        </li>
                      </ul>
                      <p className="mt-2">
                        We tailor our services to businesses at various stages,
                        from startups to mature companies preparing for sale or
                        transfer.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="business-size">
                    <AccordionTrigger className="px-4">
                      What size businesses do you work with?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <p>
                        We work with businesses of all sizes, from sole
                        proprietorships to mid-sized companies with up to 100
                        employees. Our services are particularly valuable for:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          <strong>Small Business Owners:</strong> Who need
                          comprehensive financial services but don't require a
                          full-time financial staff.
                        </li>
                        <li>
                          <strong>Professional Practices:</strong> Such as
                          medical, legal, dental, and architectural firms.
                        </li>
                        <li>
                          <strong>Family-Owned Businesses:</strong> Especially
                          those planning for succession or multiple family
                          stakeholders.
                        </li>
                        <li>
                          <strong>Startups:</strong> Looking to establish solid
                          financial foundations from the beginning.
                        </li>
                        <li>
                          <strong>Growing Businesses:</strong> Navigating the
                          financial challenges of expansion.
                        </li>
                      </ul>
                      <p className="mt-2">
                        We tailor our service packages to match the complexity
                        and needs of each business, providing scalable solutions
                        that grow with your company.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="business-taxes">
                    <AccordionTrigger className="px-4">
                      How can you help minimize my business taxes?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <p>Our business tax minimization strategies include:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          <strong>Entity Structure Optimization:</strong>{" "}
                          Selecting the most tax-advantageous business structure
                          (LLC, S-Corp, C-Corp, etc.).
                        </li>
                        <li>
                          <strong>Retirement Plan Implementation:</strong>{" "}
                          Establishing tax-deferred retirement plans that
                          benefit both owners and employees.
                        </li>
                        <li>
                          <strong>
                            Strategic Timing of Income and Expenses:
                          </strong>{" "}
                          Managing when income is recognized and expenses are
                          incurred for optimal tax treatment.
                        </li>
                        <li>
                          <strong>Tax Credits Identification:</strong> Finding
                          and applying for available business tax credits.
                        </li>
                        <li>
                          <strong>Fringe Benefits Planning:</strong> Structuring
                          employee benefits for tax efficiency.
                        </li>
                        <li>
                          <strong>
                            Home Office and Business Expense Maximization:
                          </strong>{" "}
                          Ensuring all legitimate business expenses are properly
                          documented and deducted.
                        </li>
                        <li>
                          <strong>Depreciation Strategy:</strong> Optimizing
                          depreciation methods for business assets.
                        </li>
                        <li>
                          <strong>Family Employment:</strong> Tax-efficient
                          employment of family members when appropriate.
                        </li>
                      </ul>
                      <p className="mt-2">
                        Our approach to tax planning is proactive and
                        year-round, not just at tax filing time. We work closely
                        with business owners to implement strategies that align
                        with their overall business goals while minimizing tax
                        liability.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="succession-planning">
                    <AccordionTrigger className="px-4">
                      What does business succession planning involve?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <p>Our business succession planning process includes:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          <strong>Business Valuation:</strong> Establishing an
                          accurate current value of the business.
                        </li>
                        <li>
                          <strong>Successor Identification:</strong> Helping
                          identify and prepare potential successors, whether
                          family members or key employees.
                        </li>
                        <li>
                          <strong>Ownership Transfer Strategy:</strong>{" "}
                          Developing the most advantageous method for
                          transferring ownership (sale, gift, gradual
                          transition).
                        </li>
                        <li>
                          <strong>Funding Mechanism:</strong> Establishing
                          funding sources for the succession plan, such as life
                          insurance or installment sales.
                        </li>
                        <li>
                          <strong>Tax Optimization:</strong> Structuring the
                          transition to minimize tax implications for both
                          seller and buyer.
                        </li>
                        <li>
                          <strong>Contingency Planning:</strong> Preparing for
                          unexpected events like disability or premature death.
                        </li>
                        <li>
                          <strong>Integration with Personal Planning:</strong>{" "}
                          Ensuring your business succession plan aligns with
                          your personal financial and estate plans.
                        </li>
                      </ul>
                      <p className="mt-2">
                        We recommend starting succession planning at least 5-10
                        years before your intended transition to allow ample
                        time for preparation and implementation. Our team works
                        with your attorney and other advisors to create a
                        comprehensive plan that addresses all aspects of the
                        business transition.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Didn't Find Your Answer */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Didn't Find Your Answer?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              If you couldn't find the information you were looking for, our
              team is ready to help. Contact us directly for personalized
              assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/contact">
                  Contact Us <Mail className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Ready to Start Your Financial Journey?"
        description="Schedule a consultation with one of our expert advisors to discuss your unique needs and goals."
        buttonText="Get Started Today"
        buttonLink="/contact"
      />
    </main>
  );
}
