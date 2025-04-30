import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Terms of Service | FinAdvise Financial Services",
  description: "Our terms of service outline the rules and guidelines for using our financial services and website.",
};

export default function TermsOfServicePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
              Please read these terms carefully before using our services or accessing our website.
            </p>
            <p className="text-muted-foreground mt-4">
              Last Updated: January 15, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the FinAdvise Financial Services website and services (collectively, the "Services"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing the Services.
            </p>

            <h2 className="text-2xl font-bold mt-8">2. Use of Services</h2>
            <h3 className="text-xl font-semibold">2.1 Eligibility</h3>
            <p>
              You must be at least 18 years old and capable of forming a binding contract to use our Services. By using our Services, you represent and warrant that you meet these requirements.
            </p>
            
            <h3 className="text-xl font-semibold">2.2 Account Registration</h3>
            <p>
              Some parts of our Services may require you to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your account credentials and for all activities that occur under your account.
            </p>
            
            <h3 className="text-xl font-semibold">2.3 Prohibited Activities</h3>
            <p>
              You agree not to engage in any of the following prohibited activities:
            </p>
            <ul>
              <li>Using the Services for any illegal purpose or in violation of any laws</li>
              <li>Violating any intellectual property rights</li>
              <li>Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Services</li>
              <li>Taking any action that imposes an unreasonable or disproportionately large load on our infrastructure</li>
              <li>Uploading or transmitting viruses, malware, or other malicious code</li>
              <li>Collecting or harvesting any information from the Services, including account names</li>
              <li>Using the Services for any commercial solicitation purposes without our prior written consent</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">3. Financial Services</h2>
            <h3 className="text-xl font-semibold">3.1 Not Financial Advice</h3>
            <p>
              The information provided through our website, blog posts, newsletters, and other publicly available content is for general informational purposes only and should not be construed as financial, investment, tax, or legal advice. It is not intended to be a substitute for professional financial advice specific to your situation.
            </p>
            
            <h3 className="text-xl font-semibold">3.2 Client Services</h3>
            <p>
              Financial advice, planning, and investment management services are only provided to individuals who have entered into a written agreement with FinAdvise Financial Services to become clients. The terms of such services are governed by the specific agreements between FinAdvise and its clients.
            </p>
            
            <h3 className="text-xl font-semibold">3.3 No Guarantee of Results</h3>
            <p>
              Past performance is not a guarantee of future results. We do not guarantee any specific outcome or profit from following our advice or using our services. All investments involve risk, including the potential loss of principal.
            </p>

            <h2 className="text-2xl font-bold mt-8">4. Intellectual Property</h2>
            <h3 className="text-xl font-semibold">4.1 Ownership</h3>
            <p>
              The Services and their original content, features, and functionality are and will remain the exclusive property of FinAdvise Financial Services and its licensors. The Services are protected by copyright, trademark, and other laws of both the United States and foreign countries.
            </p>
            
            <h3 className="text-xl font-semibold">4.2 Limited License</h3>
            <p>
              Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the Services for your personal, non-commercial use.
            </p>

            <h2 className="text-2xl font-bold mt-8">5. Disclaimer of Warranties</h2>
            <p>
              THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. FINADVISE FINANCIAL SERVICES EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR A PARTICULAR PURPOSE.
            </p>
            <p>
              WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, OR THAT ANY DEFECTS IN THE SERVICES WILL BE CORRECTED. WE DO NOT WARRANT THAT THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICES WILL BE ACCURATE OR RELIABLE.
            </p>

            <h2 className="text-2xl font-bold mt-8">6. Limitation of Liability</h2>
            <p>
              IN NO EVENT SHALL FINADVISE FINANCIAL SERVICES, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
            </p>
            <ol>
              <li>YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES;</li>
              <li>ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES;</li>
              <li>ANY CONTENT OBTAINED FROM THE SERVICES; AND</li>
              <li>UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.</li>
            </ol>
            <p>
              IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE AMOUNT PAID BY YOU, IF ANY, FOR ACCESSING OR USING THE SERVICES DURING THE TWELVE (12) MONTHS PRIOR TO THE CLAIM.
            </p>

            <h2 className="text-2xl font-bold mt-8">7. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless FinAdvise Financial Services, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services.
            </p>

            <h2 className="text-2xl font-bold mt-8">8. Termination</h2>
            <p>
              We may terminate or suspend your access to all or part of the Services, without notice, for any conduct that we, in our sole discretion, believe violates these Terms or is harmful to other users of the Services, us, or third parties, or for any other reason.
            </p>

            <h2 className="text-2xl font-bold mt-8">9. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. The most current version will be posted on our website with the effective date. Your continued use of the Services after any such changes constitutes your acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8">10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located in New York County, New York.
            </p>

            <h2 className="text-2xl font-bold mt-8">11. Dispute Resolution</h2>
            <p>
              Any dispute arising from or relating to these Terms or the Services will first be resolved through good-faith negotiations. If such negotiations fail, the dispute shall be resolved through binding arbitration in New York, New York, under the rules of the American Arbitration Association. The arbitrator's award shall be final and may be entered as a judgment in any court of competent jurisdiction.
            </p>

            <h2 className="text-2xl font-bold mt-8">12. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the Terms will otherwise remain in full force and effect and enforceable.
            </p>

            <h2 className="text-2xl font-bold mt-8">13. Entire Agreement</h2>
            <p>
              These Terms constitute the entire agreement between you and FinAdvise Financial Services regarding the Services and supersede all prior and contemporaneous agreements, proposals, or representations, written or oral, concerning the subject matter of these Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8">14. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <address className="not-italic">
              FinAdvise Financial Services<br />
              123 Financial District<br />
              New York, NY 10004<br />
              Email: legal@finadvise.com<br />
              Phone: (555) 123-4567
            </address>

            <Separator className="my-8" />

            <div className="text-center">
              <Button asChild className="mt-4">
                <Link href="/legal/privacy">
                  Read Our Privacy Policy
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}