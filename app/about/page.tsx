import { getassetUrl } from "@/app/api/services/cloudinary/connection";
import AboutPage from "./aboutPage";
import axios from "axios";
export const metadata = {
  title: "About Us | FinAdvise Financial Services",
  description:
    "Learn about our company mission, vision, values, and meet our team of expert financial advisors.",
};

export default async function About() {
  const response = await axios.get('http://localhost:3000/api/team'); // Updated API endpoint
  const teamMembers = response.data.data;
  // const urls = [];
  // const teamMemberNames = [
  //   "David Mitchell",
  //   "Jennifer Williams",
  //   "Michael Rodriguez",
  //   "Amanda Chen",
  //   "Robert Johnson",
  //   "Sophia Patel",
  // ];
  //  for (const member of teamMemberNames) {
  //   const url = await getassetUrl(member);
  //   urls.push(url);
  //  }
  return <AboutPage teamData={teamMembers} />;
}
