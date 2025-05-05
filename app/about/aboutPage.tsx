"use client";
import { ArrowRight, Award, Clock, History, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import TeamMemberCard from "@/components/TeamMemberCard";
import { CtaSection } from "@/components/CtaSection";

type TeamMember = {
  id: string;
  position: string;
  bio: string;
  linkedIn: string;
  userId: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
    avatar: [
      {
        id: string;
        userId: string;
        image: string;
        createdAt: string;
        updatedAt: string;
      }
    ];
  };
};

export default function AboutPage({teamData}: {teamData: TeamMember[]}) {

  // const [teamMember, setTeamMember] = useState<TeamMember[]>([]);

  // useEffect(() => {
  //   const fetchTeamMembers = async () => {
  //     try {
  //       const response = await axios.get("/api/team");
  //       setTeamMember(response.data.data);
  //     } catch (error) {
  //       console.error("Error fetching team members:", error);
  //     }
  //   };
  //   fetchTeamMembers();
  // }, []);

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                About FinAdvise
              </h1>
              <p className="text-xl text-muted-foreground">
                A dedicated team of financial experts committed to helping
                individuals and businesses achieve financial success through
                personalized, strategic guidance.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Meet With Us <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-video lg:aspect-square">
              <Image
                src="/pexels-photo-3184291.jpeg"
                alt="Our team in a collaborative meeting"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <History className="mr-1 h-3.5 w-3.5" /> Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Empowering Financial Success
              </h2>
              <p className="text-muted-foreground text-lg">
                Our mission is to empower individuals and businesses to achieve
                their financial goals through expert guidance, innovative
                solutions, and personalized service. We believe that financial
                well-being is the foundation of personal and professional
                growth.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>
                    Providing trustworthy, client-centered financial advice
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>
                    Building long-term relationships based on integrity
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Staying ahead of financial trends and regulations</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Clock className="mr-1 h-3.5 w-3.5" /> Our Vision
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Shaping Financial Futures
              </h2>
              <p className="text-muted-foreground text-lg">
                We envision a world where everyone has access to the financial
                tools, knowledge, and guidance needed to secure their future.
                Our vision is to be the leading trusted advisor for all
                financial decisions, known for our expertise, integrity, and
                client satisfaction.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>
                    Creating innovative financial solutions for changing times
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Advocating for financial literacy and education</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>
                    Leveraging technology to enhance financial management
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and every decision we make
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background rounded-lg p-6 shadow-sm transition-all hover:shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-muted-foreground">
                We prioritize honesty and ethical practices in all our client
                relationships and business dealings.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm transition-all hover:shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Client Focus</h3>
              <p className="text-muted-foreground">
                Every recommendation and solution is tailored to meet the unique
                needs and goals of each client.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm transition-all hover:shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We continuously strive for the highest standards of service and
                expertise in the financial industry.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm transition-all hover:shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace new technologies and approaches to deliver
                cutting-edge financial solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team of certified financial professionals has decades of
              combined experience
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* {teamData.map((member) => (
              <TeamMemberCard
                key={member.id}
                name={member.user.name}
                position={member.position}
                image={member.user.avatar[0]?.image || ""}
                bio={member.bio}
              />
            ))} */}
            <TeamMemberCard
              name="David Mitchell"
              position="Founder & CEO"
              image="https://images.pexels.com/photos/5648101/pexels-photo-5648101.jpeg"
              bio="25+ years of experience in investment banking and financial consulting. MBA from Wharton."
            />
            <TeamMemberCard
              name="Jennifer Williams"
              position="Chief Financial Advisor"
              image="https://images.pexels.com/photos/5717641/pexels-photo-5717641.jpeg"
              bio="Certified Financial Planner with expertise in retirement planning and wealth management."
            />
            <TeamMemberCard
              name="Michael Rodriguez"
              position="Tax Specialist"
              image="https://images.pexels.com/photos/5792627/pexels-photo-5792627.jpeg"
              bio="Former IRS advisor with deep knowledge of tax law and corporate tax strategy optimization."
            />
            <TeamMemberCard
              name="Amanda Chen"
              position="Investment Strategist"
              image="https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg"
              bio="15 years of experience in portfolio management and market analysis. CFA charterholder."
            />
            <TeamMemberCard
              name="Robert Johnson"
              position="Risk Management Specialist"
              image="https://images.pexels.com/photos/5905921/pexels-photo-5905921.jpeg"
              bio="Expert in identifying and mitigating financial risks for both individuals and corporations."
            />
            <TeamMemberCard
              name="Sophia Patel"
              position="Client Relations Director"
              image="https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg"
              bio="Dedicated to ensuring exceptional client experiences and tailored financial solutions."
            />
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From our founding to where we are today
            </p>
          </div>
          <div className="relative border-l border-border pl-5 ml-5 md:ml-10 space-y-12 max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute w-4 h-4 rounded-full bg-primary -left-[34px]"></div>
              <div className="mb-2">
                <span className="text-sm bg-muted-foreground/20 text-muted-foreground px-2 py-1 rounded font-medium">
                  2000
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Company Founded</h3>
              <p className="text-muted-foreground">
                FinAdvise was established with a small team of financial experts
                committed to providing personalized advice.
              </p>
            </div>
            <div className="relative">
              <div className="absolute w-4 h-4 rounded-full bg-primary -left-[34px]"></div>
              <div className="mb-2">
                <span className="text-sm bg-muted-foreground/20 text-muted-foreground px-2 py-1 rounded font-medium">
                  2008
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Weathering Economic Crisis
              </h3>
              <p className="text-muted-foreground">
                Successfully guided clients through the financial crisis,
                reinforcing our commitment to prudent financial management.
              </p>
            </div>
            <div className="relative">
              <div className="absolute w-4 h-4 rounded-full bg-primary -left-[34px]"></div>
              <div className="mb-2">
                <span className="text-sm bg-muted-foreground/20 text-muted-foreground px-2 py-1 rounded font-medium">
                  2015
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Transformation</h3>
              <p className="text-muted-foreground">
                Embraced technological innovation to enhance client services and
                expand our digital presence.
              </p>
            </div>
            <div className="relative">
              <div className="absolute w-4 h-4 rounded-full bg-primary -left-[34px]"></div>
              <div className="mb-2">
                <span className="text-sm bg-muted-foreground/20 text-muted-foreground px-2 py-1 rounded font-medium">
                  2020
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">National Expansion</h3>
              <p className="text-muted-foreground">
                Expanded operations nationally, opening offices in major
                financial centers to better serve our growing client base.
              </p>
            </div>
            <div className="relative">
              <div className="absolute w-4 h-4 rounded-full bg-primary -left-[34px]"></div>
              <div className="mb-2">
                <span className="text-sm bg-muted-foreground/20 text-muted-foreground px-2 py-1 rounded font-medium">
                  Today
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Industry Leadership</h3>
              <p className="text-muted-foreground">
                Recognized as an industry leader with over $2.5 billion in
                assets under management and 1,200+ satisfied clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Want to Join Our Team?"
        description="We're always looking for talented individuals who share our passion for financial excellence."
        buttonText="View Careers"
        buttonLink="/contact"
      />
    </main>
  );
}
