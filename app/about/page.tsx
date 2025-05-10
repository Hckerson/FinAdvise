import AboutPage from "./aboutPage";
import prisma from "@/prisma/connections";

export const metadata = {
  title: "About Us | FinAdvise Financial Services",
  description:
    "Learn about our company mission, vision, values, and meet our team of expert financial advisors.",
};

export default async function About() {
  // Instead of using axios to call your own API, fetch data directly
  const teamMembers = await prisma.teamMember.findMany({
    include: {
      user: {
        include: {
          avatar: true,
        },
      },
    },
  });

  return <AboutPage teamData={teamMembers} />;
}
