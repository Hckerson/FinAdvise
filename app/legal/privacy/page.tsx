import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Privacy Policy | FinAdvise Financial Services",
  description:
    "Our privacy policy outlines how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
              Our commitment to protecting your privacy and maintaining the
              confidentiality of your information.
            </p>
            <p className="text-muted-foreground mt-4">
              Last Updated: January 15, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <h2 className="text-2xl font-bold">Introduction</h2>
            <p>
              At FinAdvise Financial Services, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our services.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree
              with the terms of this Privacy Policy, please do not access the
              site or use our services.
            </p>

            <h2 className="text-2xl font-bold mt-8">Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide
              to us when you:
            </p>
            <ul>
              <li>Register for an account</li>
              <li>Sign up for our newsletter</li>
              <li>Request a consultation</li>
              <li>Complete forms on our website</li>
              <li>Submit information as part of our services</li>
              <li>Contact our customer support</li>
            </ul>
            <p>The personal information we collect may include:</p>
            <ul>
              <li>Name, email address, phone number, and mailing address</li>
              <li>Financial information necessary to provide our services</li>
              <li>Employment information</li>
              <li>Social Security Number or Tax Identification Number</li>
              <li>Investment objectives and risk tolerance</li>
              <li>
                Information about your assets, liabilities, income, and expenses
              </li>
            </ul>

            <p>
              We may also automatically collect certain information when you
              visit our website, including:
            </p>
            <ul>
              <li>IP address and browser type</li>
              <li>Pages you view and links you click</li>
              <li>Time spent on our website</li>
              <li>Referring URL or the webpage that led you to our site</li>
              <li>Device information</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">
              How We Use Your Information
            </h2>
            <p>
              We may use the information we collect for various purposes,
              including:
            </p>
            <ul>
              <li>Providing, maintaining, and improving our services</li>
              <li>Processing transactions and sending related information</li>
              <li>
                Sending administrative information, such as updates to our
                terms, conditions, and policies
              </li>
              <li>Responding to your comments, questions, and requests</li>
              <li>
                Sending you marketing communications about our services,
                features, and events
              </li>
              <li>
                Monitoring and analyzing trends, usage, and activities in
                connection with our services
              </li>
              <li>
                Detecting, investigating, and preventing fraudulent transactions
                and other illegal activities
              </li>
              <li>Personalizing your experience on our website</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">
              Disclosure of Your Information
            </h2>
            <p>
              We may share your personal information in the following
              situations:
            </p>
            <ul>
              <li>
                <strong>{"Service Providers:"}</strong> We may share your
                information with third-party vendors, service providers, and
                other business partners who perform services on our behalf, such
                as hosting services, data analysis, and customer service.
              </li>
              <li>
                <strong>{"Legal Requirements:"}</strong> We may disclose your
                information if required to do so by law or in response to valid
                requests by public authorities (e.g., a court or government
                agency).
              </li>
              <li>
                <strong>{"Business Transfers:"}</strong> We may share or
                transfer your information in connection with a merger,
                financing, acquisition, or dissolution transaction involving all
                or a portion of our business.
              </li>
              <li>
                <strong>{"With Your Consent:"}</strong> We may disclose your
                personal information for any other purpose with your consent.
              </li>
            </ul>
            <p>
              We do not sell, rent, or lease our customer lists to third
              parties.
            </p>

            <h2 className="text-2xl font-bold mt-8">Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding
              your personal information, including:
            </p>
            <ul>
              <li>
                <strong>{"Access:"}</strong> You have the right to request
                access to the personal information we collect about you.
              </li>
              <li>
                <strong>Correction:</strong> You have the right to request that
                we correct any information you believe is inaccurate or
                incomplete.
              </li>
              <li>
                <strong>Deletion:</strong> You have the right to request that we
                delete your personal information, subject to certain exceptions.
              </li>
              <li>
                <strong>Data Portability:</strong> You have the right to request
                that we transfer your data to another entity.
              </li>
              <li>
                <strong>Opt-Out:</strong> You have the right to opt-out of
                certain uses of your personal information, such as marketing
                communications.
              </li>
            </ul>
            <p>
              {`To exercise these rights, please contact us using the information
              provided in the "Contact Us" section below.`}
            </p>

            <h2 className="text-2xl font-bold mt-8">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your
              personal information. However, please be aware that no method of
              transmission over the internet or electronic storage is 100%
              secure, and we cannot guarantee the absolute security of your
              data.
            </p>
            <p>Our security measures include:</p>
            <ul>
              <li>Encryption of sensitive information</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication procedures</li>
              <li>Continuous monitoring for potential vulnerabilities</li>
              <li>Employee training on privacy and security practices</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">
              Retention of Your Information
            </h2>
            <p>
              We will retain your personal information only for as long as
              necessary to fulfill the purposes for which it was collected,
              including to satisfy any legal, regulatory, accounting, or
              reporting requirements. When determining the appropriate retention
              period, we consider the amount, nature, and sensitivity of the
              personal information, the potential risk of harm from unauthorized
              use or disclosure, and the purposes for which we process the
              information.
            </p>

            <h2 className="text-2xl font-bold mt-8">
              Cookies and Similar Technologies
            </h2>
            <p>
              We use cookies and similar technologies to collect information
              about your browsing activities and to distinguish you from other
              users of our website. Cookies are small text files that are placed
              on your device when you visit a website. They allow the website to
              recognize your device and remember information about your visit.
            </p>
            <p>
              We use both session cookies (which expire once you close your web
              browser) and persistent cookies (which stay on your device until
              you delete them). The types of cookies we use include:
            </p>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> These are necessary for the
                website to function properly.
              </li>
              <li>
                <strong>Analytical/Performance Cookies:</strong> These allow us
                to recognize and count the number of visitors and see how
                visitors move around our website.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These enable us to
                personalize our content for you.
              </li>
              <li>
                <strong>Targeting Cookies:</strong> These record your visit to
                our website, the pages you have visited, and the links you have
                followed.
              </li>
            </ul>
            <p>
              You can control cookies through your browser settings. Most
              browsers allow you to refuse to accept cookies and to delete
              cookies. However, if you block all cookies (including essential
              cookies), you may not be able to use all the features of our
              website.
            </p>

            <h2 className="text-2xl font-bold mt-8">
              Changes to This Privacy Policy
            </h2>
            <p>
              {`We may update our Privacy Policy from time to time. We will notify
                you of any changes by posting the new Privacy Policy on this page
                and updating the "Last Updated" date at the top of this Privacy
                Policy. You are advised to review this Privacy Policy periodically
                for any changes.`}
            </p>

            <h2 className="text-2xl font-bold mt-8">Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy,
              please contact us at:
            </p>
            <address className="not-italic">
              FinAdvise Financial Services
              <br />
              123 Financial District
              <br />
              New York, NY 10004
              <br />
              Email: privacy@finadvise.com
              <br />
              Phone: (555) 123-4567
            </address>

            <Separator className="my-8" />

            <div className="text-center">
              <Button asChild className="mt-4">
                <Link href="/legal/terms">Read Our Terms of Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
