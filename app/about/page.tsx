import AboutPage from "./aboutPage";
import axios from "axios";
export const metadata = {
  title: "About Us | FinAdvise Financial Services",
  description:
    "Learn about our company mission, vision, values, and meet our team of expert financial advisors.",
};

export default async function About() {
  const response = await axios.get('http://localhost:3000/api/team');
  const teamMembers = response.data.data;
  return <AboutPage teamData={teamMembers} />;
}
